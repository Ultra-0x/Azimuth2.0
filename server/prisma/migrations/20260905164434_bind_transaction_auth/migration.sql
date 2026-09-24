-- AlterTable
ALTER TABLE "TransactionAuthChallenge" ADD COLUMN     "transferId" TEXT;

-- CreateIndex
CREATE INDEX "TransactionAuthChallenge_transferId_idx" ON "TransactionAuthChallenge"("transferId");

-- AddForeignKey
ALTER TABLE "TransactionAuthChallenge" ADD CONSTRAINT "TransactionAuthChallenge_transferId_fkey" FOREIGN KEY ("transferId") REFERENCES "Transfer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
