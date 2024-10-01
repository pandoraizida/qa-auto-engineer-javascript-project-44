import playGame from '../index.js';

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runBrainPrime = () => {
  playGame('primeGame');
};

export default runBrainPrime;
