import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SavingsGoalContribution
 *
 */
export type SavingsGoalContributionModel = runtime.Types.Result.DefaultSelection<Prisma.$SavingsGoalContributionPayload>;
export type AggregateSavingsGoalContribution = {
    _count: SavingsGoalContributionCountAggregateOutputType | null;
    _avg: SavingsGoalContributionAvgAggregateOutputType | null;
    _sum: SavingsGoalContributionSumAggregateOutputType | null;
    _min: SavingsGoalContributionMinAggregateOutputType | null;
    _max: SavingsGoalContributionMaxAggregateOutputType | null;
};
export type SavingsGoalContributionAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type SavingsGoalContributionSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type SavingsGoalContributionMinAggregateOutputType = {
    id: string | null;
    goalId: string | null;
    transactionId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    createdAt: Date | null;
};
export type SavingsGoalContributionMaxAggregateOutputType = {
    id: string | null;
    goalId: string | null;
    transactionId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    createdAt: Date | null;
};
export type SavingsGoalContributionCountAggregateOutputType = {
    id: number;
    goalId: number;
    transactionId: number;
    amount: number;
    currency: number;
    createdAt: number;
    _all: number;
};
export type SavingsGoalContributionAvgAggregateInputType = {
    amount?: true;
};
export type SavingsGoalContributionSumAggregateInputType = {
    amount?: true;
};
export type SavingsGoalContributionMinAggregateInputType = {
    id?: true;
    goalId?: true;
    transactionId?: true;
    amount?: true;
    currency?: true;
    createdAt?: true;
};
export type SavingsGoalContributionMaxAggregateInputType = {
    id?: true;
    goalId?: true;
    transactionId?: true;
    amount?: true;
    currency?: true;
    createdAt?: true;
};
export type SavingsGoalContributionCountAggregateInputType = {
    id?: true;
    goalId?: true;
    transactionId?: true;
    amount?: true;
    currency?: true;
    createdAt?: true;
    _all?: true;
};
export type SavingsGoalContributionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsGoalContribution to aggregate.
     */
    where?: Prisma.SavingsGoalContributionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavingsGoalContributions to fetch.
     */
    orderBy?: Prisma.SavingsGoalContributionOrderByWithRelationInput | Prisma.SavingsGoalContributionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SavingsGoalContributionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavingsGoalContributions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavingsGoalContributions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SavingsGoalContributions
    **/
    _count?: true | SavingsGoalContributionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SavingsGoalContributionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SavingsGoalContributionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SavingsGoalContributionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SavingsGoalContributionMaxAggregateInputType;
};
export type GetSavingsGoalContributionAggregateType<T extends SavingsGoalContributionAggregateArgs> = {
    [P in keyof T & keyof AggregateSavingsGoalContribution]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSavingsGoalContribution[P]> : Prisma.GetScalarType<T[P], AggregateSavingsGoalContribution[P]>;
};
export type SavingsGoalContributionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsGoalContributionWhereInput;
    orderBy?: Prisma.SavingsGoalContributionOrderByWithAggregationInput | Prisma.SavingsGoalContributionOrderByWithAggregationInput[];
    by: Prisma.SavingsGoalContributionScalarFieldEnum[] | Prisma.SavingsGoalContributionScalarFieldEnum;
    having?: Prisma.SavingsGoalContributionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavingsGoalContributionCountAggregateInputType | true;
    _avg?: SavingsGoalContributionAvgAggregateInputType;
    _sum?: SavingsGoalContributionSumAggregateInputType;
    _min?: SavingsGoalContributionMinAggregateInputType;
    _max?: SavingsGoalContributionMaxAggregateInputType;
};
export type SavingsGoalContributionGroupByOutputType = {
    id: string;
    goalId: string;
    transactionId: string;
    amount: runtime.Decimal;
    currency: string;
    createdAt: Date;
    _count: SavingsGoalContributionCountAggregateOutputType | null;
    _avg: SavingsGoalContributionAvgAggregateOutputType | null;
    _sum: SavingsGoalContributionSumAggregateOutputType | null;
    _min: SavingsGoalContributionMinAggregateOutputType | null;
    _max: SavingsGoalContributionMaxAggregateOutputType | null;
};
export type GetSavingsGoalContributionGroupByPayload<T extends SavingsGoalContributionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavingsGoalContributionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavingsGoalContributionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavingsGoalContributionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavingsGoalContributionGroupByOutputType[P]>;
}>>;
export type SavingsGoalContributionWhereInput = {
    AND?: Prisma.SavingsGoalContributionWhereInput | Prisma.SavingsGoalContributionWhereInput[];
    OR?: Prisma.SavingsGoalContributionWhereInput[];
    NOT?: Prisma.SavingsGoalContributionWhereInput | Prisma.SavingsGoalContributionWhereInput[];
    id?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    goalId?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    transactionId?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    amount?: Prisma.DecimalFilter<"SavingsGoalContribution"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    createdAt?: Prisma.DateTimeFilter<"SavingsGoalContribution"> | Date | string;
    goal?: Prisma.XOR<Prisma.SavingsGoalScalarRelationFilter, Prisma.SavingsGoalWhereInput>;
    transaction?: Prisma.XOR<Prisma.TransactionScalarRelationFilter, Prisma.TransactionWhereInput>;
};
export type SavingsGoalContributionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    goal?: Prisma.SavingsGoalOrderByWithRelationInput;
    transaction?: Prisma.TransactionOrderByWithRelationInput;
};
export type SavingsGoalContributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    transactionId?: string;
    AND?: Prisma.SavingsGoalContributionWhereInput | Prisma.SavingsGoalContributionWhereInput[];
    OR?: Prisma.SavingsGoalContributionWhereInput[];
    NOT?: Prisma.SavingsGoalContributionWhereInput | Prisma.SavingsGoalContributionWhereInput[];
    goalId?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    amount?: Prisma.DecimalFilter<"SavingsGoalContribution"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    createdAt?: Prisma.DateTimeFilter<"SavingsGoalContribution"> | Date | string;
    goal?: Prisma.XOR<Prisma.SavingsGoalScalarRelationFilter, Prisma.SavingsGoalWhereInput>;
    transaction?: Prisma.XOR<Prisma.TransactionScalarRelationFilter, Prisma.TransactionWhereInput>;
}, "id" | "transactionId">;
export type SavingsGoalContributionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SavingsGoalContributionCountOrderByAggregateInput;
    _avg?: Prisma.SavingsGoalContributionAvgOrderByAggregateInput;
    _max?: Prisma.SavingsGoalContributionMaxOrderByAggregateInput;
    _min?: Prisma.SavingsGoalContributionMinOrderByAggregateInput;
    _sum?: Prisma.SavingsGoalContributionSumOrderByAggregateInput;
};
export type SavingsGoalContributionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SavingsGoalContributionScalarWhereWithAggregatesInput | Prisma.SavingsGoalContributionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SavingsGoalContributionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SavingsGoalContributionScalarWhereWithAggregatesInput | Prisma.SavingsGoalContributionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SavingsGoalContribution"> | string;
    goalId?: Prisma.StringWithAggregatesFilter<"SavingsGoalContribution"> | string;
    transactionId?: Prisma.StringWithAggregatesFilter<"SavingsGoalContribution"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"SavingsGoalContribution"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"SavingsGoalContribution"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SavingsGoalContribution"> | Date | string;
};
export type SavingsGoalContributionCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    createdAt?: Date | string;
    goal: Prisma.SavingsGoalCreateNestedOneWithoutContributionsInput;
    transaction: Prisma.TransactionCreateNestedOneWithoutSavingsGoalContributionInput;
};
export type SavingsGoalContributionUncheckedCreateInput = {
    id?: string;
    goalId: string;
    transactionId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    createdAt?: Date | string;
};
export type SavingsGoalContributionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: Prisma.SavingsGoalUpdateOneRequiredWithoutContributionsNestedInput;
    transaction?: Prisma.TransactionUpdateOneRequiredWithoutSavingsGoalContributionNestedInput;
};
export type SavingsGoalContributionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goalId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalContributionCreateManyInput = {
    id?: string;
    goalId: string;
    transactionId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    createdAt?: Date | string;
};
export type SavingsGoalContributionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalContributionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goalId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalContributionListRelationFilter = {
    every?: Prisma.SavingsGoalContributionWhereInput;
    some?: Prisma.SavingsGoalContributionWhereInput;
    none?: Prisma.SavingsGoalContributionWhereInput;
};
export type SavingsGoalContributionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SavingsGoalContributionNullableScalarRelationFilter = {
    is?: Prisma.SavingsGoalContributionWhereInput | null;
    isNot?: Prisma.SavingsGoalContributionWhereInput | null;
};
export type SavingsGoalContributionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SavingsGoalContributionAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type SavingsGoalContributionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SavingsGoalContributionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SavingsGoalContributionSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type SavingsGoalContributionCreateNestedManyWithoutGoalInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutGoalInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput> | Prisma.SavingsGoalContributionCreateWithoutGoalInput[] | Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.SavingsGoalContributionCreateOrConnectWithoutGoalInput | Prisma.SavingsGoalContributionCreateOrConnectWithoutGoalInput[];
    createMany?: Prisma.SavingsGoalContributionCreateManyGoalInputEnvelope;
    connect?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
};
export type SavingsGoalContributionUncheckedCreateNestedManyWithoutGoalInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutGoalInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput> | Prisma.SavingsGoalContributionCreateWithoutGoalInput[] | Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.SavingsGoalContributionCreateOrConnectWithoutGoalInput | Prisma.SavingsGoalContributionCreateOrConnectWithoutGoalInput[];
    createMany?: Prisma.SavingsGoalContributionCreateManyGoalInputEnvelope;
    connect?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
};
export type SavingsGoalContributionUpdateManyWithoutGoalNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutGoalInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput> | Prisma.SavingsGoalContributionCreateWithoutGoalInput[] | Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.SavingsGoalContributionCreateOrConnectWithoutGoalInput | Prisma.SavingsGoalContributionCreateOrConnectWithoutGoalInput[];
    upsert?: Prisma.SavingsGoalContributionUpsertWithWhereUniqueWithoutGoalInput | Prisma.SavingsGoalContributionUpsertWithWhereUniqueWithoutGoalInput[];
    createMany?: Prisma.SavingsGoalContributionCreateManyGoalInputEnvelope;
    set?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
    disconnect?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
    delete?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
    connect?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
    update?: Prisma.SavingsGoalContributionUpdateWithWhereUniqueWithoutGoalInput | Prisma.SavingsGoalContributionUpdateWithWhereUniqueWithoutGoalInput[];
    updateMany?: Prisma.SavingsGoalContributionUpdateManyWithWhereWithoutGoalInput | Prisma.SavingsGoalContributionUpdateManyWithWhereWithoutGoalInput[];
    deleteMany?: Prisma.SavingsGoalContributionScalarWhereInput | Prisma.SavingsGoalContributionScalarWhereInput[];
};
export type SavingsGoalContributionUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutGoalInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput> | Prisma.SavingsGoalContributionCreateWithoutGoalInput[] | Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.SavingsGoalContributionCreateOrConnectWithoutGoalInput | Prisma.SavingsGoalContributionCreateOrConnectWithoutGoalInput[];
    upsert?: Prisma.SavingsGoalContributionUpsertWithWhereUniqueWithoutGoalInput | Prisma.SavingsGoalContributionUpsertWithWhereUniqueWithoutGoalInput[];
    createMany?: Prisma.SavingsGoalContributionCreateManyGoalInputEnvelope;
    set?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
    disconnect?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
    delete?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
    connect?: Prisma.SavingsGoalContributionWhereUniqueInput | Prisma.SavingsGoalContributionWhereUniqueInput[];
    update?: Prisma.SavingsGoalContributionUpdateWithWhereUniqueWithoutGoalInput | Prisma.SavingsGoalContributionUpdateWithWhereUniqueWithoutGoalInput[];
    updateMany?: Prisma.SavingsGoalContributionUpdateManyWithWhereWithoutGoalInput | Prisma.SavingsGoalContributionUpdateManyWithWhereWithoutGoalInput[];
    deleteMany?: Prisma.SavingsGoalContributionScalarWhereInput | Prisma.SavingsGoalContributionScalarWhereInput[];
};
export type SavingsGoalContributionCreateNestedOneWithoutTransactionInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutTransactionInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.SavingsGoalContributionCreateOrConnectWithoutTransactionInput;
    connect?: Prisma.SavingsGoalContributionWhereUniqueInput;
};
export type SavingsGoalContributionUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutTransactionInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.SavingsGoalContributionCreateOrConnectWithoutTransactionInput;
    connect?: Prisma.SavingsGoalContributionWhereUniqueInput;
};
export type SavingsGoalContributionUpdateOneWithoutTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutTransactionInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.SavingsGoalContributionCreateOrConnectWithoutTransactionInput;
    upsert?: Prisma.SavingsGoalContributionUpsertWithoutTransactionInput;
    disconnect?: Prisma.SavingsGoalContributionWhereInput | boolean;
    delete?: Prisma.SavingsGoalContributionWhereInput | boolean;
    connect?: Prisma.SavingsGoalContributionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SavingsGoalContributionUpdateToOneWithWhereWithoutTransactionInput, Prisma.SavingsGoalContributionUpdateWithoutTransactionInput>, Prisma.SavingsGoalContributionUncheckedUpdateWithoutTransactionInput>;
};
export type SavingsGoalContributionUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutTransactionInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: Prisma.SavingsGoalContributionCreateOrConnectWithoutTransactionInput;
    upsert?: Prisma.SavingsGoalContributionUpsertWithoutTransactionInput;
    disconnect?: Prisma.SavingsGoalContributionWhereInput | boolean;
    delete?: Prisma.SavingsGoalContributionWhereInput | boolean;
    connect?: Prisma.SavingsGoalContributionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SavingsGoalContributionUpdateToOneWithWhereWithoutTransactionInput, Prisma.SavingsGoalContributionUpdateWithoutTransactionInput>, Prisma.SavingsGoalContributionUncheckedUpdateWithoutTransactionInput>;
};
export type SavingsGoalContributionCreateWithoutGoalInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    createdAt?: Date | string;
    transaction: Prisma.TransactionCreateNestedOneWithoutSavingsGoalContributionInput;
};
export type SavingsGoalContributionUncheckedCreateWithoutGoalInput = {
    id?: string;
    transactionId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    createdAt?: Date | string;
};
export type SavingsGoalContributionCreateOrConnectWithoutGoalInput = {
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutGoalInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput>;
};
export type SavingsGoalContributionCreateManyGoalInputEnvelope = {
    data: Prisma.SavingsGoalContributionCreateManyGoalInput | Prisma.SavingsGoalContributionCreateManyGoalInput[];
    skipDuplicates?: boolean;
};
export type SavingsGoalContributionUpsertWithWhereUniqueWithoutGoalInput = {
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavingsGoalContributionUpdateWithoutGoalInput, Prisma.SavingsGoalContributionUncheckedUpdateWithoutGoalInput>;
    create: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutGoalInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutGoalInput>;
};
export type SavingsGoalContributionUpdateWithWhereUniqueWithoutGoalInput = {
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavingsGoalContributionUpdateWithoutGoalInput, Prisma.SavingsGoalContributionUncheckedUpdateWithoutGoalInput>;
};
export type SavingsGoalContributionUpdateManyWithWhereWithoutGoalInput = {
    where: Prisma.SavingsGoalContributionScalarWhereInput;
    data: Prisma.XOR<Prisma.SavingsGoalContributionUpdateManyMutationInput, Prisma.SavingsGoalContributionUncheckedUpdateManyWithoutGoalInput>;
};
export type SavingsGoalContributionScalarWhereInput = {
    AND?: Prisma.SavingsGoalContributionScalarWhereInput | Prisma.SavingsGoalContributionScalarWhereInput[];
    OR?: Prisma.SavingsGoalContributionScalarWhereInput[];
    NOT?: Prisma.SavingsGoalContributionScalarWhereInput | Prisma.SavingsGoalContributionScalarWhereInput[];
    id?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    goalId?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    transactionId?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    amount?: Prisma.DecimalFilter<"SavingsGoalContribution"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"SavingsGoalContribution"> | string;
    createdAt?: Prisma.DateTimeFilter<"SavingsGoalContribution"> | Date | string;
};
export type SavingsGoalContributionCreateWithoutTransactionInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    createdAt?: Date | string;
    goal: Prisma.SavingsGoalCreateNestedOneWithoutContributionsInput;
};
export type SavingsGoalContributionUncheckedCreateWithoutTransactionInput = {
    id?: string;
    goalId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    createdAt?: Date | string;
};
export type SavingsGoalContributionCreateOrConnectWithoutTransactionInput = {
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutTransactionInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutTransactionInput>;
};
export type SavingsGoalContributionUpsertWithoutTransactionInput = {
    update: Prisma.XOR<Prisma.SavingsGoalContributionUpdateWithoutTransactionInput, Prisma.SavingsGoalContributionUncheckedUpdateWithoutTransactionInput>;
    create: Prisma.XOR<Prisma.SavingsGoalContributionCreateWithoutTransactionInput, Prisma.SavingsGoalContributionUncheckedCreateWithoutTransactionInput>;
    where?: Prisma.SavingsGoalContributionWhereInput;
};
export type SavingsGoalContributionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: Prisma.SavingsGoalContributionWhereInput;
    data: Prisma.XOR<Prisma.SavingsGoalContributionUpdateWithoutTransactionInput, Prisma.SavingsGoalContributionUncheckedUpdateWithoutTransactionInput>;
};
export type SavingsGoalContributionUpdateWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: Prisma.SavingsGoalUpdateOneRequiredWithoutContributionsNestedInput;
};
export type SavingsGoalContributionUncheckedUpdateWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goalId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalContributionCreateManyGoalInput = {
    id?: string;
    transactionId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    createdAt?: Date | string;
};
export type SavingsGoalContributionUpdateWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction?: Prisma.TransactionUpdateOneRequiredWithoutSavingsGoalContributionNestedInput;
};
export type SavingsGoalContributionUncheckedUpdateWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalContributionUncheckedUpdateManyWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalContributionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    transactionId?: boolean;
    amount?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsGoalContribution"]>;
