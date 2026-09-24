-- CreateTable
CREATE TABLE "SavingsGoalContribution" (
    "id" TEXT NOT NULL,
    "goalId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "amount" DECIMAL(19,4) NOT NULL,
    "currency" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavingsGoalContribution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavingsGoalContribution_transactionId_key" ON "SavingsGoalContribution"("transactionId");

-- CreateIndex
CREATE INDEX "SavingsGoalContribution_goalId_idx" ON "SavingsGoalContribution"("goalId");

-- CreateIndex
CREATE INDEX "SavingsGoalContribution_createdAt_idx" ON "SavingsGoalContribution"("createdAt");

-- AddForeignKey
ALTER TABLE "SavingsGoalContribution" ADD CONSTRAINT "SavingsGoalContribution_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "SavingsGoal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingsGoalContribution" ADD CONSTRAINT "SavingsGoalContribution_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
