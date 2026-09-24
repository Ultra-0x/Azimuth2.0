import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType;
};
export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | Prisma.EnumAccountStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
};
export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | Prisma.EnumAccountStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type EnumSavingsGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsGoalStatus | Prisma.EnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SavingsGoalStatus[] | Prisma.ListEnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SavingsGoalStatus[] | Prisma.ListEnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSavingsGoalStatusFilter<$PrismaModel> | $Enums.SavingsGoalStatus;
};
export type EnumSavingsGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsGoalStatus | Prisma.EnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SavingsGoalStatus[] | Prisma.ListEnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SavingsGoalStatus[] | Prisma.ListEnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSavingsGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.SavingsGoalStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSavingsGoalStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSavingsGoalStatusFilter<$PrismaModel>;
};
export type EnumLoanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | Prisma.EnumLoanStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LoanStatus[] | Prisma.ListEnumLoanStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoanStatus[] | Prisma.ListEnumLoanStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoanStatusFilter<$PrismaModel> | $Enums.LoanStatus;
};
export type EnumLoanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | Prisma.EnumLoanStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LoanStatus[] | Prisma.ListEnumLoanStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoanStatus[] | Prisma.ListEnumLoanStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLoanStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLoanStatusFilter<$PrismaModel>;
};
export type EnumLoanRepaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanRepaymentStatus | Prisma.EnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LoanRepaymentStatus[] | Prisma.ListEnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoanRepaymentStatus[] | Prisma.ListEnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoanRepaymentStatusFilter<$PrismaModel> | $Enums.LoanRepaymentStatus;
};
export type EnumLoanRepaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanRepaymentStatus | Prisma.EnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LoanRepaymentStatus[] | Prisma.ListEnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoanRepaymentStatus[] | Prisma.ListEnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoanRepaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanRepaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLoanRepaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLoanRepaymentStatusFilter<$PrismaModel>;
};
export type EnumSupportTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketPriority | Prisma.EnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel> | $Enums.SupportTicketPriority;
};
export type EnumSupportTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketStatus | Prisma.EnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel> | $Enums.SupportTicketStatus;
};
export type EnumSupportTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketPriority | Prisma.EnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.SupportTicketPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel>;
};
export type EnumSupportTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketStatus | Prisma.EnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.SupportTicketStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel>;
};
export type EnumCardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | Prisma.EnumCardTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CardType[] | Prisma.ListEnumCardTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CardType[] | Prisma.ListEnumCardTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCardTypeFilter<$PrismaModel> | $Enums.CardType;
};
export type EnumCardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CardStatus | Prisma.EnumCardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CardStatus[] | Prisma.ListEnumCardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CardStatus[] | Prisma.ListEnumCardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCardStatusFilter<$PrismaModel> | $Enums.CardStatus;
};
export type EnumCardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | Prisma.EnumCardTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CardType[] | Prisma.ListEnumCardTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CardType[] | Prisma.ListEnumCardTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCardTypeWithAggregatesFilter<$PrismaModel> | $Enums.CardType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCardTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCardTypeFilter<$PrismaModel>;
};
export type EnumCardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardStatus | Prisma.EnumCardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CardStatus[] | Prisma.ListEnumCardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CardStatus[] | Prisma.ListEnumCardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCardStatusWithAggregatesFilter<$PrismaModel> | $Enums.CardStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCardStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCardStatusFilter<$PrismaModel>;
};
export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | Prisma.EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType;
};
export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
};
export type EnumTransactionChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionChannel | Prisma.EnumTransactionChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionChannel[] | Prisma.ListEnumTransactionChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionChannel[] | Prisma.ListEnumTransactionChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionChannelFilter<$PrismaModel> | $Enums.TransactionChannel;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | Prisma.EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel>;
};
export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
};
export type EnumTransactionChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionChannel | Prisma.EnumTransactionChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionChannel[] | Prisma.ListEnumTransactionChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionChannel[] | Prisma.ListEnumTransactionChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionChannelWithAggregatesFilter<$PrismaModel> | $Enums.TransactionChannel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionChannelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionChannelFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumLedgerEntryDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryDirection | Prisma.EnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerEntryDirection[] | Prisma.ListEnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerEntryDirection[] | Prisma.ListEnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerEntryDirectionFilter<$PrismaModel> | $Enums.LedgerEntryDirection;
};
export type EnumLedgerEntryDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryDirection | Prisma.EnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerEntryDirection[] | Prisma.ListEnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerEntryDirection[] | Prisma.ListEnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerEntryDirectionWithAggregatesFilter<$PrismaModel> | $Enums.LedgerEntryDirection;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerEntryDirectionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerEntryDirectionFilter<$PrismaModel>;
};
export type EnumTransactionAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionAuthMethod | Prisma.EnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionAuthMethod[] | Prisma.ListEnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionAuthMethod[] | Prisma.ListEnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionAuthMethodFilter<$PrismaModel> | $Enums.TransactionAuthMethod;
};
export type EnumTransactionAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionAuthMethod | Prisma.EnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionAuthMethod[] | Prisma.ListEnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionAuthMethod[] | Prisma.ListEnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.TransactionAuthMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionAuthMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionAuthMethodFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType;
};
export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | Prisma.EnumAccountStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
};
export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | Prisma.EnumAccountStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel>;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedEnumSavingsGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsGoalStatus | Prisma.EnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SavingsGoalStatus[] | Prisma.ListEnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SavingsGoalStatus[] | Prisma.ListEnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSavingsGoalStatusFilter<$PrismaModel> | $Enums.SavingsGoalStatus;
};
export type NestedEnumSavingsGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsGoalStatus | Prisma.EnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SavingsGoalStatus[] | Prisma.ListEnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SavingsGoalStatus[] | Prisma.ListEnumSavingsGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSavingsGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.SavingsGoalStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSavingsGoalStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSavingsGoalStatusFilter<$PrismaModel>;
};
export type NestedEnumLoanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | Prisma.EnumLoanStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LoanStatus[] | Prisma.ListEnumLoanStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoanStatus[] | Prisma.ListEnumLoanStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoanStatusFilter<$PrismaModel> | $Enums.LoanStatus;
};
export type NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | Prisma.EnumLoanStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LoanStatus[] | Prisma.ListEnumLoanStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoanStatus[] | Prisma.ListEnumLoanStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLoanStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLoanStatusFilter<$PrismaModel>;
};
export type NestedEnumLoanRepaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanRepaymentStatus | Prisma.EnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LoanRepaymentStatus[] | Prisma.ListEnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoanRepaymentStatus[] | Prisma.ListEnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoanRepaymentStatusFilter<$PrismaModel> | $Enums.LoanRepaymentStatus;
};
export type NestedEnumLoanRepaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanRepaymentStatus | Prisma.EnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LoanRepaymentStatus[] | Prisma.ListEnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoanRepaymentStatus[] | Prisma.ListEnumLoanRepaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoanRepaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanRepaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLoanRepaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLoanRepaymentStatusFilter<$PrismaModel>;
};
export type NestedEnumSupportTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketPriority | Prisma.EnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel> | $Enums.SupportTicketPriority;
};
export type NestedEnumSupportTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketStatus | Prisma.EnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel> | $Enums.SupportTicketStatus;
};
export type NestedEnumSupportTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketPriority | Prisma.EnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.SupportTicketPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel>;
};
export type NestedEnumSupportTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketStatus | Prisma.EnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.SupportTicketStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel>;
};
export type NestedEnumCardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | Prisma.EnumCardTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CardType[] | Prisma.ListEnumCardTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CardType[] | Prisma.ListEnumCardTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCardTypeFilter<$PrismaModel> | $Enums.CardType;
};
export type NestedEnumCardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CardStatus | Prisma.EnumCardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CardStatus[] | Prisma.ListEnumCardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CardStatus[] | Prisma.ListEnumCardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCardStatusFilter<$PrismaModel> | $Enums.CardStatus;
};
export type NestedEnumCardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | Prisma.EnumCardTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CardType[] | Prisma.ListEnumCardTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CardType[] | Prisma.ListEnumCardTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCardTypeWithAggregatesFilter<$PrismaModel> | $Enums.CardType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCardTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCardTypeFilter<$PrismaModel>;
};
export type NestedEnumCardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardStatus | Prisma.EnumCardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CardStatus[] | Prisma.ListEnumCardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CardStatus[] | Prisma.ListEnumCardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCardStatusWithAggregatesFilter<$PrismaModel> | $Enums.CardStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCardStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCardStatusFilter<$PrismaModel>;
};
export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | Prisma.EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType;
};
export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
};
export type NestedEnumTransactionChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionChannel | Prisma.EnumTransactionChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionChannel[] | Prisma.ListEnumTransactionChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionChannel[] | Prisma.ListEnumTransactionChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionChannelFilter<$PrismaModel> | $Enums.TransactionChannel;
};
export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | Prisma.EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel>;
};
export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
};
export type NestedEnumTransactionChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionChannel | Prisma.EnumTransactionChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionChannel[] | Prisma.ListEnumTransactionChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionChannel[] | Prisma.ListEnumTransactionChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionChannelWithAggregatesFilter<$PrismaModel> | $Enums.TransactionChannel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionChannelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionChannelFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumLedgerEntryDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryDirection | Prisma.EnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerEntryDirection[] | Prisma.ListEnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerEntryDirection[] | Prisma.ListEnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerEntryDirectionFilter<$PrismaModel> | $Enums.LedgerEntryDirection;
};
export type NestedEnumLedgerEntryDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryDirection | Prisma.EnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerEntryDirection[] | Prisma.ListEnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerEntryDirection[] | Prisma.ListEnumLedgerEntryDirectionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerEntryDirectionWithAggregatesFilter<$PrismaModel> | $Enums.LedgerEntryDirection;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerEntryDirectionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerEntryDirectionFilter<$PrismaModel>;
};
export type NestedEnumTransactionAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionAuthMethod | Prisma.EnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionAuthMethod[] | Prisma.ListEnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionAuthMethod[] | Prisma.ListEnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionAuthMethodFilter<$PrismaModel> | $Enums.TransactionAuthMethod;
};
export type NestedEnumTransactionAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionAuthMethod | Prisma.EnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionAuthMethod[] | Prisma.ListEnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionAuthMethod[] | Prisma.ListEnumTransactionAuthMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.TransactionAuthMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionAuthMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionAuthMethodFilter<$PrismaModel>;
};
