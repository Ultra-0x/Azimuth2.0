import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    failedLoginAttempts: number | null;
};
export type UserSumAggregateOutputType = {
    failedLoginAttempts: number | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    status: $Enums.UserStatus | null;
    role: $Enums.UserRole | null;
    emailVerifiedAt: Date | null;
    failedLoginAttempts: number | null;
    lockedUntil: Date | null;
    passwordChangedAt: Date | null;
    emailVerificationTokenHash: string | null;
    emailVerificationExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    status: $Enums.UserStatus | null;
    role: $Enums.UserRole | null;
    emailVerifiedAt: Date | null;
    failedLoginAttempts: number | null;
    lockedUntil: Date | null;
    passwordChangedAt: Date | null;
    emailVerificationTokenHash: string | null;
    emailVerificationExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    firstName: number;
    lastName: number;
    phone: number;
    status: number;
    role: number;
    emailVerifiedAt: number;
    failedLoginAttempts: number;
    lockedUntil: number;
    passwordChangedAt: number;
    emailVerificationTokenHash: number;
    emailVerificationExpiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    failedLoginAttempts?: true;
};
export type UserSumAggregateInputType = {
    failedLoginAttempts?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    status?: true;
    role?: true;
    emailVerifiedAt?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    passwordChangedAt?: true;
    emailVerificationTokenHash?: true;
    emailVerificationExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    status?: true;
    role?: true;
    emailVerifiedAt?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    passwordChangedAt?: true;
    emailVerificationTokenHash?: true;
    emailVerificationExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    status?: true;
    role?: true;
    emailVerifiedAt?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    passwordChangedAt?: true;
    emailVerificationTokenHash?: true;
    emailVerificationExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    status: $Enums.UserStatus;
    role: $Enums.UserRole;
    emailVerifiedAt: Date | null;
    failedLoginAttempts: number;
    lockedUntil: Date | null;
    passwordChangedAt: Date | null;
    emailVerificationTokenHash: string | null;
    emailVerificationExpiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"User"> | number;
    lockedUntil?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    passwordChangedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    emailVerificationTokenHash?: Prisma.StringNullableFilter<"User"> | string | null;
    emailVerificationExpiresAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
    savingsGoals?: Prisma.SavingsGoalListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    transfers?: Prisma.TransferListRelationFilter;
    cards?: Prisma.CardListRelationFilter;
    loans?: Prisma.LoanListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    supportTickets?: Prisma.SupportTicketListRelationFilter;
    supportMessages?: Prisma.SupportMessageListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailVerificationTokenHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailVerificationExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeOrderByRelationAggregateInput;
    accounts?: Prisma.AccountOrderByRelationAggregateInput;
    savingsGoals?: Prisma.SavingsGoalOrderByRelationAggregateInput;
    transactions?: Prisma.TransactionOrderByRelationAggregateInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    transfers?: Prisma.TransferOrderByRelationAggregateInput;
    cards?: Prisma.CardOrderByRelationAggregateInput;
    loans?: Prisma.LoanOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    supportTickets?: Prisma.SupportTicketOrderByRelationAggregateInput;
    supportMessages?: Prisma.SupportMessageOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    emailVerificationTokenHash?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"User"> | number;
    lockedUntil?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    passwordChangedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    emailVerificationExpiresAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
    savingsGoals?: Prisma.SavingsGoalListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    transfers?: Prisma.TransferListRelationFilter;
    cards?: Prisma.CardListRelationFilter;
    loans?: Prisma.LoanListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    supportTickets?: Prisma.SupportTicketListRelationFilter;
    supportMessages?: Prisma.SupportMessageListRelationFilter;
}, "id" | "email" | "emailVerificationTokenHash">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailVerificationTokenHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailVerificationExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    emailVerifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    failedLoginAttempts?: Prisma.IntWithAggregatesFilter<"User"> | number;
    lockedUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    passwordChangedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    emailVerificationTokenHash?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    emailVerificationExpiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrder;
    emailVerificationTokenHash?: Prisma.SortOrder;
    emailVerificationExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    failedLoginAttempts?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrder;
    emailVerificationTokenHash?: Prisma.SortOrder;
    emailVerificationExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrder;
    emailVerificationTokenHash?: Prisma.SortOrder;
    emailVerificationExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    failedLoginAttempts?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutAccountsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    upsert?: Prisma.UserUpsertWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput, Prisma.UserUpdateWithoutAccountsInput>, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserCreateNestedOneWithoutSavingsGoalsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSavingsGoalsInput, Prisma.UserUncheckedCreateWithoutSavingsGoalsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSavingsGoalsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSavingsGoalsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSavingsGoalsInput, Prisma.UserUncheckedCreateWithoutSavingsGoalsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSavingsGoalsInput;
    upsert?: Prisma.UserUpsertWithoutSavingsGoalsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSavingsGoalsInput, Prisma.UserUpdateWithoutSavingsGoalsInput>, Prisma.UserUncheckedUpdateWithoutSavingsGoalsInput>;
};
export type UserCreateNestedOneWithoutLoansInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoansInput, Prisma.UserUncheckedCreateWithoutLoansInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoansInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLoansNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoansInput, Prisma.UserUncheckedCreateWithoutLoansInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoansInput;
    upsert?: Prisma.UserUpsertWithoutLoansInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLoansInput, Prisma.UserUpdateWithoutLoansInput>, Prisma.UserUncheckedUpdateWithoutLoansInput>;
};
export type UserCreateNestedOneWithoutSupportTicketsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSupportTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportTicketsInput;
    upsert?: Prisma.UserUpsertWithoutSupportTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSupportTicketsInput, Prisma.UserUpdateWithoutSupportTicketsInput>, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
};
export type UserCreateNestedOneWithoutSupportMessagesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportMessagesInput, Prisma.UserUncheckedCreateWithoutSupportMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSupportMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportMessagesInput, Prisma.UserUncheckedCreateWithoutSupportMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportMessagesInput;
    upsert?: Prisma.UserUpsertWithoutSupportMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSupportMessagesInput, Prisma.UserUpdateWithoutSupportMessagesInput>, Prisma.UserUncheckedUpdateWithoutSupportMessagesInput>;
};
export type UserCreateNestedOneWithoutCardsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCardsInput, Prisma.UserUncheckedCreateWithoutCardsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCardsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCardsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCardsInput, Prisma.UserUncheckedCreateWithoutCardsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCardsInput;
    upsert?: Prisma.UserUpsertWithoutCardsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCardsInput, Prisma.UserUpdateWithoutCardsInput>, Prisma.UserUncheckedUpdateWithoutCardsInput>;
};
export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.UserUpsertWithoutTransactionsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTransactionsInput, Prisma.UserUpdateWithoutTransactionsInput>, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
};
export type UserCreateNestedOneWithoutTransfersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransfersInput, Prisma.UserUncheckedCreateWithoutTransfersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransfersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTransfersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransfersInput, Prisma.UserUncheckedCreateWithoutTransfersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransfersInput;
    upsert?: Prisma.UserUpsertWithoutTransfersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTransfersInput, Prisma.UserUpdateWithoutTransfersInput>, Prisma.UserUncheckedUpdateWithoutTransfersInput>;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutTransactionAuthChallengesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransactionAuthChallengesInput, Prisma.UserUncheckedCreateWithoutTransactionAuthChallengesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransactionAuthChallengesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTransactionAuthChallengesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransactionAuthChallengesInput, Prisma.UserUncheckedCreateWithoutTransactionAuthChallengesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransactionAuthChallengesInput;
    upsert?: Prisma.UserUpsertWithoutTransactionAuthChallengesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTransactionAuthChallengesInput, Prisma.UserUpdateWithoutTransactionAuthChallengesInput>, Prisma.UserUncheckedUpdateWithoutTransactionAuthChallengesInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAccountsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
};
export type UserUpsertWithoutAccountsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSavingsGoalsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSavingsGoalsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSavingsGoalsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSavingsGoalsInput, Prisma.UserUncheckedCreateWithoutSavingsGoalsInput>;
};
export type UserUpsertWithoutSavingsGoalsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSavingsGoalsInput, Prisma.UserUncheckedUpdateWithoutSavingsGoalsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSavingsGoalsInput, Prisma.UserUncheckedCreateWithoutSavingsGoalsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSavingsGoalsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSavingsGoalsInput, Prisma.UserUncheckedUpdateWithoutSavingsGoalsInput>;
};
export type UserUpdateWithoutSavingsGoalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSavingsGoalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLoansInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLoansInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLoansInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoansInput, Prisma.UserUncheckedCreateWithoutLoansInput>;
};
export type UserUpsertWithoutLoansInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLoansInput, Prisma.UserUncheckedUpdateWithoutLoansInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoansInput, Prisma.UserUncheckedCreateWithoutLoansInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLoansInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLoansInput, Prisma.UserUncheckedUpdateWithoutLoansInput>;
};
export type UserUpdateWithoutLoansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLoansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSupportTicketsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSupportTicketsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSupportTicketsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
};
export type UserUpsertWithoutSupportTicketsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSupportTicketsInput, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSupportTicketsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSupportTicketsInput, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
};
export type UserUpdateWithoutSupportTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSupportTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSupportMessagesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSupportMessagesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSupportMessagesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportMessagesInput, Prisma.UserUncheckedCreateWithoutSupportMessagesInput>;
};
export type UserUpsertWithoutSupportMessagesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSupportMessagesInput, Prisma.UserUncheckedUpdateWithoutSupportMessagesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportMessagesInput, Prisma.UserUncheckedCreateWithoutSupportMessagesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSupportMessagesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSupportMessagesInput, Prisma.UserUncheckedUpdateWithoutSupportMessagesInput>;
};
export type UserUpdateWithoutSupportMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSupportMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCardsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCardsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCardsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCardsInput, Prisma.UserUncheckedCreateWithoutCardsInput>;
};
export type UserUpsertWithoutCardsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCardsInput, Prisma.UserUncheckedUpdateWithoutCardsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCardsInput, Prisma.UserUncheckedCreateWithoutCardsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCardsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCardsInput, Prisma.UserUncheckedUpdateWithoutCardsInput>;
};
export type UserUpdateWithoutCardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutTransactionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
};
export type UserUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTransactionsInput, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTransactionsInput, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
};
export type UserUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutTransfersInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutTransfersInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutTransfersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransfersInput, Prisma.UserUncheckedCreateWithoutTransfersInput>;
};
export type UserUpsertWithoutTransfersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTransfersInput, Prisma.UserUncheckedUpdateWithoutTransfersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransfersInput, Prisma.UserUncheckedCreateWithoutTransfersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTransfersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTransfersInput, Prisma.UserUncheckedUpdateWithoutTransfersInput>;
};
export type UserUpdateWithoutTransfersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTransfersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutTransactionAuthChallengesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutTransactionAuthChallengesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutTransactionAuthChallengesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransactionAuthChallengesInput, Prisma.UserUncheckedCreateWithoutTransactionAuthChallengesInput>;
};
export type UserUpsertWithoutTransactionAuthChallengesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTransactionAuthChallengesInput, Prisma.UserUncheckedUpdateWithoutTransactionAuthChallengesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransactionAuthChallengesInput, Prisma.UserUncheckedCreateWithoutTransactionAuthChallengesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTransactionAuthChallengesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTransactionAuthChallengesInput, Prisma.UserUncheckedUpdateWithoutTransactionAuthChallengesInput>;
};
export type UserUpdateWithoutTransactionAuthChallengesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTransactionAuthChallengesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    status?: $Enums.UserStatus;
    role?: $Enums.UserRole;
    emailVerifiedAt?: Date | string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerificationTokenHash?: string | null;
    emailVerificationExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    transfers?: Prisma.TransferUncheckedCreateNestedManyWithoutUserInput;
    cards?: Prisma.CardUncheckedCreateNestedManyWithoutUserInput;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    supportMessages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerificationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerificationExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactionAuthChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    transfers?: Prisma.TransferUncheckedUpdateManyWithoutUserNestedInput;
    cards?: Prisma.CardUncheckedUpdateManyWithoutUserNestedInput;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    supportMessages?: Prisma.SupportMessageUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    transactionAuthChallenges: number;
    accounts: number;
    savingsGoals: number;
    transactions: number;
    sessions: number;
    transfers: number;
    cards: number;
    loans: number;
    notifications: number;
    supportTickets: number;
    supportMessages: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactionAuthChallenges?: boolean | UserCountOutputTypeCountTransactionAuthChallengesArgs;
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    savingsGoals?: boolean | UserCountOutputTypeCountSavingsGoalsArgs;
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    transfers?: boolean | UserCountOutputTypeCountTransfersArgs;
    cards?: boolean | UserCountOutputTypeCountCardsArgs;
    loans?: boolean | UserCountOutputTypeCountLoansArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    supportTickets?: boolean | UserCountOutputTypeCountSupportTicketsArgs;
    supportMessages?: boolean | UserCountOutputTypeCountSupportMessagesArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTransactionAuthChallengesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionAuthChallengeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSavingsGoalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsGoalWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTransfersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransferWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CardWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLoansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoanWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSupportTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSupportMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportMessageWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    status?: boolean;
    role?: boolean;
    emailVerifiedAt?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    passwordChangedAt?: boolean;
    emailVerificationTokenHash?: boolean;
    emailVerificationExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    transactionAuthChallenges?: boolean | Prisma.User$transactionAuthChallengesArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    savingsGoals?: boolean | Prisma.User$savingsGoalsArgs<ExtArgs>;
    transactions?: boolean | Prisma.User$transactionsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    transfers?: boolean | Prisma.User$transfersArgs<ExtArgs>;
    cards?: boolean | Prisma.User$cardsArgs<ExtArgs>;
    loans?: boolean | Prisma.User$loansArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    supportTickets?: boolean | Prisma.User$supportTicketsArgs<ExtArgs>;
    supportMessages?: boolean | Prisma.User$supportMessagesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    status?: boolean;
    role?: boolean;
    emailVerifiedAt?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    passwordChangedAt?: boolean;
    emailVerificationTokenHash?: boolean;
    emailVerificationExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    status?: boolean;
    role?: boolean;
    emailVerifiedAt?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    passwordChangedAt?: boolean;
    emailVerificationTokenHash?: boolean;
    emailVerificationExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    status?: boolean;
    role?: boolean;
    emailVerifiedAt?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    passwordChangedAt?: boolean;
    emailVerificationTokenHash?: boolean;
    emailVerificationExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "phone" | "status" | "role" | "emailVerifiedAt" | "failedLoginAttempts" | "lockedUntil" | "passwordChangedAt" | "emailVerificationTokenHash" | "emailVerificationExpiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactionAuthChallenges?: boolean | Prisma.User$transactionAuthChallengesArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    savingsGoals?: boolean | Prisma.User$savingsGoalsArgs<ExtArgs>;
    transactions?: boolean | Prisma.User$transactionsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    transfers?: boolean | Prisma.User$transfersArgs<ExtArgs>;
    cards?: boolean | Prisma.User$cardsArgs<ExtArgs>;
    loans?: boolean | Prisma.User$loansArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    supportTickets?: boolean | Prisma.User$supportTicketsArgs<ExtArgs>;
    supportMessages?: boolean | Prisma.User$supportMessagesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        transactionAuthChallenges: Prisma.$TransactionAuthChallengePayload<ExtArgs>[];
        accounts: Prisma.$AccountPayload<ExtArgs>[];
        savingsGoals: Prisma.$SavingsGoalPayload<ExtArgs>[];
        transactions: Prisma.$TransactionPayload<ExtArgs>[];
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        transfers: Prisma.$TransferPayload<ExtArgs>[];
        cards: Prisma.$CardPayload<ExtArgs>[];
        loans: Prisma.$LoanPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        supportTickets: Prisma.$SupportTicketPayload<ExtArgs>[];
        supportMessages: Prisma.$SupportMessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        status: $Enums.UserStatus;
        role: $Enums.UserRole;
        emailVerifiedAt: Date | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        passwordChangedAt: Date | null;
        emailVerificationTokenHash: string | null;
        emailVerificationExpiresAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transactionAuthChallenges<T extends Prisma.User$transactionAuthChallengesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$transactionAuthChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    accounts<T extends Prisma.User$accountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    savingsGoals<T extends Prisma.User$savingsGoalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$savingsGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.User$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transfers<T extends Prisma.User$transfersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$transfersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cards<T extends Prisma.User$cardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    loans<T extends Prisma.User$loansArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$loansArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supportTickets<T extends Prisma.User$supportTicketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$supportTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supportMessages<T extends Prisma.User$supportMessagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$supportMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly status: Prisma.FieldRef<"User", 'UserStatus'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly emailVerifiedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly failedLoginAttempts: Prisma.FieldRef<"User", 'Int'>;
    readonly lockedUntil: Prisma.FieldRef<"User", 'DateTime'>;
    readonly passwordChangedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly emailVerificationTokenHash: Prisma.FieldRef<"User", 'String'>;
    readonly emailVerificationExpiresAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.transactionAuthChallenges
 */
