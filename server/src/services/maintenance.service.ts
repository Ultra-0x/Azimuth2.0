import { deleteExpiredSessions } from "../modules/auth/session.service.js";
import {
  deleteExpiredTransactionAuthChallenges,
} from "../modules/auth/transaction-auth.service.js";

export async function runMaintenanceTasks() {
  const [sessions, transactionAuthChallenges] =
    await Promise.all([
      deleteExpiredSessions(),
      deleteExpiredTransactionAuthChallenges(),
    ]);

  return {
    deletedSessions: sessions.count,
    deletedTransactionAuthChallenges:
      transactionAuthChallenges.count,
  };
}