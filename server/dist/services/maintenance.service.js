"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMaintenanceTasks = runMaintenanceTasks;
const session_service_js_1 = require("../modules/auth/session.service.js");
const transaction_auth_service_js_1 = require("../modules/auth/transaction-auth.service.js");
async function runMaintenanceTasks() {
    const [sessions, transactionAuthChallenges] = await Promise.all([
        (0, session_service_js_1.deleteExpiredSessions)(),
        (0, transaction_auth_service_js_1.deleteExpiredTransactionAuthChallenges)(),
    ]);
    return {
        deletedSessions: sessions.count,
        deletedTransactionAuthChallenges: transactionAuthChallenges.count,
    };
}
//# sourceMappingURL=maintenance.service.js.map