export type SavingsGoalContributionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    transactionId?: boolean;
    amount?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsGoalContribution"]>;
export type SavingsGoalContributionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    transactionId?: boolean;
    amount?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsGoalContribution"]>;
export type SavingsGoalContributionSelectScalar = {
    id?: boolean;
    goalId?: boolean;
    transactionId?: boolean;
    amount?: boolean;
    currency?: boolean;
    createdAt?: boolean;
};
export type SavingsGoalContributionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "goalId" | "transactionId" | "amount" | "currency" | "createdAt", ExtArgs["result"]["savingsGoalContribution"]>;
export type SavingsGoalContributionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type SavingsGoalContributionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type SavingsGoalContributionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type $SavingsGoalContributionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SavingsGoalContribution";
    objects: {
        goal: Prisma.$SavingsGoalPayload<ExtArgs>;
        transaction: Prisma.$TransactionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        goalId: string;
        transactionId: string;
        amount: runtime.Decimal;
        currency: string;
        createdAt: Date;
    }, ExtArgs["result"]["savingsGoalContribution"]>;
    composites: {};
};
export type SavingsGoalContributionGetPayload<S extends boolean | null | undefined | SavingsGoalContributionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload, S>;
export type SavingsGoalContributionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SavingsGoalContributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavingsGoalContributionCountAggregateInputType | true;
};
export interface SavingsGoalContributionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SavingsGoalContribution'];
        meta: {
            name: 'SavingsGoalContribution';
        };
    };
    /**
     * Find zero or one SavingsGoalContribution that matches the filter.
     * @param {SavingsGoalContributionFindUniqueArgs} args - Arguments to find a SavingsGoalContribution
     * @example
     * // Get one SavingsGoalContribution
     * const savingsGoalContribution = await prisma.savingsGoalContribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingsGoalContributionFindUniqueArgs>(args: Prisma.SelectSubset<T, SavingsGoalContributionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalContributionClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SavingsGoalContribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavingsGoalContributionFindUniqueOrThrowArgs} args - Arguments to find a SavingsGoalContribution
     * @example
     * // Get one SavingsGoalContribution
     * const savingsGoalContribution = await prisma.savingsGoalContribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingsGoalContributionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SavingsGoalContributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalContributionClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SavingsGoalContribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalContributionFindFirstArgs} args - Arguments to find a SavingsGoalContribution
     * @example
     * // Get one SavingsGoalContribution
     * const savingsGoalContribution = await prisma.savingsGoalContribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingsGoalContributionFindFirstArgs>(args?: Prisma.SelectSubset<T, SavingsGoalContributionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalContributionClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SavingsGoalContribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalContributionFindFirstOrThrowArgs} args - Arguments to find a SavingsGoalContribution
     * @example
     * // Get one SavingsGoalContribution
     * const savingsGoalContribution = await prisma.savingsGoalContribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingsGoalContributionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SavingsGoalContributionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalContributionClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SavingsGoalContributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalContributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavingsGoalContributions
     * const savingsGoalContributions = await prisma.savingsGoalContribution.findMany()
     *
     * // Get first 10 SavingsGoalContributions
     * const savingsGoalContributions = await prisma.savingsGoalContribution.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const savingsGoalContributionWithIdOnly = await prisma.savingsGoalContribution.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SavingsGoalContributionFindManyArgs>(args?: Prisma.SelectSubset<T, SavingsGoalContributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SavingsGoalContribution.
     * @param {SavingsGoalContributionCreateArgs} args - Arguments to create a SavingsGoalContribution.
     * @example
     * // Create one SavingsGoalContribution
     * const SavingsGoalContribution = await prisma.savingsGoalContribution.create({
     *   data: {
     *     // ... data to create a SavingsGoalContribution
     *   }
     * })
     *
     */
    create<T extends SavingsGoalContributionCreateArgs>(args: Prisma.SelectSubset<T, SavingsGoalContributionCreateArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalContributionClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SavingsGoalContributions.
     * @param {SavingsGoalContributionCreateManyArgs} args - Arguments to create many SavingsGoalContributions.
     * @example
     * // Create many SavingsGoalContributions
     * const savingsGoalContribution = await prisma.savingsGoalContribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SavingsGoalContributionCreateManyArgs>(args?: Prisma.SelectSubset<T, SavingsGoalContributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SavingsGoalContributions and returns the data saved in the database.
     * @param {SavingsGoalContributionCreateManyAndReturnArgs} args - Arguments to create many SavingsGoalContributions.
     * @example
     * // Create many SavingsGoalContributions
     * const savingsGoalContribution = await prisma.savingsGoalContribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SavingsGoalContributions and only return the `id`
     * const savingsGoalContributionWithIdOnly = await prisma.savingsGoalContribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SavingsGoalContributionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SavingsGoalContributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SavingsGoalContribution.
     * @param {SavingsGoalContributionDeleteArgs} args - Arguments to delete one SavingsGoalContribution.
     * @example
     * // Delete one SavingsGoalContribution
     * const SavingsGoalContribution = await prisma.savingsGoalContribution.delete({
     *   where: {
     *     // ... filter to delete one SavingsGoalContribution
     *   }
     * })
     *
     */
    delete<T extends SavingsGoalContributionDeleteArgs>(args: Prisma.SelectSubset<T, SavingsGoalContributionDeleteArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalContributionClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SavingsGoalContribution.
     * @param {SavingsGoalContributionUpdateArgs} args - Arguments to update one SavingsGoalContribution.
     * @example
     * // Update one SavingsGoalContribution
     * const savingsGoalContribution = await prisma.savingsGoalContribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SavingsGoalContributionUpdateArgs>(args: Prisma.SelectSubset<T, SavingsGoalContributionUpdateArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalContributionClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SavingsGoalContributions.
     * @param {SavingsGoalContributionDeleteManyArgs} args - Arguments to filter SavingsGoalContributions to delete.
     * @example
     * // Delete a few SavingsGoalContributions
     * const { count } = await prisma.savingsGoalContribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SavingsGoalContributionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SavingsGoalContributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SavingsGoalContributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalContributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavingsGoalContributions
     * const savingsGoalContribution = await prisma.savingsGoalContribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SavingsGoalContributionUpdateManyArgs>(args: Prisma.SelectSubset<T, SavingsGoalContributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SavingsGoalContributions and returns the data updated in the database.
     * @param {SavingsGoalContributionUpdateManyAndReturnArgs} args - Arguments to update many SavingsGoalContributions.
     * @example
     * // Update many SavingsGoalContributions
     * const savingsGoalContribution = await prisma.savingsGoalContribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SavingsGoalContributions and only return the `id`
     * const savingsGoalContributionWithIdOnly = await prisma.savingsGoalContribution.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavingsGoalContributionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SavingsGoalContributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SavingsGoalContribution.
     * @param {SavingsGoalContributionUpsertArgs} args - Arguments to update or create a SavingsGoalContribution.
     * @example
     * // Update or create a SavingsGoalContribution
     * const savingsGoalContribution = await prisma.savingsGoalContribution.upsert({
     *   create: {
     *     // ... data to create a SavingsGoalContribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavingsGoalContribution we want to update
     *   }
     * })
     */
    upsert<T extends SavingsGoalContributionUpsertArgs>(args: Prisma.SelectSubset<T, SavingsGoalContributionUpsertArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalContributionClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalContributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SavingsGoalContributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalContributionCountArgs} args - Arguments to filter SavingsGoalContributions to count.
     * @example
     * // Count the number of SavingsGoalContributions
     * const count = await prisma.savingsGoalContribution.count({
     *   where: {
     *     // ... the filter for the SavingsGoalContributions we want to count
     *   }
     * })
    **/
    count<T extends SavingsGoalContributionCountArgs>(args?: Prisma.Subset<T, SavingsGoalContributionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavingsGoalContributionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SavingsGoalContribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalContributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavingsGoalContributionAggregateArgs>(args: Prisma.Subset<T, SavingsGoalContributionAggregateArgs>): Prisma.PrismaPromise<GetSavingsGoalContributionAggregateType<T>>;
    /**
     * Group by SavingsGoalContribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalContributionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SavingsGoalContributionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SavingsGoalContributionGroupByArgs['orderBy'];
    } : {
        orderBy?: SavingsGoalContributionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SavingsGoalContributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsGoalContributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SavingsGoalContribution model
     */
    readonly fields: SavingsGoalContributionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SavingsGoalContribution.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SavingsGoalContributionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    goal<T extends Prisma.SavingsGoalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavingsGoalDefaultArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaction<T extends Prisma.TransactionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransactionDefaultArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SavingsGoalContribution model
 */
export interface SavingsGoalContributionFieldRefs {
    readonly id: Prisma.FieldRef<"SavingsGoalContribution", 'String'>;
    readonly goalId: Prisma.FieldRef<"SavingsGoalContribution", 'String'>;
    readonly transactionId: Prisma.FieldRef<"SavingsGoalContribution", 'String'>;
    readonly amount: Prisma.FieldRef<"SavingsGoalContribution", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"SavingsGoalContribution", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SavingsGoalContribution", 'DateTime'>;
}
/**
 * SavingsGoalContribution findUnique
 */
export type SavingsGoalContributionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * Filter, which SavingsGoalContribution to fetch.
     */
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
};
/**
 * SavingsGoalContribution findUniqueOrThrow
 */
export type SavingsGoalContributionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * Filter, which SavingsGoalContribution to fetch.
     */
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
};
/**
 * SavingsGoalContribution findFirst
 */
export type SavingsGoalContributionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * Filter, which SavingsGoalContribution to fetch.
     */
    where?: Prisma.SavingsGoalContributionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavingsGoalContributions to fetch.
     */
    orderBy?: Prisma.SavingsGoalContributionOrderByWithRelationInput | Prisma.SavingsGoalContributionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SavingsGoalContributions.
     */
    cursor?: Prisma.SavingsGoalContributionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavingsGoalContributions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavingsGoalContributions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavingsGoalContributions.
     */
    distinct?: Prisma.SavingsGoalContributionScalarFieldEnum | Prisma.SavingsGoalContributionScalarFieldEnum[];
};
/**
 * SavingsGoalContribution findFirstOrThrow
 */
export type SavingsGoalContributionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * Filter, which SavingsGoalContribution to fetch.
     */
    where?: Prisma.SavingsGoalContributionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavingsGoalContributions to fetch.
     */
    orderBy?: Prisma.SavingsGoalContributionOrderByWithRelationInput | Prisma.SavingsGoalContributionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SavingsGoalContributions.
     */
    cursor?: Prisma.SavingsGoalContributionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavingsGoalContributions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavingsGoalContributions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavingsGoalContributions.
     */
    distinct?: Prisma.SavingsGoalContributionScalarFieldEnum | Prisma.SavingsGoalContributionScalarFieldEnum[];
};
/**
 * SavingsGoalContribution findMany
 */
export type SavingsGoalContributionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * Filter, which SavingsGoalContributions to fetch.
     */
    where?: Prisma.SavingsGoalContributionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavingsGoalContributions to fetch.
     */
    orderBy?: Prisma.SavingsGoalContributionOrderByWithRelationInput | Prisma.SavingsGoalContributionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SavingsGoalContributions.
     */
    cursor?: Prisma.SavingsGoalContributionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavingsGoalContributions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavingsGoalContributions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavingsGoalContributions.
     */
    distinct?: Prisma.SavingsGoalContributionScalarFieldEnum | Prisma.SavingsGoalContributionScalarFieldEnum[];
};
/**
 * SavingsGoalContribution create
 */
export type SavingsGoalContributionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * The data needed to create a SavingsGoalContribution.
     */
    data: Prisma.XOR<Prisma.SavingsGoalContributionCreateInput, Prisma.SavingsGoalContributionUncheckedCreateInput>;
};
/**
 * SavingsGoalContribution createMany
 */
