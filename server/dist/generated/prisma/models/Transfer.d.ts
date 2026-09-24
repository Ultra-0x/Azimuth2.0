import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Transfer
 *
 */
export type TransferModel = runtime.Types.Result.DefaultSelection<Prisma.$TransferPayload>;
export type AggregateTransfer = {
    _count: TransferCountAggregateOutputType | null;
    _avg: TransferAvgAggregateOutputType | null;
    _sum: TransferSumAggregateOutputType | null;
    _min: TransferMinAggregateOutputType | null;
    _max: TransferMaxAggregateOutputType | null;
};
export type TransferAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type TransferSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type TransferMinAggregateOutputType = {
    id: string | null;
    reference: string | null;
    idempotencyKey: string | null;
    userId: string | null;
    fromAccountId: string | null;
    toAccountId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    description: string | null;
    status: $Enums.TransactionStatus | null;
    transactionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TransferMaxAggregateOutputType = {
    id: string | null;
    reference: string | null;
    idempotencyKey: string | null;
    userId: string | null;
    fromAccountId: string | null;
    toAccountId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    description: string | null;
    status: $Enums.TransactionStatus | null;
    transactionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TransferCountAggregateOutputType = {
    id: number;
    reference: number;
    idempotencyKey: number;
    userId: number;
    fromAccountId: number;
    toAccountId: number;
    amount: number;
    currency: number;
    description: number;
    status: number;
    transactionId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TransferAvgAggregateInputType = {
    amount?: true;
};
export type TransferSumAggregateInputType = {
    amount?: true;
};
export type TransferMinAggregateInputType = {
    id?: true;
    reference?: true;
    idempotencyKey?: true;
    userId?: true;
    fromAccountId?: true;
    toAccountId?: true;
    amount?: true;
    currency?: true;
    description?: true;
    status?: true;
    transactionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TransferMaxAggregateInputType = {
    id?: true;
    reference?: true;
    idempotencyKey?: true;
    userId?: true;
    fromAccountId?: true;
    toAccountId?: true;
    amount?: true;
    currency?: true;
    description?: true;
    status?: true;
    transactionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TransferCountAggregateInputType = {
    id?: true;
    reference?: true;
    idempotencyKey?: true;
    userId?: true;
    fromAccountId?: true;
    toAccountId?: true;
    amount?: true;
    currency?: true;
    description?: true;
    status?: true;
    transactionId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TransferAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Transfer to aggregate.
     */
    where?: Prisma.TransferWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transfers to fetch.
     */
    orderBy?: Prisma.TransferOrderByWithRelationInput | Prisma.TransferOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TransferWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transfers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Transfers
    **/
    _count?: true | TransferCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TransferAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TransferSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TransferMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TransferMaxAggregateInputType;
};
export type GetTransferAggregateType<T extends TransferAggregateArgs> = {
    [P in keyof T & keyof AggregateTransfer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransfer[P]> : Prisma.GetScalarType<T[P], AggregateTransfer[P]>;
};
export type TransferGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransferWhereInput;
    orderBy?: Prisma.TransferOrderByWithAggregationInput | Prisma.TransferOrderByWithAggregationInput[];
    by: Prisma.TransferScalarFieldEnum[] | Prisma.TransferScalarFieldEnum;
    having?: Prisma.TransferScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransferCountAggregateInputType | true;
    _avg?: TransferAvgAggregateInputType;
    _sum?: TransferSumAggregateInputType;
    _min?: TransferMinAggregateInputType;
    _max?: TransferMaxAggregateInputType;
};
export type TransferGroupByOutputType = {
    id: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    fromAccountId: string;
    toAccountId: string;
    amount: runtime.Decimal;
    currency: string;
    description: string | null;
    status: $Enums.TransactionStatus;
    transactionId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TransferCountAggregateOutputType | null;
    _avg: TransferAvgAggregateOutputType | null;
    _sum: TransferSumAggregateOutputType | null;
    _min: TransferMinAggregateOutputType | null;
    _max: TransferMaxAggregateOutputType | null;
};
export type GetTransferGroupByPayload<T extends TransferGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransferGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransferGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransferGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransferGroupByOutputType[P]>;
}>>;
export type TransferWhereInput = {
    AND?: Prisma.TransferWhereInput | Prisma.TransferWhereInput[];
    OR?: Prisma.TransferWhereInput[];
    NOT?: Prisma.TransferWhereInput | Prisma.TransferWhereInput[];
    id?: Prisma.StringFilter<"Transfer"> | string;
    reference?: Prisma.StringFilter<"Transfer"> | string;
    idempotencyKey?: Prisma.StringFilter<"Transfer"> | string;
    userId?: Prisma.StringFilter<"Transfer"> | string;
    fromAccountId?: Prisma.StringFilter<"Transfer"> | string;
    toAccountId?: Prisma.StringFilter<"Transfer"> | string;
    amount?: Prisma.DecimalFilter<"Transfer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Transfer"> | string;
    description?: Prisma.StringNullableFilter<"Transfer"> | string | null;
    status?: Prisma.EnumTransactionStatusFilter<"Transfer"> | $Enums.TransactionStatus;
    transactionId?: Prisma.StringNullableFilter<"Transfer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transfer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transfer"> | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    fromAccount?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
    toAccount?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
    transaction?: Prisma.XOR<Prisma.TransactionNullableScalarRelationFilter, Prisma.TransactionWhereInput> | null;
};
export type TransferOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authChallenges?: Prisma.TransactionAuthChallengeOrderByRelationAggregateInput;
    user?: Prisma.UserOrderByWithRelationInput;
    fromAccount?: Prisma.AccountOrderByWithRelationInput;
    toAccount?: Prisma.AccountOrderByWithRelationInput;
    transaction?: Prisma.TransactionOrderByWithRelationInput;
};
export type TransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    reference?: string;
    idempotencyKey?: string;
    transactionId?: string;
    AND?: Prisma.TransferWhereInput | Prisma.TransferWhereInput[];
    OR?: Prisma.TransferWhereInput[];
    NOT?: Prisma.TransferWhereInput | Prisma.TransferWhereInput[];
    userId?: Prisma.StringFilter<"Transfer"> | string;
    fromAccountId?: Prisma.StringFilter<"Transfer"> | string;
    toAccountId?: Prisma.StringFilter<"Transfer"> | string;
    amount?: Prisma.DecimalFilter<"Transfer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Transfer"> | string;
    description?: Prisma.StringNullableFilter<"Transfer"> | string | null;
    status?: Prisma.EnumTransactionStatusFilter<"Transfer"> | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFilter<"Transfer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transfer"> | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    fromAccount?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
    toAccount?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
    transaction?: Prisma.XOR<Prisma.TransactionNullableScalarRelationFilter, Prisma.TransactionWhereInput> | null;
}, "id" | "reference" | "idempotencyKey" | "transactionId">;
export type TransferOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TransferCountOrderByAggregateInput;
    _avg?: Prisma.TransferAvgOrderByAggregateInput;
    _max?: Prisma.TransferMaxOrderByAggregateInput;
    _min?: Prisma.TransferMinOrderByAggregateInput;
    _sum?: Prisma.TransferSumOrderByAggregateInput;
};
export type TransferScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransferScalarWhereWithAggregatesInput | Prisma.TransferScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransferScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransferScalarWhereWithAggregatesInput | Prisma.TransferScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Transfer"> | string;
    reference?: Prisma.StringWithAggregatesFilter<"Transfer"> | string;
    idempotencyKey?: Prisma.StringWithAggregatesFilter<"Transfer"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Transfer"> | string;
    fromAccountId?: Prisma.StringWithAggregatesFilter<"Transfer"> | string;
    toAccountId?: Prisma.StringWithAggregatesFilter<"Transfer"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Transfer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Transfer"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Transfer"> | string | null;
    status?: Prisma.EnumTransactionStatusWithAggregatesFilter<"Transfer"> | $Enums.TransactionStatus;
    transactionId?: Prisma.StringNullableWithAggregatesFilter<"Transfer"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Transfer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Transfer"> | Date | string;
};
export type TransferCreateInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutTransferInput;
    user: Prisma.UserCreateNestedOneWithoutTransfersInput;
    fromAccount: Prisma.AccountCreateNestedOneWithoutOutgoingTransfersInput;
    toAccount: Prisma.AccountCreateNestedOneWithoutIncomingTransfersInput;
    transaction?: Prisma.TransactionCreateNestedOneWithoutTransferInput;
};
export type TransferUncheckedCreateInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    fromAccountId: string;
    toAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutTransferInput;
};
export type TransferUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutTransferNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTransfersNestedInput;
    fromAccount?: Prisma.AccountUpdateOneRequiredWithoutOutgoingTransfersNestedInput;
    toAccount?: Prisma.AccountUpdateOneRequiredWithoutIncomingTransfersNestedInput;
    transaction?: Prisma.TransactionUpdateOneWithoutTransferNestedInput;
};
export type TransferUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    toAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutTransferNestedInput;
};
export type TransferCreateManyInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    fromAccountId: string;
    toAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransferUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransferUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    toAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransferListRelationFilter = {
    every?: Prisma.TransferWhereInput;
    some?: Prisma.TransferWhereInput;
    none?: Prisma.TransferWhereInput;
};
export type TransferOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransferNullableScalarRelationFilter = {
    is?: Prisma.TransferWhereInput | null;
    isNot?: Prisma.TransferWhereInput | null;
};
export type TransferCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransferAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type TransferMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransferMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransferSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type TransferCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutUserInput, Prisma.TransferUncheckedCreateWithoutUserInput> | Prisma.TransferCreateWithoutUserInput[] | Prisma.TransferUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutUserInput | Prisma.TransferCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TransferCreateManyUserInputEnvelope;
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
};
export type TransferUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutUserInput, Prisma.TransferUncheckedCreateWithoutUserInput> | Prisma.TransferCreateWithoutUserInput[] | Prisma.TransferUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutUserInput | Prisma.TransferCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TransferCreateManyUserInputEnvelope;
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
};
export type TransferUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutUserInput, Prisma.TransferUncheckedCreateWithoutUserInput> | Prisma.TransferCreateWithoutUserInput[] | Prisma.TransferUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutUserInput | Prisma.TransferCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TransferUpsertWithWhereUniqueWithoutUserInput | Prisma.TransferUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TransferCreateManyUserInputEnvelope;
    set?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    disconnect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    delete?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    update?: Prisma.TransferUpdateWithWhereUniqueWithoutUserInput | Prisma.TransferUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TransferUpdateManyWithWhereWithoutUserInput | Prisma.TransferUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TransferScalarWhereInput | Prisma.TransferScalarWhereInput[];
};
export type TransferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutUserInput, Prisma.TransferUncheckedCreateWithoutUserInput> | Prisma.TransferCreateWithoutUserInput[] | Prisma.TransferUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutUserInput | Prisma.TransferCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TransferUpsertWithWhereUniqueWithoutUserInput | Prisma.TransferUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TransferCreateManyUserInputEnvelope;
    set?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    disconnect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    delete?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    update?: Prisma.TransferUpdateWithWhereUniqueWithoutUserInput | Prisma.TransferUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TransferUpdateManyWithWhereWithoutUserInput | Prisma.TransferUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TransferScalarWhereInput | Prisma.TransferScalarWhereInput[];
};
export type TransferCreateNestedManyWithoutFromAccountInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutFromAccountInput, Prisma.TransferUncheckedCreateWithoutFromAccountInput> | Prisma.TransferCreateWithoutFromAccountInput[] | Prisma.TransferUncheckedCreateWithoutFromAccountInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutFromAccountInput | Prisma.TransferCreateOrConnectWithoutFromAccountInput[];
    createMany?: Prisma.TransferCreateManyFromAccountInputEnvelope;
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
};
export type TransferCreateNestedManyWithoutToAccountInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutToAccountInput, Prisma.TransferUncheckedCreateWithoutToAccountInput> | Prisma.TransferCreateWithoutToAccountInput[] | Prisma.TransferUncheckedCreateWithoutToAccountInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutToAccountInput | Prisma.TransferCreateOrConnectWithoutToAccountInput[];
    createMany?: Prisma.TransferCreateManyToAccountInputEnvelope;
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
};
export type TransferUncheckedCreateNestedManyWithoutFromAccountInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutFromAccountInput, Prisma.TransferUncheckedCreateWithoutFromAccountInput> | Prisma.TransferCreateWithoutFromAccountInput[] | Prisma.TransferUncheckedCreateWithoutFromAccountInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutFromAccountInput | Prisma.TransferCreateOrConnectWithoutFromAccountInput[];
    createMany?: Prisma.TransferCreateManyFromAccountInputEnvelope;
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
};
export type TransferUncheckedCreateNestedManyWithoutToAccountInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutToAccountInput, Prisma.TransferUncheckedCreateWithoutToAccountInput> | Prisma.TransferCreateWithoutToAccountInput[] | Prisma.TransferUncheckedCreateWithoutToAccountInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutToAccountInput | Prisma.TransferCreateOrConnectWithoutToAccountInput[];
    createMany?: Prisma.TransferCreateManyToAccountInputEnvelope;
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
};
export type TransferUpdateManyWithoutFromAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutFromAccountInput, Prisma.TransferUncheckedCreateWithoutFromAccountInput> | Prisma.TransferCreateWithoutFromAccountInput[] | Prisma.TransferUncheckedCreateWithoutFromAccountInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutFromAccountInput | Prisma.TransferCreateOrConnectWithoutFromAccountInput[];
    upsert?: Prisma.TransferUpsertWithWhereUniqueWithoutFromAccountInput | Prisma.TransferUpsertWithWhereUniqueWithoutFromAccountInput[];
    createMany?: Prisma.TransferCreateManyFromAccountInputEnvelope;
    set?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    disconnect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    delete?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    update?: Prisma.TransferUpdateWithWhereUniqueWithoutFromAccountInput | Prisma.TransferUpdateWithWhereUniqueWithoutFromAccountInput[];
    updateMany?: Prisma.TransferUpdateManyWithWhereWithoutFromAccountInput | Prisma.TransferUpdateManyWithWhereWithoutFromAccountInput[];
    deleteMany?: Prisma.TransferScalarWhereInput | Prisma.TransferScalarWhereInput[];
};
export type TransferUpdateManyWithoutToAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutToAccountInput, Prisma.TransferUncheckedCreateWithoutToAccountInput> | Prisma.TransferCreateWithoutToAccountInput[] | Prisma.TransferUncheckedCreateWithoutToAccountInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutToAccountInput | Prisma.TransferCreateOrConnectWithoutToAccountInput[];
    upsert?: Prisma.TransferUpsertWithWhereUniqueWithoutToAccountInput | Prisma.TransferUpsertWithWhereUniqueWithoutToAccountInput[];
    createMany?: Prisma.TransferCreateManyToAccountInputEnvelope;
    set?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    disconnect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    delete?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    update?: Prisma.TransferUpdateWithWhereUniqueWithoutToAccountInput | Prisma.TransferUpdateWithWhereUniqueWithoutToAccountInput[];
    updateMany?: Prisma.TransferUpdateManyWithWhereWithoutToAccountInput | Prisma.TransferUpdateManyWithWhereWithoutToAccountInput[];
    deleteMany?: Prisma.TransferScalarWhereInput | Prisma.TransferScalarWhereInput[];
};
export type TransferUncheckedUpdateManyWithoutFromAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutFromAccountInput, Prisma.TransferUncheckedCreateWithoutFromAccountInput> | Prisma.TransferCreateWithoutFromAccountInput[] | Prisma.TransferUncheckedCreateWithoutFromAccountInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutFromAccountInput | Prisma.TransferCreateOrConnectWithoutFromAccountInput[];
    upsert?: Prisma.TransferUpsertWithWhereUniqueWithoutFromAccountInput | Prisma.TransferUpsertWithWhereUniqueWithoutFromAccountInput[];
    createMany?: Prisma.TransferCreateManyFromAccountInputEnvelope;
    set?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    disconnect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    delete?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    update?: Prisma.TransferUpdateWithWhereUniqueWithoutFromAccountInput | Prisma.TransferUpdateWithWhereUniqueWithoutFromAccountInput[];
    updateMany?: Prisma.TransferUpdateManyWithWhereWithoutFromAccountInput | Prisma.TransferUpdateManyWithWhereWithoutFromAccountInput[];
    deleteMany?: Prisma.TransferScalarWhereInput | Prisma.TransferScalarWhereInput[];
};
export type TransferUncheckedUpdateManyWithoutToAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutToAccountInput, Prisma.TransferUncheckedCreateWithoutToAccountInput> | Prisma.TransferCreateWithoutToAccountInput[] | Prisma.TransferUncheckedCreateWithoutToAccountInput[];
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutToAccountInput | Prisma.TransferCreateOrConnectWithoutToAccountInput[];
    upsert?: Prisma.TransferUpsertWithWhereUniqueWithoutToAccountInput | Prisma.TransferUpsertWithWhereUniqueWithoutToAccountInput[];
    createMany?: Prisma.TransferCreateManyToAccountInputEnvelope;
    set?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    disconnect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    delete?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    connect?: Prisma.TransferWhereUniqueInput | Prisma.TransferWhereUniqueInput[];
    update?: Prisma.TransferUpdateWithWhereUniqueWithoutToAccountInput | Prisma.TransferUpdateWithWhereUniqueWithoutToAccountInput[];
    updateMany?: Prisma.TransferUpdateManyWithWhereWithoutToAccountInput | Prisma.TransferUpdateManyWithWhereWithoutToAccountInput[];
    deleteMany?: Prisma.TransferScalarWhereInput | Prisma.TransferScalarWhereInput[];
};
export type TransferCreateNestedOneWithoutTransactionInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutTransactionInput, Prisma.TransferUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutTransactionInput;
    connect?: Prisma.TransferWhereUniqueInput;
};
export type TransferUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutTransactionInput, Prisma.TransferUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutTransactionInput;
    connect?: Prisma.TransferWhereUniqueInput;
};
export type TransferUpdateOneWithoutTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutTransactionInput, Prisma.TransferUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutTransactionInput;
    upsert?: Prisma.TransferUpsertWithoutTransactionInput;
    disconnect?: Prisma.TransferWhereInput | boolean;
    delete?: Prisma.TransferWhereInput | boolean;
    connect?: Prisma.TransferWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransferUpdateToOneWithWhereWithoutTransactionInput, Prisma.TransferUpdateWithoutTransactionInput>, Prisma.TransferUncheckedUpdateWithoutTransactionInput>;
};
export type TransferUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutTransactionInput, Prisma.TransferUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutTransactionInput;
    upsert?: Prisma.TransferUpsertWithoutTransactionInput;
    disconnect?: Prisma.TransferWhereInput | boolean;
    delete?: Prisma.TransferWhereInput | boolean;
    connect?: Prisma.TransferWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransferUpdateToOneWithWhereWithoutTransactionInput, Prisma.TransferUpdateWithoutTransactionInput>, Prisma.TransferUncheckedUpdateWithoutTransactionInput>;
};
export type TransferCreateNestedOneWithoutAuthChallengesInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutAuthChallengesInput, Prisma.TransferUncheckedCreateWithoutAuthChallengesInput>;
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutAuthChallengesInput;
    connect?: Prisma.TransferWhereUniqueInput;
};
export type TransferUpdateOneWithoutAuthChallengesNestedInput = {
    create?: Prisma.XOR<Prisma.TransferCreateWithoutAuthChallengesInput, Prisma.TransferUncheckedCreateWithoutAuthChallengesInput>;
    connectOrCreate?: Prisma.TransferCreateOrConnectWithoutAuthChallengesInput;
    upsert?: Prisma.TransferUpsertWithoutAuthChallengesInput;
    disconnect?: Prisma.TransferWhereInput | boolean;
    delete?: Prisma.TransferWhereInput | boolean;
    connect?: Prisma.TransferWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransferUpdateToOneWithWhereWithoutAuthChallengesInput, Prisma.TransferUpdateWithoutAuthChallengesInput>, Prisma.TransferUncheckedUpdateWithoutAuthChallengesInput>;
};
export type TransferCreateWithoutUserInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutTransferInput;
    fromAccount: Prisma.AccountCreateNestedOneWithoutOutgoingTransfersInput;
    toAccount: Prisma.AccountCreateNestedOneWithoutIncomingTransfersInput;
    transaction?: Prisma.TransactionCreateNestedOneWithoutTransferInput;
};
export type TransferUncheckedCreateWithoutUserInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    fromAccountId: string;
    toAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutTransferInput;
};
export type TransferCreateOrConnectWithoutUserInput = {
    where: Prisma.TransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransferCreateWithoutUserInput, Prisma.TransferUncheckedCreateWithoutUserInput>;
};
export type TransferCreateManyUserInputEnvelope = {
    data: Prisma.TransferCreateManyUserInput | Prisma.TransferCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TransferUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TransferWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransferUpdateWithoutUserInput, Prisma.TransferUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TransferCreateWithoutUserInput, Prisma.TransferUncheckedCreateWithoutUserInput>;
};
export type TransferUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TransferWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransferUpdateWithoutUserInput, Prisma.TransferUncheckedUpdateWithoutUserInput>;
};
export type TransferUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TransferScalarWhereInput;
    data: Prisma.XOR<Prisma.TransferUpdateManyMutationInput, Prisma.TransferUncheckedUpdateManyWithoutUserInput>;
};
export type TransferScalarWhereInput = {
    AND?: Prisma.TransferScalarWhereInput | Prisma.TransferScalarWhereInput[];
    OR?: Prisma.TransferScalarWhereInput[];
    NOT?: Prisma.TransferScalarWhereInput | Prisma.TransferScalarWhereInput[];
    id?: Prisma.StringFilter<"Transfer"> | string;
    reference?: Prisma.StringFilter<"Transfer"> | string;
    idempotencyKey?: Prisma.StringFilter<"Transfer"> | string;
    userId?: Prisma.StringFilter<"Transfer"> | string;
    fromAccountId?: Prisma.StringFilter<"Transfer"> | string;
    toAccountId?: Prisma.StringFilter<"Transfer"> | string;
    amount?: Prisma.DecimalFilter<"Transfer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Transfer"> | string;
    description?: Prisma.StringNullableFilter<"Transfer"> | string | null;
    status?: Prisma.EnumTransactionStatusFilter<"Transfer"> | $Enums.TransactionStatus;
    transactionId?: Prisma.StringNullableFilter<"Transfer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transfer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transfer"> | Date | string;
};
export type TransferCreateWithoutFromAccountInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutTransferInput;
    user: Prisma.UserCreateNestedOneWithoutTransfersInput;
    toAccount: Prisma.AccountCreateNestedOneWithoutIncomingTransfersInput;
    transaction?: Prisma.TransactionCreateNestedOneWithoutTransferInput;
};
export type TransferUncheckedCreateWithoutFromAccountInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    toAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutTransferInput;
};
export type TransferCreateOrConnectWithoutFromAccountInput = {
    where: Prisma.TransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransferCreateWithoutFromAccountInput, Prisma.TransferUncheckedCreateWithoutFromAccountInput>;
};
export type TransferCreateManyFromAccountInputEnvelope = {
    data: Prisma.TransferCreateManyFromAccountInput | Prisma.TransferCreateManyFromAccountInput[];
    skipDuplicates?: boolean;
};
export type TransferCreateWithoutToAccountInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutTransferInput;
    user: Prisma.UserCreateNestedOneWithoutTransfersInput;
    fromAccount: Prisma.AccountCreateNestedOneWithoutOutgoingTransfersInput;
    transaction?: Prisma.TransactionCreateNestedOneWithoutTransferInput;
};
export type TransferUncheckedCreateWithoutToAccountInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    fromAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutTransferInput;
};
export type TransferCreateOrConnectWithoutToAccountInput = {
    where: Prisma.TransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransferCreateWithoutToAccountInput, Prisma.TransferUncheckedCreateWithoutToAccountInput>;
};
export type TransferCreateManyToAccountInputEnvelope = {
    data: Prisma.TransferCreateManyToAccountInput | Prisma.TransferCreateManyToAccountInput[];
    skipDuplicates?: boolean;
};
export type TransferUpsertWithWhereUniqueWithoutFromAccountInput = {
    where: Prisma.TransferWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransferUpdateWithoutFromAccountInput, Prisma.TransferUncheckedUpdateWithoutFromAccountInput>;
    create: Prisma.XOR<Prisma.TransferCreateWithoutFromAccountInput, Prisma.TransferUncheckedCreateWithoutFromAccountInput>;
};
export type TransferUpdateWithWhereUniqueWithoutFromAccountInput = {
    where: Prisma.TransferWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransferUpdateWithoutFromAccountInput, Prisma.TransferUncheckedUpdateWithoutFromAccountInput>;
};
export type TransferUpdateManyWithWhereWithoutFromAccountInput = {
    where: Prisma.TransferScalarWhereInput;
    data: Prisma.XOR<Prisma.TransferUpdateManyMutationInput, Prisma.TransferUncheckedUpdateManyWithoutFromAccountInput>;
};
export type TransferUpsertWithWhereUniqueWithoutToAccountInput = {
    where: Prisma.TransferWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransferUpdateWithoutToAccountInput, Prisma.TransferUncheckedUpdateWithoutToAccountInput>;
    create: Prisma.XOR<Prisma.TransferCreateWithoutToAccountInput, Prisma.TransferUncheckedCreateWithoutToAccountInput>;
};
export type TransferUpdateWithWhereUniqueWithoutToAccountInput = {
    where: Prisma.TransferWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransferUpdateWithoutToAccountInput, Prisma.TransferUncheckedUpdateWithoutToAccountInput>;
};
export type TransferUpdateManyWithWhereWithoutToAccountInput = {
    where: Prisma.TransferScalarWhereInput;
    data: Prisma.XOR<Prisma.TransferUpdateManyMutationInput, Prisma.TransferUncheckedUpdateManyWithoutToAccountInput>;
};
export type TransferCreateWithoutTransactionInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeCreateNestedManyWithoutTransferInput;
    user: Prisma.UserCreateNestedOneWithoutTransfersInput;
    fromAccount: Prisma.AccountCreateNestedOneWithoutOutgoingTransfersInput;
    toAccount: Prisma.AccountCreateNestedOneWithoutIncomingTransfersInput;
};
export type TransferUncheckedCreateWithoutTransactionInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    fromAccountId: string;
    toAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedCreateNestedManyWithoutTransferInput;
};
export type TransferCreateOrConnectWithoutTransactionInput = {
    where: Prisma.TransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransferCreateWithoutTransactionInput, Prisma.TransferUncheckedCreateWithoutTransactionInput>;
};
export type TransferUpsertWithoutTransactionInput = {
    update: Prisma.XOR<Prisma.TransferUpdateWithoutTransactionInput, Prisma.TransferUncheckedUpdateWithoutTransactionInput>;
    create: Prisma.XOR<Prisma.TransferCreateWithoutTransactionInput, Prisma.TransferUncheckedCreateWithoutTransactionInput>;
    where?: Prisma.TransferWhereInput;
};
export type TransferUpdateToOneWithWhereWithoutTransactionInput = {
    where?: Prisma.TransferWhereInput;
    data: Prisma.XOR<Prisma.TransferUpdateWithoutTransactionInput, Prisma.TransferUncheckedUpdateWithoutTransactionInput>;
};
export type TransferUpdateWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutTransferNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTransfersNestedInput;
    fromAccount?: Prisma.AccountUpdateOneRequiredWithoutOutgoingTransfersNestedInput;
    toAccount?: Prisma.AccountUpdateOneRequiredWithoutIncomingTransfersNestedInput;
};
export type TransferUncheckedUpdateWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    toAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutTransferNestedInput;
};
export type TransferCreateWithoutAuthChallengesInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTransfersInput;
    fromAccount: Prisma.AccountCreateNestedOneWithoutOutgoingTransfersInput;
    toAccount: Prisma.AccountCreateNestedOneWithoutIncomingTransfersInput;
    transaction?: Prisma.TransactionCreateNestedOneWithoutTransferInput;
};
export type TransferUncheckedCreateWithoutAuthChallengesInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    fromAccountId: string;
    toAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransferCreateOrConnectWithoutAuthChallengesInput = {
    where: Prisma.TransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransferCreateWithoutAuthChallengesInput, Prisma.TransferUncheckedCreateWithoutAuthChallengesInput>;
};
export type TransferUpsertWithoutAuthChallengesInput = {
    update: Prisma.XOR<Prisma.TransferUpdateWithoutAuthChallengesInput, Prisma.TransferUncheckedUpdateWithoutAuthChallengesInput>;
    create: Prisma.XOR<Prisma.TransferCreateWithoutAuthChallengesInput, Prisma.TransferUncheckedCreateWithoutAuthChallengesInput>;
    where?: Prisma.TransferWhereInput;
};
export type TransferUpdateToOneWithWhereWithoutAuthChallengesInput = {
    where?: Prisma.TransferWhereInput;
    data: Prisma.XOR<Prisma.TransferUpdateWithoutAuthChallengesInput, Prisma.TransferUncheckedUpdateWithoutAuthChallengesInput>;
};
export type TransferUpdateWithoutAuthChallengesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTransfersNestedInput;
    fromAccount?: Prisma.AccountUpdateOneRequiredWithoutOutgoingTransfersNestedInput;
    toAccount?: Prisma.AccountUpdateOneRequiredWithoutIncomingTransfersNestedInput;
    transaction?: Prisma.TransactionUpdateOneWithoutTransferNestedInput;
};
export type TransferUncheckedUpdateWithoutAuthChallengesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    toAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransferCreateManyUserInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    fromAccountId: string;
    toAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransferUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutTransferNestedInput;
    fromAccount?: Prisma.AccountUpdateOneRequiredWithoutOutgoingTransfersNestedInput;
    toAccount?: Prisma.AccountUpdateOneRequiredWithoutIncomingTransfersNestedInput;
    transaction?: Prisma.TransactionUpdateOneWithoutTransferNestedInput;
};
export type TransferUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fromAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    toAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutTransferNestedInput;
};
export type TransferUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fromAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    toAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransferCreateManyFromAccountInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    toAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransferCreateManyToAccountInput = {
    id?: string;
    reference: string;
    idempotencyKey: string;
    userId: string;
    fromAccountId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    description?: string | null;
    status?: $Enums.TransactionStatus;
    transactionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransferUpdateWithoutFromAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutTransferNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTransfersNestedInput;
    toAccount?: Prisma.AccountUpdateOneRequiredWithoutIncomingTransfersNestedInput;
    transaction?: Prisma.TransactionUpdateOneWithoutTransferNestedInput;
};
export type TransferUncheckedUpdateWithoutFromAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    toAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutTransferNestedInput;
};
export type TransferUncheckedUpdateManyWithoutFromAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    toAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransferUpdateWithoutToAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUpdateManyWithoutTransferNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTransfersNestedInput;
    fromAccount?: Prisma.AccountUpdateOneRequiredWithoutOutgoingTransfersNestedInput;
    transaction?: Prisma.TransactionUpdateOneWithoutTransferNestedInput;
};
export type TransferUncheckedUpdateWithoutToAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authChallenges?: Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutTransferNestedInput;
};
export type TransferUncheckedUpdateManyWithoutToAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type TransferCountOutputType
 */
