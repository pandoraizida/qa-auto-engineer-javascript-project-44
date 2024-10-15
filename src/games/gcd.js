import playGame from '../index.js';
import rundomNumber from '../helper.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const getNumbers = () => {
  const numbersForQuestion = (`${rundomNumber(0, 100)} ${rundomNumber(0, 100)}`);
  return numbersForQuestion;
};

const getGCD = (expr) => {
  const mass = expr.split(' ');
  let a = Number(mass[0]);
  let b = Number(mass[1]);
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const gcd = a + b;
  return gcd;
};

const gcdGame = () => {
  const dataForQuestion = getNumbers();
  const correctAnswerData = getGCD(dataForQuestion).toString();
  return [dataForQuestion, correctAnswerData];
};

const runBrainGcd = () => {
  playGame(gameCondition, gcdGame);
};

export default runBrainGcd;
