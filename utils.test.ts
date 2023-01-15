import { calculatePercentageDiff, determineOperator, normalizeString } from './utils';

it('should return a normalized string', () => {
  expect(normalizeString('Añéjo')).toBe('anejo');
});

it('should return a "-" if first number bigger than second (and viceversa)', () => {
  expect(determineOperator({ arg1: 50, arg2: 40 })).toBe('-');
});

it('should calculate the percentage diff between two numbers (without decimals)', () => {
  expect(calculatePercentageDiff({ arg1: 50, arg2: 40 })).toBe(22);
});
