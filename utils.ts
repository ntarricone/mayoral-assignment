export const calculatePercentageDiff = ({ arg1, arg2 }: { arg1: number; arg2: number }): number =>
  +(100 * Math.abs((arg1 - arg2) / ((arg1 + arg2) / 2))).toFixed(0);

export const determineOperator = ({ arg1, arg2 }: { arg1: number; arg2: number }) =>
  arg1 > arg2 ? '-' : '+';

export const normalizeString = (string: string) => {
  let normalizedString = string.toLowerCase();
  normalizedString = normalizedString.normalize('NFD').replace(/\p{Diacritic}/gu, '');

  return normalizedString;
};
