export declare const UserStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly SUSPENDED: 'SUSPENDED';
    readonly LOCKED: 'LOCKED';
    readonly CLOSED: 'CLOSED';
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const AccountType: {
    readonly SAVINGS: 'SAVINGS';
    readonly CURRENT: 'CURRENT';
    readonly FIXED_DEPOSIT: 'FIXED_DEPOSIT';
};
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export declare const AccountStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly FROZEN: 'FROZEN';
    readonly SUSPENDED: 'SUSPENDED';
    readonly CLOSED: 'CLOSED';
};
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];
export declare const SavingsGoalStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly COMPLETED: 'COMPLETED';
    readonly PAUSED: 'PAUSED';
    readonly CANCELLED: 'CANCELLED';
};
export type SavingsGoalStatus = (typeof SavingsGoalStatus)[keyof typeof SavingsGoalStatus];
export declare const LoanStatus: {
    readonly PENDING: 'PENDING';
    readonly APPROVED: 'APPROVED';
    readonly ACTIVE: 'ACTIVE';
    readonly PAID: 'PAID';
    readonly REJECTED: 'REJECTED';
    readonly DEFAULTED: 'DEFAULTED';
    readonly CANCELLED: 'CANCELLED';
};
export type LoanStatus = (typeof LoanStatus)[keyof typeof LoanStatus];
export declare const LoanRepaymentStatus: {
    readonly PENDING: 'PENDING';
    readonly COMPLETED: 'COMPLETED';
    readonly FAILED: 'FAILED';
};
export type LoanRepaymentStatus = (typeof LoanRepaymentStatus)[keyof typeof LoanRepaymentStatus];
export declare const TransactionType: {
    readonly DEPOSIT: 'DEPOSIT';
    readonly WITHDRAWAL: 'WITHDRAWAL';
    readonly TRANSFER: 'TRANSFER';
    readonly PAYMENT: 'PAYMENT';
    readonly REFUND: 'REFUND';
    readonly FEE: 'FEE';
    readonly INTEREST: 'INTEREST';
    readonly LOAN_DISBURSEMENT: 'LOAN_DISBURSEMENT';
    readonly LOAN_REPAYMENT: 'LOAN_REPAYMENT';
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
export declare const TransactionStatus: {
    readonly PENDING: 'PENDING';
    readonly PROCESSING: 'PROCESSING';
    readonly COMPLETED: 'COMPLETED';
    readonly FAILED: 'FAILED';
    readonly REVERSED: 'REVERSED';
    readonly CANCELLED: 'CANCELLED';
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
export declare const TransactionChannel: {
    readonly INTERNAL: 'INTERNAL';
    readonly BANK_TRANSFER: 'BANK_TRANSFER';
    readonly CARD: 'CARD';
    readonly ATM: 'ATM';
    readonly MOBILE: 'MOBILE';
    readonly WEB: 'WEB';
    readonly SYSTEM: 'SYSTEM';
};
export type TransactionChannel = (typeof TransactionChannel)[keyof typeof TransactionChannel];
export declare const LedgerEntryDirection: {
    readonly DEBIT: 'DEBIT';
    readonly CREDIT: 'CREDIT';
};
export type LedgerEntryDirection = (typeof LedgerEntryDirection)[keyof typeof LedgerEntryDirection];
export declare const CardType: {
    readonly VIRTUAL: 'VIRTUAL';
    readonly PHYSICAL: 'PHYSICAL';
};
export type CardType = (typeof CardType)[keyof typeof CardType];
export declare const CardStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly FROZEN: 'FROZEN';
    readonly BLOCKED: 'BLOCKED';
    readonly EXPIRED: 'EXPIRED';
    readonly CANCELLED: 'CANCELLED';
};
export type CardStatus = (typeof CardStatus)[keyof typeof CardStatus];
export declare const SupportTicketStatus: {
    readonly OPEN: 'OPEN';
    readonly IN_PROGRESS: 'IN_PROGRESS';
    readonly RESOLVED: 'RESOLVED';
    readonly CLOSED: 'CLOSED';
};
export type SupportTicketStatus = (typeof SupportTicketStatus)[keyof typeof SupportTicketStatus];
export declare const SupportTicketPriority: {
    readonly LOW: 'LOW';
    readonly MEDIUM: 'MEDIUM';
    readonly HIGH: 'HIGH';
    readonly URGENT: 'URGENT';
};
export type SupportTicketPriority = (typeof SupportTicketPriority)[keyof typeof SupportTicketPriority];
export declare const UserRole: {
    readonly CUSTOMER: 'CUSTOMER';
    readonly ADMIN: 'ADMIN';
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const TransactionAuthMethod: {
    readonly PASSWORD: 'PASSWORD';
    readonly PIN: 'PIN';
    readonly OTP: 'OTP';
};
export type TransactionAuthMethod = (typeof TransactionAuthMethod)[keyof typeof TransactionAuthMethod];
