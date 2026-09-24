import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TransactionAuthChallenge
 *
 */
export type TransactionAuthChallengeModel = runtime.Types.Result.DefaultSelection<Prisma.$TransactionAuthChallengePayload>;
export type AggregateTransactionAuthChallenge = {
    _count: TransactionAuthChallengeCountAggregateOutputType | null;
    _avg: TransactionAuthChallengeAvgAggregateOutputType | null;
    _sum: TransactionAuthChallengeSumAggregateOutputType | null;
    _min: TransactionAuthChallengeMinAggregateOutputType | null;
    _max: TransactionAuthChallengeMaxAggregateOutputType | null;
};
export type TransactionAuthChallengeAvgAggregateOutputType = {
    attempts: number | null;
    maxAttempts: number | null;
};
export type TransactionAuthChallengeSumAggregateOutputType = {
    attempts: number | null;
    maxAttempts: number | null;
};
export type TransactionAuthChallengeMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    transferId: string | null;
    method: $Enums.TransactionAuthMethod | null;
    challengeHash: string | null;
    expiresAt: Date | null;
    consumedAt: Date | null;
    attempts: number | null;
    maxAttempts: number | null;
    createdAt: Date | null;
};
export type TransactionAuthChallengeMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    transferId: string | null;
    method: $Enums.TransactionAuthMethod | null;
    challengeHash: string | null;
    expiresAt: Date | null;
    consumedAt: Date | null;
    attempts: number | null;
    maxAttempts: number | null;
    createdAt: Date | null;
};
export type TransactionAuthChallengeCountAggregateOutputType = {
    id: number;
    userId: number;
    transferId: number;
    method: number;
    challengeHash: number;
    expiresAt: number;
    consumedAt: number;
    attempts: number;
    maxAttempts: number;
    createdAt: number;
    _all: number;
};
export type TransactionAuthChallengeAvgAggregateInputType = {
    attempts?: true;
    maxAttempts?: true;
};
export type TransactionAuthChallengeSumAggregateInputType = {
    attempts?: true;
    maxAttempts?: true;
};
export type TransactionAuthChallengeMinAggregateInputType = {
    id?: true;
    userId?: true;
    transferId?: true;
    method?: true;
    challengeHash?: true;
    expiresAt?: true;
    consumedAt?: true;
    attempts?: true;
    maxAttempts?: true;
    createdAt?: true;
};
export type TransactionAuthChallengeMaxAggregateInputType = {
    id?: true;
    userId?: true;
    transferId?: true;
    method?: true;
    challengeHash?: true;
    expiresAt?: true;
    consumedAt?: true;
    attempts?: true;
    maxAttempts?: true;
    createdAt?: true;
};
export type TransactionAuthChallengeCountAggregateInputType = {
    id?: true;
    userId?: true;
    transferId?: true;
    method?: true;
    challengeHash?: true;
    expiresAt?: true;
    consumedAt?: true;
    attempts?: true;
    maxAttempts?: true;
    createdAt?: true;
    _all?: true;
};
export type TransactionAuthChallengeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionAuthChallenge to aggregate.
     */
    where?: Prisma.TransactionAuthChallengeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionAuthChallenges to fetch.
     */
    orderBy?: Prisma.TransactionAuthChallengeOrderByWithRelationInput | Prisma.TransactionAuthChallengeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TransactionAuthChallengeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionAuthChallenges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionAuthChallenges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TransactionAuthChallenges
    **/
    _count?: true | TransactionAuthChallengeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TransactionAuthChallengeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TransactionAuthChallengeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TransactionAuthChallengeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TransactionAuthChallengeMaxAggregateInputType;
};
export type GetTransactionAuthChallengeAggregateType<T extends TransactionAuthChallengeAggregateArgs> = {
    [P in keyof T & keyof AggregateTransactionAuthChallenge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransactionAuthChallenge[P]> : Prisma.GetScalarType<T[P], AggregateTransactionAuthChallenge[P]>;
};
export type TransactionAuthChallengeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionAuthChallengeWhereInput;
    orderBy?: Prisma.TransactionAuthChallengeOrderByWithAggregationInput | Prisma.TransactionAuthChallengeOrderByWithAggregationInput[];
    by: Prisma.TransactionAuthChallengeScalarFieldEnum[] | Prisma.TransactionAuthChallengeScalarFieldEnum;
    having?: Prisma.TransactionAuthChallengeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionAuthChallengeCountAggregateInputType | true;
    _avg?: TransactionAuthChallengeAvgAggregateInputType;
    _sum?: TransactionAuthChallengeSumAggregateInputType;
    _min?: TransactionAuthChallengeMinAggregateInputType;
    _max?: TransactionAuthChallengeMaxAggregateInputType;
};
export type TransactionAuthChallengeGroupByOutputType = {
    id: string;
    userId: string;
    transferId: string | null;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date;
    consumedAt: Date | null;
    attempts: number;
    maxAttempts: number;
    createdAt: Date;
    _count: TransactionAuthChallengeCountAggregateOutputType | null;
    _avg: TransactionAuthChallengeAvgAggregateOutputType | null;
    _sum: TransactionAuthChallengeSumAggregateOutputType | null;
    _min: TransactionAuthChallengeMinAggregateOutputType | null;
    _max: TransactionAuthChallengeMaxAggregateOutputType | null;
};
export type GetTransactionAuthChallengeGroupByPayload<T extends TransactionAuthChallengeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionAuthChallengeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionAuthChallengeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionAuthChallengeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionAuthChallengeGroupByOutputType[P]>;
}>>;
export type TransactionAuthChallengeWhereInput = {
    AND?: Prisma.TransactionAuthChallengeWhereInput | Prisma.TransactionAuthChallengeWhereInput[];
    OR?: Prisma.TransactionAuthChallengeWhereInput[];
    NOT?: Prisma.TransactionAuthChallengeWhereInput | Prisma.TransactionAuthChallengeWhereInput[];
    id?: Prisma.StringFilter<"TransactionAuthChallenge"> | string;
    userId?: Prisma.StringFilter<"TransactionAuthChallenge"> | string;
    transferId?: Prisma.StringNullableFilter<"TransactionAuthChallenge"> | string | null;
    method?: Prisma.EnumTransactionAuthMethodFilter<"TransactionAuthChallenge"> | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFilter<"TransactionAuthChallenge"> | string;
    expiresAt?: Prisma.DateTimeFilter<"TransactionAuthChallenge"> | Date | string;
    consumedAt?: Prisma.DateTimeNullableFilter<"TransactionAuthChallenge"> | Date | string | null;
    attempts?: Prisma.IntFilter<"TransactionAuthChallenge"> | number;
    maxAttempts?: Prisma.IntFilter<"TransactionAuthChallenge"> | number;
    createdAt?: Prisma.DateTimeFilter<"TransactionAuthChallenge"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    transfer?: Prisma.XOR<Prisma.TransferNullableScalarRelationFilter, Prisma.TransferWhereInput> | null;
};
export type TransactionAuthChallengeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    transferId?: Prisma.SortOrderInput | Prisma.SortOrder;
    method?: Prisma.SortOrder;
    challengeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    maxAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    transfer?: Prisma.TransferOrderByWithRelationInput;
};
export type TransactionAuthChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    challengeHash?: string;
    AND?: Prisma.TransactionAuthChallengeWhereInput | Prisma.TransactionAuthChallengeWhereInput[];
    OR?: Prisma.TransactionAuthChallengeWhereInput[];
    NOT?: Prisma.TransactionAuthChallengeWhereInput | Prisma.TransactionAuthChallengeWhereInput[];
    userId?: Prisma.StringFilter<"TransactionAuthChallenge"> | string;
    transferId?: Prisma.StringNullableFilter<"TransactionAuthChallenge"> | string | null;
    method?: Prisma.EnumTransactionAuthMethodFilter<"TransactionAuthChallenge"> | $Enums.TransactionAuthMethod;
    expiresAt?: Prisma.DateTimeFilter<"TransactionAuthChallenge"> | Date | string;
    consumedAt?: Prisma.DateTimeNullableFilter<"TransactionAuthChallenge"> | Date | string | null;
    attempts?: Prisma.IntFilter<"TransactionAuthChallenge"> | number;
    maxAttempts?: Prisma.IntFilter<"TransactionAuthChallenge"> | number;
    createdAt?: Prisma.DateTimeFilter<"TransactionAuthChallenge"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    transfer?: Prisma.XOR<Prisma.TransferNullableScalarRelationFilter, Prisma.TransferWhereInput> | null;
}, "id" | "challengeHash">;
export type TransactionAuthChallengeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    transferId?: Prisma.SortOrderInput | Prisma.SortOrder;
    method?: Prisma.SortOrder;
    challengeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    maxAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TransactionAuthChallengeCountOrderByAggregateInput;
    _avg?: Prisma.TransactionAuthChallengeAvgOrderByAggregateInput;
    _max?: Prisma.TransactionAuthChallengeMaxOrderByAggregateInput;
    _min?: Prisma.TransactionAuthChallengeMinOrderByAggregateInput;
    _sum?: Prisma.TransactionAuthChallengeSumOrderByAggregateInput;
};
export type TransactionAuthChallengeScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransactionAuthChallengeScalarWhereWithAggregatesInput | Prisma.TransactionAuthChallengeScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransactionAuthChallengeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransactionAuthChallengeScalarWhereWithAggregatesInput | Prisma.TransactionAuthChallengeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TransactionAuthChallenge"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"TransactionAuthChallenge"> | string;
    transferId?: Prisma.StringNullableWithAggregatesFilter<"TransactionAuthChallenge"> | string | null;
    method?: Prisma.EnumTransactionAuthMethodWithAggregatesFilter<"TransactionAuthChallenge"> | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringWithAggregatesFilter<"TransactionAuthChallenge"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"TransactionAuthChallenge"> | Date | string;
    consumedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TransactionAuthChallenge"> | Date | string | null;
    attempts?: Prisma.IntWithAggregatesFilter<"TransactionAuthChallenge"> | number;
    maxAttempts?: Prisma.IntWithAggregatesFilter<"TransactionAuthChallenge"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TransactionAuthChallenge"> | Date | string;
};
export type TransactionAuthChallengeCreateInput = {
    id?: string;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTransactionAuthChallengesInput;
    transfer?: Prisma.TransferCreateNestedOneWithoutAuthChallengesInput;
};
export type TransactionAuthChallengeUncheckedCreateInput = {
    id?: string;
    userId: string;
    transferId?: string | null;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
};
export type TransactionAuthChallengeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionAuthChallengesNestedInput;
    transfer?: Prisma.TransferUpdateOneWithoutAuthChallengesNestedInput;
};
export type TransactionAuthChallengeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    transferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionAuthChallengeCreateManyInput = {
    id?: string;
    userId: string;
    transferId?: string | null;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
};
export type TransactionAuthChallengeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionAuthChallengeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    transferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionAuthChallengeListRelationFilter = {
    every?: Prisma.TransactionAuthChallengeWhereInput;
    some?: Prisma.TransactionAuthChallengeWhereInput;
    none?: Prisma.TransactionAuthChallengeWhereInput;
};
export type TransactionAuthChallengeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransactionAuthChallengeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    transferId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    challengeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    maxAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransactionAuthChallengeAvgOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
    maxAttempts?: Prisma.SortOrder;
};
export type TransactionAuthChallengeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    transferId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    challengeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    maxAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransactionAuthChallengeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    transferId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    challengeHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    maxAttempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransactionAuthChallengeSumOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
    maxAttempts?: Prisma.SortOrder;
};
export type TransactionAuthChallengeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutUserInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput> | Prisma.TransactionAuthChallengeCreateWithoutUserInput[] | Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransactionAuthChallengeCreateOrConnectWithoutUserInput | Prisma.TransactionAuthChallengeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TransactionAuthChallengeCreateManyUserInputEnvelope;
    connect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
};
export type TransactionAuthChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutUserInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput> | Prisma.TransactionAuthChallengeCreateWithoutUserInput[] | Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransactionAuthChallengeCreateOrConnectWithoutUserInput | Prisma.TransactionAuthChallengeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TransactionAuthChallengeCreateManyUserInputEnvelope;
    connect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
};
export type TransactionAuthChallengeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutUserInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput> | Prisma.TransactionAuthChallengeCreateWithoutUserInput[] | Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransactionAuthChallengeCreateOrConnectWithoutUserInput | Prisma.TransactionAuthChallengeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TransactionAuthChallengeUpsertWithWhereUniqueWithoutUserInput | Prisma.TransactionAuthChallengeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TransactionAuthChallengeCreateManyUserInputEnvelope;
    set?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    disconnect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    delete?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    connect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    update?: Prisma.TransactionAuthChallengeUpdateWithWhereUniqueWithoutUserInput | Prisma.TransactionAuthChallengeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TransactionAuthChallengeUpdateManyWithWhereWithoutUserInput | Prisma.TransactionAuthChallengeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TransactionAuthChallengeScalarWhereInput | Prisma.TransactionAuthChallengeScalarWhereInput[];
};
export type TransactionAuthChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutUserInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput> | Prisma.TransactionAuthChallengeCreateWithoutUserInput[] | Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransactionAuthChallengeCreateOrConnectWithoutUserInput | Prisma.TransactionAuthChallengeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TransactionAuthChallengeUpsertWithWhereUniqueWithoutUserInput | Prisma.TransactionAuthChallengeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TransactionAuthChallengeCreateManyUserInputEnvelope;
    set?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    disconnect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    delete?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    connect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    update?: Prisma.TransactionAuthChallengeUpdateWithWhereUniqueWithoutUserInput | Prisma.TransactionAuthChallengeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TransactionAuthChallengeUpdateManyWithWhereWithoutUserInput | Prisma.TransactionAuthChallengeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TransactionAuthChallengeScalarWhereInput | Prisma.TransactionAuthChallengeScalarWhereInput[];
};
export type TransactionAuthChallengeCreateNestedManyWithoutTransferInput = {
    create?: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutTransferInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput> | Prisma.TransactionAuthChallengeCreateWithoutTransferInput[] | Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput[];
    connectOrCreate?: Prisma.TransactionAuthChallengeCreateOrConnectWithoutTransferInput | Prisma.TransactionAuthChallengeCreateOrConnectWithoutTransferInput[];
    createMany?: Prisma.TransactionAuthChallengeCreateManyTransferInputEnvelope;
    connect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
};
export type TransactionAuthChallengeUncheckedCreateNestedManyWithoutTransferInput = {
    create?: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutTransferInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput> | Prisma.TransactionAuthChallengeCreateWithoutTransferInput[] | Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput[];
    connectOrCreate?: Prisma.TransactionAuthChallengeCreateOrConnectWithoutTransferInput | Prisma.TransactionAuthChallengeCreateOrConnectWithoutTransferInput[];
    createMany?: Prisma.TransactionAuthChallengeCreateManyTransferInputEnvelope;
    connect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
};
export type TransactionAuthChallengeUpdateManyWithoutTransferNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutTransferInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput> | Prisma.TransactionAuthChallengeCreateWithoutTransferInput[] | Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput[];
    connectOrCreate?: Prisma.TransactionAuthChallengeCreateOrConnectWithoutTransferInput | Prisma.TransactionAuthChallengeCreateOrConnectWithoutTransferInput[];
    upsert?: Prisma.TransactionAuthChallengeUpsertWithWhereUniqueWithoutTransferInput | Prisma.TransactionAuthChallengeUpsertWithWhereUniqueWithoutTransferInput[];
    createMany?: Prisma.TransactionAuthChallengeCreateManyTransferInputEnvelope;
    set?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    disconnect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    delete?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    connect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    update?: Prisma.TransactionAuthChallengeUpdateWithWhereUniqueWithoutTransferInput | Prisma.TransactionAuthChallengeUpdateWithWhereUniqueWithoutTransferInput[];
    updateMany?: Prisma.TransactionAuthChallengeUpdateManyWithWhereWithoutTransferInput | Prisma.TransactionAuthChallengeUpdateManyWithWhereWithoutTransferInput[];
    deleteMany?: Prisma.TransactionAuthChallengeScalarWhereInput | Prisma.TransactionAuthChallengeScalarWhereInput[];
};
export type TransactionAuthChallengeUncheckedUpdateManyWithoutTransferNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutTransferInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput> | Prisma.TransactionAuthChallengeCreateWithoutTransferInput[] | Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput[];
    connectOrCreate?: Prisma.TransactionAuthChallengeCreateOrConnectWithoutTransferInput | Prisma.TransactionAuthChallengeCreateOrConnectWithoutTransferInput[];
    upsert?: Prisma.TransactionAuthChallengeUpsertWithWhereUniqueWithoutTransferInput | Prisma.TransactionAuthChallengeUpsertWithWhereUniqueWithoutTransferInput[];
    createMany?: Prisma.TransactionAuthChallengeCreateManyTransferInputEnvelope;
    set?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    disconnect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    delete?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    connect?: Prisma.TransactionAuthChallengeWhereUniqueInput | Prisma.TransactionAuthChallengeWhereUniqueInput[];
    update?: Prisma.TransactionAuthChallengeUpdateWithWhereUniqueWithoutTransferInput | Prisma.TransactionAuthChallengeUpdateWithWhereUniqueWithoutTransferInput[];
    updateMany?: Prisma.TransactionAuthChallengeUpdateManyWithWhereWithoutTransferInput | Prisma.TransactionAuthChallengeUpdateManyWithWhereWithoutTransferInput[];
    deleteMany?: Prisma.TransactionAuthChallengeScalarWhereInput | Prisma.TransactionAuthChallengeScalarWhereInput[];
};
export type EnumTransactionAuthMethodFieldUpdateOperationsInput = {
    set?: $Enums.TransactionAuthMethod;
};
export type TransactionAuthChallengeCreateWithoutUserInput = {
    id?: string;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
    transfer?: Prisma.TransferCreateNestedOneWithoutAuthChallengesInput;
};
export type TransactionAuthChallengeUncheckedCreateWithoutUserInput = {
    id?: string;
    transferId?: string | null;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
};
export type TransactionAuthChallengeCreateOrConnectWithoutUserInput = {
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutUserInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput>;
};
export type TransactionAuthChallengeCreateManyUserInputEnvelope = {
    data: Prisma.TransactionAuthChallengeCreateManyUserInput | Prisma.TransactionAuthChallengeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TransactionAuthChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateWithoutUserInput, Prisma.TransactionAuthChallengeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutUserInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutUserInput>;
};
export type TransactionAuthChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateWithoutUserInput, Prisma.TransactionAuthChallengeUncheckedUpdateWithoutUserInput>;
};
export type TransactionAuthChallengeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TransactionAuthChallengeScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateManyMutationInput, Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutUserInput>;
};
export type TransactionAuthChallengeScalarWhereInput = {
    AND?: Prisma.TransactionAuthChallengeScalarWhereInput | Prisma.TransactionAuthChallengeScalarWhereInput[];
    OR?: Prisma.TransactionAuthChallengeScalarWhereInput[];
    NOT?: Prisma.TransactionAuthChallengeScalarWhereInput | Prisma.TransactionAuthChallengeScalarWhereInput[];
    id?: Prisma.StringFilter<"TransactionAuthChallenge"> | string;
    userId?: Prisma.StringFilter<"TransactionAuthChallenge"> | string;
    transferId?: Prisma.StringNullableFilter<"TransactionAuthChallenge"> | string | null;
    method?: Prisma.EnumTransactionAuthMethodFilter<"TransactionAuthChallenge"> | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFilter<"TransactionAuthChallenge"> | string;
    expiresAt?: Prisma.DateTimeFilter<"TransactionAuthChallenge"> | Date | string;
    consumedAt?: Prisma.DateTimeNullableFilter<"TransactionAuthChallenge"> | Date | string | null;
    attempts?: Prisma.IntFilter<"TransactionAuthChallenge"> | number;
    maxAttempts?: Prisma.IntFilter<"TransactionAuthChallenge"> | number;
    createdAt?: Prisma.DateTimeFilter<"TransactionAuthChallenge"> | Date | string;
};
export type TransactionAuthChallengeCreateWithoutTransferInput = {
    id?: string;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTransactionAuthChallengesInput;
};
export type TransactionAuthChallengeUncheckedCreateWithoutTransferInput = {
    id?: string;
    userId: string;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
};
export type TransactionAuthChallengeCreateOrConnectWithoutTransferInput = {
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutTransferInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput>;
};
export type TransactionAuthChallengeCreateManyTransferInputEnvelope = {
    data: Prisma.TransactionAuthChallengeCreateManyTransferInput | Prisma.TransactionAuthChallengeCreateManyTransferInput[];
    skipDuplicates?: boolean;
};
export type TransactionAuthChallengeUpsertWithWhereUniqueWithoutTransferInput = {
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateWithoutTransferInput, Prisma.TransactionAuthChallengeUncheckedUpdateWithoutTransferInput>;
    create: Prisma.XOR<Prisma.TransactionAuthChallengeCreateWithoutTransferInput, Prisma.TransactionAuthChallengeUncheckedCreateWithoutTransferInput>;
};
export type TransactionAuthChallengeUpdateWithWhereUniqueWithoutTransferInput = {
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateWithoutTransferInput, Prisma.TransactionAuthChallengeUncheckedUpdateWithoutTransferInput>;
};
export type TransactionAuthChallengeUpdateManyWithWhereWithoutTransferInput = {
    where: Prisma.TransactionAuthChallengeScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateManyMutationInput, Prisma.TransactionAuthChallengeUncheckedUpdateManyWithoutTransferInput>;
};
export type TransactionAuthChallengeCreateManyUserInput = {
    id?: string;
    transferId?: string | null;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
};
export type TransactionAuthChallengeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transfer?: Prisma.TransferUpdateOneWithoutAuthChallengesNestedInput;
};
export type TransactionAuthChallengeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionAuthChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionAuthChallengeCreateManyTransferInput = {
    id?: string;
    userId: string;
    method: $Enums.TransactionAuthMethod;
    challengeHash: string;
    expiresAt: Date | string;
    consumedAt?: Date | string | null;
    attempts?: number;
    maxAttempts?: number;
    createdAt?: Date | string;
};
export type TransactionAuthChallengeUpdateWithoutTransferInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionAuthChallengesNestedInput;
};
export type TransactionAuthChallengeUncheckedUpdateWithoutTransferInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionAuthChallengeUncheckedUpdateManyWithoutTransferInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumTransactionAuthMethodFieldUpdateOperationsInput | $Enums.TransactionAuthMethod;
    challengeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionAuthChallengeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    transferId?: boolean;
    method?: boolean;
    challengeHash?: boolean;
    expiresAt?: boolean;
    consumedAt?: boolean;
    attempts?: boolean;
    maxAttempts?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    transfer?: boolean | Prisma.TransactionAuthChallenge$transferArgs<ExtArgs>;
}, ExtArgs["result"]["transactionAuthChallenge"]>;
export type TransactionAuthChallengeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    transferId?: boolean;
    method?: boolean;
    challengeHash?: boolean;
    expiresAt?: boolean;
    consumedAt?: boolean;
    attempts?: boolean;
    maxAttempts?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    transfer?: boolean | Prisma.TransactionAuthChallenge$transferArgs<ExtArgs>;
}, ExtArgs["result"]["transactionAuthChallenge"]>;
export type TransactionAuthChallengeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    transferId?: boolean;
    method?: boolean;
    challengeHash?: boolean;
    expiresAt?: boolean;
    consumedAt?: boolean;
    attempts?: boolean;
    maxAttempts?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    transfer?: boolean | Prisma.TransactionAuthChallenge$transferArgs<ExtArgs>;
}, ExtArgs["result"]["transactionAuthChallenge"]>;
export type TransactionAuthChallengeSelectScalar = {
    id?: boolean;
    userId?: boolean;
    transferId?: boolean;
    method?: boolean;
    challengeHash?: boolean;
    expiresAt?: boolean;
    consumedAt?: boolean;
    attempts?: boolean;
    maxAttempts?: boolean;
    createdAt?: boolean;
};
export type TransactionAuthChallengeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "transferId" | "method" | "challengeHash" | "expiresAt" | "consumedAt" | "attempts" | "maxAttempts" | "createdAt", ExtArgs["result"]["transactionAuthChallenge"]>;
export type TransactionAuthChallengeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    transfer?: boolean | Prisma.TransactionAuthChallenge$transferArgs<ExtArgs>;
};
export type TransactionAuthChallengeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    transfer?: boolean | Prisma.TransactionAuthChallenge$transferArgs<ExtArgs>;
};
export type TransactionAuthChallengeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    transfer?: boolean | Prisma.TransactionAuthChallenge$transferArgs<ExtArgs>;
};
export type $TransactionAuthChallengePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TransactionAuthChallenge";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        transfer: Prisma.$TransferPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        transferId: string | null;
        method: $Enums.TransactionAuthMethod;
        challengeHash: string;
        expiresAt: Date;
        consumedAt: Date | null;
        attempts: number;
        maxAttempts: number;
        createdAt: Date;
    }, ExtArgs["result"]["transactionAuthChallenge"]>;
    composites: {};
};
export type TransactionAuthChallengeGetPayload<S extends boolean | null | undefined | TransactionAuthChallengeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload, S>;
export type TransactionAuthChallengeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransactionAuthChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionAuthChallengeCountAggregateInputType | true;
};
export interface TransactionAuthChallengeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TransactionAuthChallenge'];
        meta: {
            name: 'TransactionAuthChallenge';
        };
    };
    /**
     * Find zero or one TransactionAuthChallenge that matches the filter.
     * @param {TransactionAuthChallengeFindUniqueArgs} args - Arguments to find a TransactionAuthChallenge
     * @example
     * // Get one TransactionAuthChallenge
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionAuthChallengeFindUniqueArgs>(args: Prisma.SelectSubset<T, TransactionAuthChallengeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransactionAuthChallengeClient<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TransactionAuthChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionAuthChallengeFindUniqueOrThrowArgs} args - Arguments to find a TransactionAuthChallenge
     * @example
     * // Get one TransactionAuthChallenge
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionAuthChallengeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransactionAuthChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionAuthChallengeClient<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TransactionAuthChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAuthChallengeFindFirstArgs} args - Arguments to find a TransactionAuthChallenge
     * @example
     * // Get one TransactionAuthChallenge
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionAuthChallengeFindFirstArgs>(args?: Prisma.SelectSubset<T, TransactionAuthChallengeFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransactionAuthChallengeClient<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TransactionAuthChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAuthChallengeFindFirstOrThrowArgs} args - Arguments to find a TransactionAuthChallenge
     * @example
     * // Get one TransactionAuthChallenge
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionAuthChallengeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransactionAuthChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionAuthChallengeClient<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TransactionAuthChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAuthChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionAuthChallenges
     * const transactionAuthChallenges = await prisma.transactionAuthChallenge.findMany()
     *
     * // Get first 10 TransactionAuthChallenges
     * const transactionAuthChallenges = await prisma.transactionAuthChallenge.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionAuthChallengeWithIdOnly = await prisma.transactionAuthChallenge.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionAuthChallengeFindManyArgs>(args?: Prisma.SelectSubset<T, TransactionAuthChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TransactionAuthChallenge.
     * @param {TransactionAuthChallengeCreateArgs} args - Arguments to create a TransactionAuthChallenge.
     * @example
     * // Create one TransactionAuthChallenge
     * const TransactionAuthChallenge = await prisma.transactionAuthChallenge.create({
     *   data: {
     *     // ... data to create a TransactionAuthChallenge
     *   }
     * })
     *
     */
    create<T extends TransactionAuthChallengeCreateArgs>(args: Prisma.SelectSubset<T, TransactionAuthChallengeCreateArgs<ExtArgs>>): Prisma.Prisma__TransactionAuthChallengeClient<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TransactionAuthChallenges.
     * @param {TransactionAuthChallengeCreateManyArgs} args - Arguments to create many TransactionAuthChallenges.
     * @example
     * // Create many TransactionAuthChallenges
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionAuthChallengeCreateManyArgs>(args?: Prisma.SelectSubset<T, TransactionAuthChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TransactionAuthChallenges and returns the data saved in the database.
     * @param {TransactionAuthChallengeCreateManyAndReturnArgs} args - Arguments to create many TransactionAuthChallenges.
     * @example
     * // Create many TransactionAuthChallenges
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TransactionAuthChallenges and only return the `id`
     * const transactionAuthChallengeWithIdOnly = await prisma.transactionAuthChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionAuthChallengeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransactionAuthChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TransactionAuthChallenge.
     * @param {TransactionAuthChallengeDeleteArgs} args - Arguments to delete one TransactionAuthChallenge.
     * @example
     * // Delete one TransactionAuthChallenge
     * const TransactionAuthChallenge = await prisma.transactionAuthChallenge.delete({
     *   where: {
     *     // ... filter to delete one TransactionAuthChallenge
     *   }
     * })
     *
     */
    delete<T extends TransactionAuthChallengeDeleteArgs>(args: Prisma.SelectSubset<T, TransactionAuthChallengeDeleteArgs<ExtArgs>>): Prisma.Prisma__TransactionAuthChallengeClient<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TransactionAuthChallenge.
     * @param {TransactionAuthChallengeUpdateArgs} args - Arguments to update one TransactionAuthChallenge.
     * @example
     * // Update one TransactionAuthChallenge
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionAuthChallengeUpdateArgs>(args: Prisma.SelectSubset<T, TransactionAuthChallengeUpdateArgs<ExtArgs>>): Prisma.Prisma__TransactionAuthChallengeClient<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TransactionAuthChallenges.
     * @param {TransactionAuthChallengeDeleteManyArgs} args - Arguments to filter TransactionAuthChallenges to delete.
     * @example
     * // Delete a few TransactionAuthChallenges
     * const { count } = await prisma.transactionAuthChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionAuthChallengeDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransactionAuthChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TransactionAuthChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAuthChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionAuthChallenges
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionAuthChallengeUpdateManyArgs>(args: Prisma.SelectSubset<T, TransactionAuthChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TransactionAuthChallenges and returns the data updated in the database.
     * @param {TransactionAuthChallengeUpdateManyAndReturnArgs} args - Arguments to update many TransactionAuthChallenges.
     * @example
     * // Update many TransactionAuthChallenges
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TransactionAuthChallenges and only return the `id`
     * const transactionAuthChallengeWithIdOnly = await prisma.transactionAuthChallenge.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionAuthChallengeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransactionAuthChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TransactionAuthChallenge.
     * @param {TransactionAuthChallengeUpsertArgs} args - Arguments to update or create a TransactionAuthChallenge.
     * @example
     * // Update or create a TransactionAuthChallenge
     * const transactionAuthChallenge = await prisma.transactionAuthChallenge.upsert({
     *   create: {
     *     // ... data to create a TransactionAuthChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionAuthChallenge we want to update
     *   }
     * })
     */
    upsert<T extends TransactionAuthChallengeUpsertArgs>(args: Prisma.SelectSubset<T, TransactionAuthChallengeUpsertArgs<ExtArgs>>): Prisma.Prisma__TransactionAuthChallengeClient<runtime.Types.Result.GetResult<Prisma.$TransactionAuthChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TransactionAuthChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAuthChallengeCountArgs} args - Arguments to filter TransactionAuthChallenges to count.
     * @example
     * // Count the number of TransactionAuthChallenges
     * const count = await prisma.transactionAuthChallenge.count({
     *   where: {
     *     // ... the filter for the TransactionAuthChallenges we want to count
     *   }
     * })
    **/
    count<T extends TransactionAuthChallengeCountArgs>(args?: Prisma.Subset<T, TransactionAuthChallengeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionAuthChallengeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TransactionAuthChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAuthChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAuthChallengeAggregateArgs>(args: Prisma.Subset<T, TransactionAuthChallengeAggregateArgs>): Prisma.PrismaPromise<GetTransactionAuthChallengeAggregateType<T>>;
    /**
     * Group by TransactionAuthChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAuthChallengeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TransactionAuthChallengeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransactionAuthChallengeGroupByArgs['orderBy'];
    } : {
        orderBy?: TransactionAuthChallengeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransactionAuthChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionAuthChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TransactionAuthChallenge model
     */
    readonly fields: TransactionAuthChallengeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TransactionAuthChallenge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TransactionAuthChallengeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transfer<T extends Prisma.TransactionAuthChallenge$transferArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransactionAuthChallenge$transferArgs<ExtArgs>>): Prisma.Prisma__TransferClient<runtime.Types.Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TransactionAuthChallenge model
 */
export interface TransactionAuthChallengeFieldRefs {
    readonly id: Prisma.FieldRef<"TransactionAuthChallenge", 'String'>;
    readonly userId: Prisma.FieldRef<"TransactionAuthChallenge", 'String'>;
    readonly transferId: Prisma.FieldRef<"TransactionAuthChallenge", 'String'>;
    readonly method: Prisma.FieldRef<"TransactionAuthChallenge", 'TransactionAuthMethod'>;
    readonly challengeHash: Prisma.FieldRef<"TransactionAuthChallenge", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"TransactionAuthChallenge", 'DateTime'>;
    readonly consumedAt: Prisma.FieldRef<"TransactionAuthChallenge", 'DateTime'>;
    readonly attempts: Prisma.FieldRef<"TransactionAuthChallenge", 'Int'>;
    readonly maxAttempts: Prisma.FieldRef<"TransactionAuthChallenge", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"TransactionAuthChallenge", 'DateTime'>;
}
/**
 * TransactionAuthChallenge findUnique
 */
export type TransactionAuthChallengeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TransactionAuthChallenge to fetch.
     */
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
};
/**
 * TransactionAuthChallenge findUniqueOrThrow
 */