export type SavingsGoalContributionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavingsGoalContributions.
     */
    data: Prisma.SavingsGoalContributionCreateManyInput | Prisma.SavingsGoalContributionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SavingsGoalContribution createManyAndReturn
 */
export type SavingsGoalContributionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * The data used to create many SavingsGoalContributions.
     */
    data: Prisma.SavingsGoalContributionCreateManyInput | Prisma.SavingsGoalContributionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SavingsGoalContribution update
 */
export type SavingsGoalContributionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * The data needed to update a SavingsGoalContribution.
     */
    data: Prisma.XOR<Prisma.SavingsGoalContributionUpdateInput, Prisma.SavingsGoalContributionUncheckedUpdateInput>;
    /**
     * Choose, which SavingsGoalContribution to update.
     */
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
};
/**
 * SavingsGoalContribution updateMany
 */
export type SavingsGoalContributionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SavingsGoalContributions.
     */
    data: Prisma.XOR<Prisma.SavingsGoalContributionUpdateManyMutationInput, Prisma.SavingsGoalContributionUncheckedUpdateManyInput>;
    /**
     * Filter which SavingsGoalContributions to update
     */
    where?: Prisma.SavingsGoalContributionWhereInput;
    /**
     * Limit how many SavingsGoalContributions to update.
     */
    limit?: number;
};
/**
 * SavingsGoalContribution updateManyAndReturn
 */
