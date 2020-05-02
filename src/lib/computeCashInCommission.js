/**
 *
 * @param {Number} amount
 * @return {Number}
 */
module.exports = (amount) => {
  let commission = ((amount / 100) * 0.03);
  commission = commission > 5 ? 5 : commission;
  return commission.toFixed(2);
};