export type User$transactionAuthChallengesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionAuthChallenge
     */
    select?: Prisma.TransactionAuthChallengeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAuthChallenge
     */
    omit?: Prisma.TransactionAuthChallengeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionAuthChallengeInclude<ExtArgs> | null;
    where?: Prisma.TransactionAuthChallengeWhereInput;
    orderBy?: Prisma.TransactionAuthChallengeOrderByWithRelationInput | Prisma.TransactionAuthChallengeOrderByWithRelationInput[];
    cursor?: Prisma.TransactionAuthChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionAuthChallengeScalarFieldEnum | Prisma.TransactionAuthChallengeScalarFieldEnum[];
};
/**
 * User.accounts
 */
export type User$accountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: Prisma.AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
/**
 * User.savingsGoals
 */
export type User$savingsGoalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    where?: Prisma.SavingsGoalWhereInput;
    orderBy?: Prisma.SavingsGoalOrderByWithRelationInput | Prisma.SavingsGoalOrderByWithRelationInput[];
    cursor?: Prisma.SavingsGoalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavingsGoalScalarFieldEnum | Prisma.SavingsGoalScalarFieldEnum[];
};
/**
 * User.transactions
 */
export type User$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * User.sessions
 */
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: Prisma.SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
/**
 * User.transfers
 */