export type TransactionAuthChallengeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TransactionAuthChallenge to fetch.
     */
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
};
/**
 * TransactionAuthChallenge findFirst
 */
export type TransactionAuthChallengeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TransactionAuthChallenge to fetch.
     */
    where?: Prisma.TransactionAuthChallengeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionAuthChallenges to fetch.
     */
    orderBy?: Prisma.TransactionAuthChallengeOrderByWithRelationInput | Prisma.TransactionAuthChallengeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionAuthChallenges.
     */
    cursor?: Prisma.TransactionAuthChallengeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionAuthChallenges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionAuthChallenges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionAuthChallenges.
     */
    distinct?: Prisma.TransactionAuthChallengeScalarFieldEnum | Prisma.TransactionAuthChallengeScalarFieldEnum[];
};
/**
 * TransactionAuthChallenge findFirstOrThrow
 */
export type TransactionAuthChallengeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TransactionAuthChallenge to fetch.
     */
    where?: Prisma.TransactionAuthChallengeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionAuthChallenges to fetch.
     */
    orderBy?: Prisma.TransactionAuthChallengeOrderByWithRelationInput | Prisma.TransactionAuthChallengeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionAuthChallenges.
     */
    cursor?: Prisma.TransactionAuthChallengeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionAuthChallenges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionAuthChallenges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionAuthChallenges.
     */
    distinct?: Prisma.TransactionAuthChallengeScalarFieldEnum | Prisma.TransactionAuthChallengeScalarFieldEnum[];
};
/**
 * TransactionAuthChallenge findMany
 */
