/**
 *
 * @param {Number} amount
 * @param {String} userType
 * @param {Number} weekTransaction
 * @return {Number}
 */
module.exports = (amount, userType, weekTransaction) => {
  let commission;
  if (userType === 'natural') {
    if (weekTransaction > 1000) {
      commission = (amount / 100) * 0.3;
    } else if ((weekTransaction + amount) > 1000) {
      commission = (((weekTransaction + amount) - 1000) / 100) * 0.3;
    } else {
      commission = 0.00;
    }

    return commission.toFixed(2);
  } if (userType === 'juridical') {
    commission = ((amount / 100) * 0.3);
    commission = commission < 0.50 ? 0.50 : commission;

    return commission.toFixed(2);
  }
  const error = new Error(`Invalid User Type "${userType}"`);
  error.name = ('INVALID_USER_TYPE');
  throw error;
};