export type User$transfersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: Prisma.TransferSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transfer
     */
    omit?: Prisma.TransferOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransferInclude<ExtArgs> | null;
    where?: Prisma.TransferWhereInput;
    orderBy?: Prisma.TransferOrderByWithRelationInput | Prisma.TransferOrderByWithRelationInput[];
    cursor?: Prisma.TransferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransferScalarFieldEnum | Prisma.TransferScalarFieldEnum[];
};
/**
 * User.cards
 */
export type User$cardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    where?: Prisma.CardWhereInput;
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    cursor?: Prisma.CardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CardScalarFieldEnum | Prisma.CardScalarFieldEnum[];
};
/**
 * User.loans
 */
export type User$loansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: Prisma.LoanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Loan
     */
    omit?: Prisma.LoanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoanInclude<ExtArgs> | null;
    where?: Prisma.LoanWhereInput;
    orderBy?: Prisma.LoanOrderByWithRelationInput | Prisma.LoanOrderByWithRelationInput[];
    cursor?: Prisma.LoanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoanScalarFieldEnum | Prisma.LoanScalarFieldEnum[];
};
/**
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.supportTickets
 */
export type User$supportTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
/**
 * User.supportMessages
 */
export type User$supportMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    where?: Prisma.SupportMessageWhereInput;
    orderBy?: Prisma.SupportMessageOrderByWithRelationInput | Prisma.SupportMessageOrderByWithRelationInput[];
    cursor?: Prisma.SupportMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportMessageScalarFieldEnum | Prisma.SupportMessageScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