export type TransactionAuthChallengeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TransactionAuthChallenges to fetch.
     */
    where?: Prisma.TransactionAuthChallengeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionAuthChallenges to fetch.
     */
    orderBy?: Prisma.TransactionAuthChallengeOrderByWithRelationInput | Prisma.TransactionAuthChallengeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TransactionAuthChallenges.
     */
    cursor?: Prisma.TransactionAuthChallengeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionAuthChallenges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionAuthChallenges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionAuthChallenges.
     */
    distinct?: Prisma.TransactionAuthChallengeScalarFieldEnum | Prisma.TransactionAuthChallengeScalarFieldEnum[];
};
/**
 * TransactionAuthChallenge create
 */
export type TransactionAuthChallengeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a TransactionAuthChallenge.
     */
    data: Prisma.XOR<Prisma.TransactionAuthChallengeCreateInput, Prisma.TransactionAuthChallengeUncheckedCreateInput>;
};
/**
 * TransactionAuthChallenge createMany
 */
export type TransactionAuthChallengeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionAuthChallenges.
     */
    data: Prisma.TransactionAuthChallengeCreateManyInput | Prisma.TransactionAuthChallengeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TransactionAuthChallenge createManyAndReturn
 */
export type TransactionAuthChallengeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionAuthChallenge
     */
    select?: Prisma.TransactionAuthChallengeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAuthChallenge
     */
    omit?: Prisma.TransactionAuthChallengeOmit<ExtArgs> | null;
    /**
     * The data used to create many TransactionAuthChallenges.
     */
    data: Prisma.TransactionAuthChallengeCreateManyInput | Prisma.TransactionAuthChallengeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionAuthChallengeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TransactionAuthChallenge update
 */