export type TransferCountOutputType = {
    authChallenges: number;
};
export type TransferCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    authChallenges?: boolean | TransferCountOutputTypeCountAuthChallengesArgs;
};
/**
 * TransferCountOutputType without action
 */
export type TransferCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferCountOutputType
     */
    select?: Prisma.TransferCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TransferCountOutputType without action
 */
export type TransferCountOutputTypeCountAuthChallengesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionAuthChallengeWhereInput;
};
export type TransferSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reference?: boolean;
    idempotencyKey?: boolean;
    userId?: boolean;
    fromAccountId?: boolean;
    toAccountId?: boolean;
    amount?: boolean;
    currency?: boolean;
    description?: boolean;
    status?: boolean;
    transactionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authChallenges?: boolean | Prisma.Transfer$authChallengesArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    toAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.Transfer$transactionArgs<ExtArgs>;
    _count?: boolean | Prisma.TransferCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transfer"]>;
export type TransferSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reference?: boolean;
    idempotencyKey?: boolean;
    userId?: boolean;
    fromAccountId?: boolean;
    toAccountId?: boolean;
    amount?: boolean;
    currency?: boolean;
    description?: boolean;
    status?: boolean;
    transactionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    toAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.Transfer$transactionArgs<ExtArgs>;
}, ExtArgs["result"]["transfer"]>;
export type TransferSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reference?: boolean;
    idempotencyKey?: boolean;
    userId?: boolean;
    fromAccountId?: boolean;
    toAccountId?: boolean;
    amount?: boolean;
    currency?: boolean;
    description?: boolean;
    status?: boolean;
    transactionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    toAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.Transfer$transactionArgs<ExtArgs>;
}, ExtArgs["result"]["transfer"]>;
export type TransferSelectScalar = {
    id?: boolean;
    reference?: boolean;
    idempotencyKey?: boolean;
    userId?: boolean;
    fromAccountId?: boolean;
    toAccountId?: boolean;
    amount?: boolean;
    currency?: boolean;
    description?: boolean;
    status?: boolean;
    transactionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TransferOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reference" | "idempotencyKey" | "userId" | "fromAccountId" | "toAccountId" | "amount" | "currency" | "description" | "status" | "transactionId" | "createdAt" | "updatedAt", ExtArgs["result"]["transfer"]>;
export type TransferInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    authChallenges?: boolean | Prisma.Transfer$authChallengesArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    toAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.Transfer$transactionArgs<ExtArgs>;
    _count?: boolean | Prisma.TransferCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TransferIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    toAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.Transfer$transactionArgs<ExtArgs>;
};
export type TransferIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    toAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.Transfer$transactionArgs<ExtArgs>;
};
export type $TransferPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transfer";
    objects: {
        authChallenges: Prisma.$TransactionAuthChallengePayload<ExtArgs>[];
        user: Prisma.$UserPayload<ExtArgs>;
        fromAccount: Prisma.$AccountPayload<ExtArgs>;
        toAccount: Prisma.$AccountPayload<ExtArgs>;
        transaction: Prisma.$TransactionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reference: string;
        idempotencyKey: string;
        userId: string;
        fromAccountId: string;
        toAccountId: string;
        amount: runtime.Decimal;
        currency: string;
        description: string | null;
        status: $Enums.TransactionStatus;
        transactionId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["transfer"]>;
    composites: {};
};
export type TransferGetPayload<S extends boolean | null | undefined | TransferDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransferPayload, S>;
export type TransferCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransferCountAggregateInputType | true;
};
export interface TransferDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transfer'];
        meta: {
            name: 'Transfer';
        };
    };
    /**
     * Find zero or one Transfer that matches the filter.
     * @param {TransferFindUniqueArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransferFindUniqueArgs>(args: Prisma.SelectSubset<T, TransferFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Transfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransferFindUniqueOrThrowArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransferFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindFirstArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransferFindFirstArgs>(args?: Prisma.SelectSubset<T, TransferFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindFirstOrThrowArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransferFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransferFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Transfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transfers
     * const transfers = await prisma.transfer.findMany()
     *
     * // Get first 10 Transfers
     * const transfers = await prisma.transfer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transferWithIdOnly = await prisma.transfer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransferFindManyArgs>(args?: Prisma.SelectSubset<T, TransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Transfer.
     * @param {TransferCreateArgs} args - Arguments to create a Transfer.
     * @example
     * // Create one Transfer
     * const Transfer = await prisma.transfer.create({
     *   data: {
     *     // ... data to create a Transfer
     *   }
     * })
     *
     */
    create<T extends TransferCreateArgs>(args: Prisma.SelectSubset<T, TransferCreateArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Transfers.
     * @param {TransferCreateManyArgs} args - Arguments to create many Transfers.
     * @example
     * // Create many Transfers
     * const transfer = await prisma.transfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransferCreateManyArgs>(args?: Prisma.SelectSubset<T, TransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Transfers and returns the data saved in the database.
     * @param {TransferCreateManyAndReturnArgs} args - Arguments to create many Transfers.
     * @example
     * // Create many Transfers
     * const transfer = await prisma.transfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transfers and only return the `id`
     * const transferWithIdOnly = await prisma.transfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransferCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Transfer.
     * @param {TransferDeleteArgs} args - Arguments to delete one Transfer.
     * @example
     * // Delete one Transfer
     * const Transfer = await prisma.transfer.delete({
     *   where: {
     *     // ... filter to delete one Transfer
     *   }
     * })
     *
     */
    delete<T extends TransferDeleteArgs>(args: Prisma.SelectSubset<T, TransferDeleteArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Transfer.
     * @param {TransferUpdateArgs} args - Arguments to update one Transfer.
     * @example
     * // Update one Transfer
     * const transfer = await prisma.transfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransferUpdateArgs>(args: Prisma.SelectSubset<T, TransferUpdateArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Transfers.
     * @param {TransferDeleteManyArgs} args - Arguments to filter Transfers to delete.
     * @example
     * // Delete a few Transfers
     * const { count } = await prisma.transfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransferDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transfers
     * const transfer = await prisma.transfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransferUpdateManyArgs>(args: Prisma.SelectSubset<T, TransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transfers and returns the data updated in the database.
     * @param {TransferUpdateManyAndReturnArgs} args - Arguments to update many Transfers.
     * @example
     * // Update many Transfers
     * const transfer = await prisma.transfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transfers and only return the `id`
     * const transferWithIdOnly = await prisma.transfer.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransferUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Transfer.
     * @param {TransferUpsertArgs} args - Arguments to update or create a Transfer.
     * @example
     * // Update or create a Transfer
     * const transfer = await prisma.transfer.upsert({
     *   create: {
     *     // ... data to create a Transfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transfer we want to update
     *   }
     * })
     */
    upsert<T extends TransferUpsertArgs>(args: Prisma.SelectSubset<T, TransferUpsertArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferCountArgs} args - Arguments to filter Transfers to count.
     * @example
     * // Count the number of Transfers
     * const count = await prisma.transfer.count({
     *   where: {
     *     // ... the filter for the Transfers we want to count
     *   }
     * })
    **/
    count<T extends TransferCountArgs>(args?: Prisma.Subset<T, TransferCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransferCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Transfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransferAggregateArgs>(args: Prisma.Subset<T, TransferAggregateArgs>): Prisma.PrismaPromise<GetTransferAggregateType<T>>;
    /**
     * Group by Transfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TransferGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransferGroupByArgs['orderBy'];
    } : {
        orderBy?: TransferGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Transfer model
     */
    readonly fields: TransferFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Transfer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TransferClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    authChallenges<T extends Prisma.Transfer$authChallengesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transfer$authChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    fromAccount<T extends Prisma.AccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountDefaultArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    toAccount<T extends Prisma.AccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountDefaultArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaction<T extends Prisma.Transfer$transactionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transfer$transactionArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Transfer model
 */
export interface TransferFieldRefs {
    readonly id: Prisma.FieldRef<"Transfer", 'String'>;
    readonly reference: Prisma.FieldRef<"Transfer", 'String'>;
    readonly idempotencyKey: Prisma.FieldRef<"Transfer", 'String'>;
    readonly userId: Prisma.FieldRef<"Transfer", 'String'>;
    readonly fromAccountId: Prisma.FieldRef<"Transfer", 'String'>;
    readonly toAccountId: Prisma.FieldRef<"Transfer", 'String'>;
    readonly amount: Prisma.FieldRef<"Transfer", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Transfer", 'String'>;
    readonly description: Prisma.FieldRef<"Transfer", 'String'>;
    readonly status: Prisma.FieldRef<"Transfer", 'TransactionStatus'>;
    readonly transactionId: Prisma.FieldRef<"Transfer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Transfer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Transfer", 'DateTime'>;
}
/**
 * Transfer findUnique
 */
export type TransferFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Transfer to fetch.
     */
    where: Prisma.TransferWhereUniqueInput;
};
/**
 * Transfer findUniqueOrThrow
 */
export type TransferFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Transfer to fetch.
     */
    where: Prisma.TransferWhereUniqueInput;
};
/**
 * Transfer findFirst
 */
export type TransferFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Transfer to fetch.
     */
    where?: Prisma.TransferWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transfers to fetch.
     */
    orderBy?: Prisma.TransferOrderByWithRelationInput | Prisma.TransferOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transfers.
     */
    cursor?: Prisma.TransferWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transfers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transfers.
     */
    distinct?: Prisma.TransferScalarFieldEnum | Prisma.TransferScalarFieldEnum[];
};
/**
 * Transfer findFirstOrThrow
 */
export type TransferFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Transfer to fetch.
     */
    where?: Prisma.TransferWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transfers to fetch.
     */
    orderBy?: Prisma.TransferOrderByWithRelationInput | Prisma.TransferOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transfers.
     */
    cursor?: Prisma.TransferWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transfers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transfers.
     */
    distinct?: Prisma.TransferScalarFieldEnum | Prisma.TransferScalarFieldEnum[];
};
/**
 * Transfer findMany
 */
export type TransferFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Transfers to fetch.
     */
    where?: Prisma.TransferWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transfers to fetch.
     */
    orderBy?: Prisma.TransferOrderByWithRelationInput | Prisma.TransferOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Transfers.
     */
    cursor?: Prisma.TransferWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transfers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transfers.
     */
    distinct?: Prisma.TransferScalarFieldEnum | Prisma.TransferScalarFieldEnum[];
};
/**
 * Transfer create
 */
export type TransferCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Transfer.
     */
    data: Prisma.XOR<Prisma.TransferCreateInput, Prisma.TransferUncheckedCreateInput>;
};
/**
 * Transfer createMany
 */
