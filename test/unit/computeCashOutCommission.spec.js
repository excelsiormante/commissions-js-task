const { expect } = require('chai');
const computeCashOutCommission = require('src/lib/computeCashOutCommission');

describe('Lib :: computeCashOutCommission', () => {
  context('when userType is natural', () => {
    context('when cash out amount has not exceeded 1000.00', () => {
      it('returns 0.00 commission', (done) => {
        const result = computeCashOutCommission(1000.00, 'natural', 0);
        expect(Number(result)).to.equal(0.00);
        done();
      });
    });
    context('when cash out amount has exceeded 1000.00', () => {
      it('returns computed commission based on exceeded amount', (done) => {
        const result = computeCashOutCommission(100.00, 'natural', 31100.00);
        expect(Number(result)).to.equal(0.30);
        done();
      });
    });
  });

  context('when userType is juridical', () => {
    context('when commission fee is less than 0.50', () => {
      it('returns 0.50 as the commission', (done) => {
        const result = computeCashOutCommission(50.00, 'juridical', 0);
        expect(Number(result)).to.equal(0.50);
        done();
      });
    });
    context('when commission fee is greather than 0.50', () => {
      it('returns the computed commission', (done) => {
        const result = computeCashOutCommission(300.00, 'juridical', 0);
        expect(Number(result)).to.equal(0.90);
        done();
      });
    });
  });
});
