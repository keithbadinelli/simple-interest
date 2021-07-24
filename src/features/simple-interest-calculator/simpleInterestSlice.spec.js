import calculateSimpleInterest from './calculateSimpleInterest';
import simpleInterestReducer, { calculate } from './simpleInterestSlice';

describe('simple interest reducer', () => {
  it('should handle initial state', () => {
    expect(simpleInterestReducer(undefined, { type: 'fake' })).toEqual({
      total: 0,
    });
  });

  it('should handle calculate', () => {
    const actual = simpleInterestReducer(
      undefined,
      calculate({ principal: 5000, rate: 0.025, years: 5 })
    );
    expect(actual.total).toEqual(calculateSimpleInterest(5000, 0.025, 5));
  });
});