export type TransactionAuthChallengeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a TransactionAuthChallenge.
     */
    data: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateInput, Prisma.TransactionAuthChallengeUncheckedUpdateInput>;
    /**
     * Choose, which TransactionAuthChallenge to update.
     */
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
};
/**
 * TransactionAuthChallenge updateMany
 */
export type TransactionAuthChallengeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionAuthChallenges.
     */
    data: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateManyMutationInput, Prisma.TransactionAuthChallengeUncheckedUpdateManyInput>;
    /**
     * Filter which TransactionAuthChallenges to update
     */
    where?: Prisma.TransactionAuthChallengeWhereInput;
    /**
     * Limit how many TransactionAuthChallenges to update.
     */
    limit?: number;
};
/**
 * TransactionAuthChallenge updateManyAndReturn
 */
export type TransactionAuthChallengeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionAuthChallenge
     */
    select?: Prisma.TransactionAuthChallengeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAuthChallenge
     */
    omit?: Prisma.TransactionAuthChallengeOmit<ExtArgs> | null;
    /**
     * The data used to update TransactionAuthChallenges.
     */
    data: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateManyMutationInput, Prisma.TransactionAuthChallengeUncheckedUpdateManyInput>;
    /**
     * Filter which TransactionAuthChallenges to update
     */
    where?: Prisma.TransactionAuthChallengeWhereInput;
    /**
     * Limit how many TransactionAuthChallenges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionAuthChallengeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TransactionAuthChallenge upsert
 */