export type TransferCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transfers.
     */
    data: Prisma.TransferCreateManyInput | Prisma.TransferCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Transfer createManyAndReturn
 */
export type TransferCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: Prisma.TransferSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transfer
     */
    omit?: Prisma.TransferOmit<ExtArgs> | null;
    /**
     * The data used to create many Transfers.
     */
    data: Prisma.TransferCreateManyInput | Prisma.TransferCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransferIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Transfer update
 */
export type TransferUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Transfer.
     */
    data: Prisma.XOR<Prisma.TransferUpdateInput, Prisma.TransferUncheckedUpdateInput>;
    /**
     * Choose, which Transfer to update.
     */
    where: Prisma.TransferWhereUniqueInput;
};
/**
 * Transfer updateMany
 */
export type TransferUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Transfers.
     */
    data: Prisma.XOR<Prisma.TransferUpdateManyMutationInput, Prisma.TransferUncheckedUpdateManyInput>;
    /**
     * Filter which Transfers to update
     */
    where?: Prisma.TransferWhereInput;
    /**
     * Limit how many Transfers to update.
     */
    limit?: number;
};
/**
 * Transfer updateManyAndReturn
 */
export type TransferUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: Prisma.TransferSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transfer
     */
    omit?: Prisma.TransferOmit<ExtArgs> | null;
    /**
     * The data used to update Transfers.
     */
    data: Prisma.XOR<Prisma.TransferUpdateManyMutationInput, Prisma.TransferUncheckedUpdateManyInput>;
    /**
     * Filter which Transfers to update
     */
    where?: Prisma.TransferWhereInput;
    /**
     * Limit how many Transfers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransferIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Transfer upsert
 */
export type TransferUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Transfer to update in case it exists.
     */
    where: Prisma.TransferWhereUniqueInput;
    /**
     * In case the Transfer found by the `where` argument doesn't exist, create a new Transfer with this data.
     */
    create: Prisma.XOR<Prisma.TransferCreateInput, Prisma.TransferUncheckedCreateInput>;
    /**
     * In case the Transfer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TransferUpdateInput, Prisma.TransferUncheckedUpdateInput>;
};
/**
 * Transfer delete
 */
export type TransferDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Transfer to delete.
     */
    where: Prisma.TransferWhereUniqueInput;
};
/**
 * Transfer deleteMany
 */
export type TransferDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Transfers to delete
     */
    where?: Prisma.TransferWhereInput;
    /**
     * Limit how many Transfers to delete.
     */
    limit?: number;
};
/**
 * Transfer.authChallenges
 */
export type Transfer$authChallengesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Transfer.transaction
 */
export type Transfer$transactionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Transfer without action
 */
export type TransferDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
