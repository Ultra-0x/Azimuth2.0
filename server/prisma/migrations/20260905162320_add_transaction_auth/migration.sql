-- CreateEnum
CREATE TYPE "TransactionAuthMethod" AS ENUM ('PASSWORD', 'PIN', 'OTP');

-- CreateTable
CREATE TABLE "TransactionAuthChallenge" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "method" "TransactionAuthMethod" NOT NULL,
    "challengeHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "consumedAt" TIMESTAMP(3),
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "maxAttempts" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransactionAuthChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TransactionAuthChallenge_challengeHash_key" ON "TransactionAuthChallenge"("challengeHash");

-- CreateIndex
CREATE INDEX "TransactionAuthChallenge_userId_idx" ON "TransactionAuthChallenge"("userId");

-- CreateIndex
CREATE INDEX "TransactionAuthChallenge_expiresAt_idx" ON "TransactionAuthChallenge"("expiresAt");

-- CreateIndex
CREATE INDEX "TransactionAuthChallenge_consumedAt_idx" ON "TransactionAuthChallenge"("consumedAt");

-- AddForeignKey
ALTER TABLE "TransactionAuthChallenge" ADD CONSTRAINT "TransactionAuthChallenge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
