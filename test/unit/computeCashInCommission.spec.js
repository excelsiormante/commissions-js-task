const { expect } = require('chai');
const computeCashInCommission = require('src/lib/computeCashInCommission');

describe('Lib :: computeCashInCommission', () => {
  context('when computed commission is lower than 5', () => {
    it('returns the computed commission', (done) => {
      const result = computeCashInCommission(200.00);
      expect(Number(result)).to.equal(0.06);
      done();
    });
  });

  context('when computed commission is greather than 5', () => {
    it('returns returns 5.00 as the commission', (done) => {
      const result = computeCashInCommission(1000000.00);
      expect(Number(result)).to.equal(5.00);
      done();
    });
  });
});
