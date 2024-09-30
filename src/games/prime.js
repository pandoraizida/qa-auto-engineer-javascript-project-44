import playGame from '../index.js';
import rundomNumber from '../helper.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const getGameCondition = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  };

  const getDataForQuestion = () => {
    const dataForQuestion = rundomNumber(0, 100);
    return dataForQuestion;
  };

  const getCorrectAnswer = (expr) => {
    let correctAnswerData = '';
    correctAnswerData = (isPrime(Number(expr)) === true) ? 'yes' : 'no';
    return correctAnswerData;
  };
  return {
    getDataForQuestion,
    getCorrectAnswer,
    getGameCondition,
  };
};

const runBrainPrime = () => {
  playGame(primeGame());
};

export default runBrainPrime;
