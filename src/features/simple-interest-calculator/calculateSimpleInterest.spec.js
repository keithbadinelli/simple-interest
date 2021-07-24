import calculateSimpleInterest from './calculateSimpleInterest';

describe('interest calculators', () => {
  describe('simple', () => {
    const testCases = [
      [5625, 0.025, 5, 5000],
      [12500, 0.025, 10, 10000],
      [2000, 0.1, 0, 2000],
    ];
    test.each(testCases)(
      'total should be %s with a %s rate over %s years with a principal of %s',
      (expected, rate, years, principal) => {
        expect(calculateSimpleInterest(principal, rate, years)).toBe(expected);
      }
    );
  });
});
