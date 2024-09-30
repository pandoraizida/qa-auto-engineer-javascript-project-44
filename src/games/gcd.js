import playGame from '../index.js';
import rundomNumber from '../helper.js';

export const getNumbers = () => {
  const numbersForQuestion = (`${rundomNumber(0, 100)} ${rundomNumber(0, 100)}`);
  return numbersForQuestion;
};

export const getGCD = (expr) => {
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
  const getGameCondition = () => {
    console.log('Find the greatest common divisor of given numbers.');
  };

  const getDataForQuestion = () => {
    const dataForQuestion = getNumbers();
    return dataForQuestion;
  };

  const getCorrectAnswer = (expr) => {
    let correctAnswerData = '';
    correctAnswerData = getGCD(expr).toString();
    return correctAnswerData;
  };
  return {
    getDataForQuestion,
    getCorrectAnswer,
    getGameCondition,
  };
};

const runBrainGcd = () => {
  playGame(gcdGame());
};

export default runBrainGcd;
