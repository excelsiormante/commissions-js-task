/**
 *
 * @param {String} transactionDate
 * @return {Date}
 */
module.exports = (transactionDate) => {
  const date = new Date(transactionDate);
  const monday = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  return new Date(date.setDate(monday));
};
