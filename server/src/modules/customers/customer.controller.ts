import type { Request, Response } from "express";
import { updateCustomerProfileSchema } from "./customer.schemas.js";
import {
  CustomerError,
  getCustomerProfile,
  updateCustomerProfile,
} from "./customer.service.js";

export async function getMyProfile(
  req: Request,
  res: Response,
) {
  if (!req.user) {
    res.status(401).json({
      error: "UNAUTHENTICATED",
      message: "Authentication is required.",
    });
    return;
  }

  try {
    const customer = await getCustomerProfile(req.user.id);

    if (!customer) {
      res.status(404).json({
        error: "CUSTOMER_NOT_FOUND",
        message: "Customer profile could not be found.",
      });
      return;
    }

    res.status(200).json({
      customer,
    });
  } catch (error) {
    console.error("Get customer profile error:", error);

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve your profile.",
    });
  }
}

export async function updateMyProfile(
  req: Request,
  res: Response,
) {
  if (!req.user) {
    res.status(401).json({
      error: "UNAUTHENTICATED",
      message: "Authentication is required.",
    });
    return;
  }

  const validation =
    updateCustomerProfileSchema.safeParse(req.body);

  if (!validation.success) {
    const issues = validation.error.issues;

    const firstNameIssue = issues.find(
      (issue) => issue.path[0] === "firstName",
    );

    const lastNameIssue = issues.find(
      (issue) => issue.path[0] === "lastName",
    );

    const phoneIssue = issues.find(
      (issue) => issue.path[0] === "phone",
    );

    const unknownFieldIssue = issues.find(
      (issue) => issue.code === "unrecognized_keys",
    );

    if (firstNameIssue) {
      res.status(400).json({
        error: "INVALID_FIRST_NAME",
        message: firstNameIssue.message,
      });
      return;
    }

    if (lastNameIssue) {
      res.status(400).json({
        error: "INVALID_LAST_NAME",
        message: lastNameIssue.message,
      });
      return;
    }

    if (phoneIssue) {
      res.status(400).json({
        error: "INVALID_PHONE",
        message: phoneIssue.message,
      });
      return;
    }

    if (unknownFieldIssue) {
      res.status(400).json({
        error: "INVALID_PROFILE_FIELDS",
        message:
          "Only firstName, lastName, and phone can be updated.",
      });
      return;
    }

    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Invalid profile details.",
      details: validation.error.flatten(),
    });
    return;
  }

  if (Object.keys(validation.data).length === 0) {
    res.status(400).json({
      error: "NO_CHANGES",
      message:
        "Provide at least one profile field to update.",
    });
    return;
  }

  const updateData: {
    firstName?: string;
    lastName?: string;
    phone?: string | null;
  } = {};

  if (validation.data.firstName !== undefined) {
    updateData.firstName = validation.data.firstName;
  }

  if (validation.data.lastName !== undefined) {
    updateData.lastName = validation.data.lastName;
  }

  if (validation.data.phone !== undefined) {
    updateData.phone =
      validation.data.phone === ""
        ? null
        : validation.data.phone;
  }

  try {
    const customer =
      await updateCustomerProfile(
        req.user.id,
        updateData,
      );

    res.status(200).json({
      message: "Profile updated successfully.",
      customer,
    });
  } catch (error) {
    if (error instanceof CustomerError) {
      if (error.code === "CUSTOMER_NOT_FOUND") {
        res.status(404).json({
          error: error.code,
          message: error.message,
        });
        return;
      }

      if (
        error.code === "ACCOUNT_CLOSED" ||
        error.code === "ACCOUNT_LOCKED"
      ) {
        res.status(403).json({
          error: error.code,
          message: error.message,
        });
        return;
      }
    }

    console.error(
      "Update customer profile error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to update your profile.",
    });
  }
}