import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: 'User';
    readonly Account: 'Account';
    readonly SavingsGoal: 'SavingsGoal';
    readonly Loan: 'Loan';
    readonly LoanRepayment: 'LoanRepayment';
    readonly SupportTicket: 'SupportTicket';
    readonly SupportMessage: 'SupportMessage';
    readonly Card: 'Card';
    readonly Transaction: 'Transaction';
    readonly Transfer: 'Transfer';
    readonly Session: 'Session';
    readonly LedgerEntry: 'LedgerEntry';
    readonly TransactionAuthChallenge: 'TransactionAuthChallenge';
    readonly SavingsGoalContribution: 'SavingsGoalContribution';
    readonly Notification: 'Notification';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly email: 'email';
    readonly passwordHash: 'passwordHash';
    readonly firstName: 'firstName';
    readonly lastName: 'lastName';
    readonly phone: 'phone';
    readonly status: 'status';
    readonly role: 'role';
    readonly emailVerifiedAt: 'emailVerifiedAt';
    readonly failedLoginAttempts: 'failedLoginAttempts';
    readonly lockedUntil: 'lockedUntil';
    readonly passwordChangedAt: 'passwordChangedAt';
    readonly emailVerificationTokenHash: 'emailVerificationTokenHash';
    readonly emailVerificationExpiresAt: 'emailVerificationExpiresAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly accountNumber: 'accountNumber';
    readonly type: 'type';
    readonly status: 'status';
    readonly currency: 'currency';
    readonly balance: 'balance';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const SavingsGoalScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly accountId: 'accountId';
    readonly name: 'name';
    readonly targetAmount: 'targetAmount';
    readonly currentAmount: 'currentAmount';
    readonly currency: 'currency';
    readonly targetDate: 'targetDate';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SavingsGoalScalarFieldEnum = (typeof SavingsGoalScalarFieldEnum)[keyof typeof SavingsGoalScalarFieldEnum];
export declare const LoanScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly accountId: 'accountId';
    readonly amount: 'amount';
    readonly interestRate: 'interestRate';
    readonly totalRepayment: 'totalRepayment';
    readonly amountRepaid: 'amountRepaid';
    readonly currency: 'currency';
    readonly termMonths: 'termMonths';
    readonly status: 'status';
    readonly purpose: 'purpose';
    readonly approvedAt: 'approvedAt';
    readonly disbursedAt: 'disbursedAt';
    readonly dueDate: 'dueDate';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum];
export declare const LoanRepaymentScalarFieldEnum: {
    readonly id: 'id';
    readonly loanId: 'loanId';
    readonly transactionId: 'transactionId';
    readonly amount: 'amount';
    readonly currency: 'currency';
    readonly status: 'status';
    readonly dueDate: 'dueDate';
    readonly paidAt: 'paidAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type LoanRepaymentScalarFieldEnum = (typeof LoanRepaymentScalarFieldEnum)[keyof typeof LoanRepaymentScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly subject: 'subject';
    readonly category: 'category';
    readonly priority: 'priority';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const SupportMessageScalarFieldEnum: {
    readonly id: 'id';
    readonly ticketId: 'ticketId';
    readonly userId: 'userId';
    readonly message: 'message';
    readonly readAt: 'readAt';
    readonly createdAt: 'createdAt';
};
export type SupportMessageScalarFieldEnum = (typeof SupportMessageScalarFieldEnum)[keyof typeof SupportMessageScalarFieldEnum];
export declare const CardScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly accountId: 'accountId';
    readonly type: 'type';
    readonly status: 'status';
    readonly cardNumberHash: 'cardNumberHash';
    readonly lastFour: 'lastFour';
    readonly expiryMonth: 'expiryMonth';
    readonly expiryYear: 'expiryYear';
    readonly frozenAt: 'frozenAt';
    readonly blockedAt: 'blockedAt';
    readonly cancelledAt: 'cancelledAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum];
export declare const TransactionScalarFieldEnum: {
    readonly id: 'id';
    readonly reference: 'reference';
    readonly idempotencyKey: 'idempotencyKey';
    readonly type: 'type';
    readonly status: 'status';
    readonly amount: 'amount';
    readonly currency: 'currency';
    readonly description: 'description';
    readonly channel: 'channel';
    readonly cardId: 'cardId';
    readonly senderAccountId: 'senderAccountId';
    readonly recipientAccountId: 'recipientAccountId';
    readonly userId: 'userId';
    readonly metadata: 'metadata';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];
export declare const TransferScalarFieldEnum: {
    readonly id: 'id';
    readonly reference: 'reference';
    readonly idempotencyKey: 'idempotencyKey';
    readonly userId: 'userId';
    readonly fromAccountId: 'fromAccountId';
    readonly toAccountId: 'toAccountId';
    readonly amount: 'amount';
    readonly currency: 'currency';
    readonly description: 'description';
    readonly status: 'status';
    readonly transactionId: 'transactionId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type TransferScalarFieldEnum = (typeof TransferScalarFieldEnum)[keyof typeof TransferScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly tokenHash: 'tokenHash';
    readonly expiresAt: 'expiresAt';
    readonly revokedAt: 'revokedAt';
    readonly ipAddress: 'ipAddress';
    readonly userAgent: 'userAgent';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const LedgerEntryScalarFieldEnum: {
    readonly id: 'id';
    readonly transactionId: 'transactionId';
    readonly accountId: 'accountId';
    readonly direction: 'direction';
    readonly amount: 'amount';
    readonly currency: 'currency';
    readonly balanceAfter: 'balanceAfter';
    readonly createdAt: 'createdAt';
};
export type LedgerEntryScalarFieldEnum = (typeof LedgerEntryScalarFieldEnum)[keyof typeof LedgerEntryScalarFieldEnum];
export declare const TransactionAuthChallengeScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly transferId: 'transferId';
    readonly method: 'method';
    readonly challengeHash: 'challengeHash';
    readonly expiresAt: 'expiresAt';
    readonly consumedAt: 'consumedAt';
    readonly attempts: 'attempts';
    readonly maxAttempts: 'maxAttempts';
    readonly createdAt: 'createdAt';
};
export type TransactionAuthChallengeScalarFieldEnum = (typeof TransactionAuthChallengeScalarFieldEnum)[keyof typeof TransactionAuthChallengeScalarFieldEnum];
export declare const SavingsGoalContributionScalarFieldEnum: {
    readonly id: 'id';
    readonly goalId: 'goalId';
    readonly transactionId: 'transactionId';
    readonly amount: 'amount';
    readonly currency: 'currency';
    readonly createdAt: 'createdAt';
};
export type SavingsGoalContributionScalarFieldEnum = (typeof SavingsGoalContributionScalarFieldEnum)[keyof typeof SavingsGoalContributionScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly type: 'type';
    readonly title: 'title';
    readonly message: 'message';
    readonly readAt: 'readAt';
    readonly createdAt: 'createdAt';
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
