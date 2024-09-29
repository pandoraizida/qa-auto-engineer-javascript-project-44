import rundomNumber from './even.js';

export const getNumberLine = () => {
  let number = rundomNumber(0, 100);
  const step = 5;
  const len = 10;
  const mass = [];
  for (let i = 0; i < len; i += 1) {
    mass.push(number);
    number += step;
  }
  mass[(rundomNumber(0, 9))] = '..';
  const result = mass.join(' ');
  return result;
};

export const getMissedNumber = (expr) => {
  const mass = expr.split(' ');
  const step = 5;
  const result = mass[mass.indexOf('..') + 1] - step;
  return result;
};
