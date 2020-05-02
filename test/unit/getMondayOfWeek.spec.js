const { expect } = require('chai');
const getMondayOfWeek = require('src/lib/getMondayOfWeek');

describe('Lib :: getMondayOfWeek', () => {
  context('when date string is valid', () => {
    it('returns date object of monday of the given date', (done) => {
      const result = getMondayOfWeek('2020-05-01');
      expect(result instanceof Date).to.equal(true);
      expect(result.getDay()).to.equal(1);
      done();
    });
  });
});