export type SavingsGoalContributionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * The data used to update SavingsGoalContributions.
     */
    data: Prisma.XOR<Prisma.SavingsGoalContributionUpdateManyMutationInput, Prisma.SavingsGoalContributionUncheckedUpdateManyInput>;
    /**
     * Filter which SavingsGoalContributions to update
     */
    where?: Prisma.SavingsGoalContributionWhereInput;
    /**
     * Limit how many SavingsGoalContributions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SavingsGoalContribution upsert
 */
export type SavingsGoalContributionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * The filter to search for the SavingsGoalContribution to update in case it exists.
     */
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
    /**
     * In case the SavingsGoalContribution found by the `where` argument doesn't exist, create a new SavingsGoalContribution with this data.
     */
    create: Prisma.XOR<Prisma.SavingsGoalContributionCreateInput, Prisma.SavingsGoalContributionUncheckedCreateInput>;
    /**
     * In case the SavingsGoalContribution was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SavingsGoalContributionUpdateInput, Prisma.SavingsGoalContributionUncheckedUpdateInput>;
};
/**
 * SavingsGoalContribution delete
 */
export type SavingsGoalContributionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
    /**
     * Filter which SavingsGoalContribution to delete.
     */
    where: Prisma.SavingsGoalContributionWhereUniqueInput;
};
/**
 * SavingsGoalContribution deleteMany
 */
export type SavingsGoalContributionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsGoalContributions to delete
     */
    where?: Prisma.SavingsGoalContributionWhereInput;
    /**
     * Limit how many SavingsGoalContributions to delete.
     */
    limit?: number;
};
/**
 * SavingsGoalContribution without action
 */
export type SavingsGoalContributionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoalContribution
     */
    select?: Prisma.SavingsGoalContributionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavingsGoalContribution
     */
    omit?: Prisma.SavingsGoalContributionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavingsGoalContributionInclude<ExtArgs> | null;
};
