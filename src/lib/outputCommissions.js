/* eslint-disable no-console */

const computeCashInCommission = require('./computeCashInCommission');
const computeCashOutCommission = require('./computeCashOutCommission');
const getMondayOfWeek = require('./getMondayOfWeek');

module.exports = (input) => {
  const userTransactions = {};

  input.forEach((data) => {
    const {
      date, user_type: userType, type, operation, user_id: userId,
    } = data;
    let commission;

    if (type === 'cash_in') {
      commission = computeCashInCommission(operation.amount);
    } else if (type === 'cash_out') {
      const mondayOfWeek = getMondayOfWeek(date).toISOString();
      userTransactions[userId] = userTransactions[userId] || {};
      userTransactions[userId][mondayOfWeek] = userTransactions[userId][mondayOfWeek] || 0;
      const weekTransaction = userTransactions[userId][mondayOfWeek];
      commission = computeCashOutCommission(operation.amount, userType, weekTransaction);
      userTransactions[userId][mondayOfWeek] += operation.amount;
    } else {
      const error = new Error(`Invalid transaction Type "${type}"`);
      error.name = ('INVALID_TRANSACTION_TYPE');
      throw error;
    }

    console.log(commission);
  });
};