export type TransactionAuthChallengeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the TransactionAuthChallenge to update in case it exists.
     */
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
    /**
     * In case the TransactionAuthChallenge found by the `where` argument doesn't exist, create a new TransactionAuthChallenge with this data.
     */
    create: Prisma.XOR<Prisma.TransactionAuthChallengeCreateInput, Prisma.TransactionAuthChallengeUncheckedCreateInput>;
    /**
     * In case the TransactionAuthChallenge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TransactionAuthChallengeUpdateInput, Prisma.TransactionAuthChallengeUncheckedUpdateInput>;
};
/**
 * TransactionAuthChallenge delete
 */
export type TransactionAuthChallengeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which TransactionAuthChallenge to delete.
     */
    where: Prisma.TransactionAuthChallengeWhereUniqueInput;
};
/**
 * TransactionAuthChallenge deleteMany
 */
export type TransactionAuthChallengeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionAuthChallenges to delete
     */
    where?: Prisma.TransactionAuthChallengeWhereInput;
    /**
     * Limit how many TransactionAuthChallenges to delete.
     */
    limit?: number;
};
/**
 * TransactionAuthChallenge.transfer
 */
export type TransactionAuthChallenge$transferArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * TransactionAuthChallenge without action
 */
export type TransactionAuthChallengeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
