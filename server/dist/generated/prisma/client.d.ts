import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model SavingsGoal
 *
 */
export type SavingsGoal = Prisma.SavingsGoalModel;
/**
 * Model Loan
 *
 */
export type Loan = Prisma.LoanModel;
/**
 * Model LoanRepayment
 *
 */
export type LoanRepayment = Prisma.LoanRepaymentModel;
/**
 * Model SupportTicket
 *
 */
export type SupportTicket = Prisma.SupportTicketModel;
/**
 * Model SupportMessage
 *
 */
export type SupportMessage = Prisma.SupportMessageModel;
/**
 * Model Card
 *
 */
export type Card = Prisma.CardModel;
/**
 * Model Transaction
 *
 */
export type Transaction = Prisma.TransactionModel;
/**
 * Model Transfer
 *
 */
export type Transfer = Prisma.TransferModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model LedgerEntry
 *
 */
export type LedgerEntry = Prisma.LedgerEntryModel;
/**
 * Model TransactionAuthChallenge
 *
 */
export type TransactionAuthChallenge = Prisma.TransactionAuthChallengeModel;
/**
 * Model SavingsGoalContribution
 *
 */
export type SavingsGoalContribution = Prisma.SavingsGoalContributionModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
