import { getExpression, calculateCorrectAnswer } from './games/calc.js';
import { getNumbers, getGCD } from './games/gcd.js';
import { getNumberLine, getMissedNumber } from './games/progression.js';
import { isPrime } from './games/prime.js';

const rundomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);

const getGameCondition = (game) => {
  switch (game) {
    case 'evenGame':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calcGame':
      console.log('What is the result of the expression?');
      break;
    case 'gcdGame':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progressionGame':
      console.log('What number is missing in the progression?');
      break;
    case 'primeGame':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      console.log('Something was wrong. Restart the game.');
  }
};

const getDataForQuestion = (game) => {
  let dataForQuestion;
  switch (game) {
    case 'evenGame':
      dataForQuestion = (rundomNumber(0, 100)).toString();
      break;
    case 'calcGame':
      dataForQuestion = getExpression();
      break;
    case 'gcdGame':
      dataForQuestion = getNumbers();
      break;
    case 'progressionGame':
      dataForQuestion = getNumberLine();
      break;
    case 'primeGame':
      dataForQuestion = rundomNumber(0, 100);
      break;
    default:
      console.log('Something was wrong. Restart the game.');
  }
  return dataForQuestion;
};

const getCorrectAnswer = (game, expr) => {
  let correctAnswerData = '';
  switch (game) {
    case 'evenGame':
      correctAnswerData = ((expr % 2 === 0) ? 'yes' : 'no');
      break;
    case 'calcGame':
      correctAnswerData = calculateCorrectAnswer(expr).toString();
      break;
    case 'gcdGame':
      correctAnswerData = getGCD(expr).toString();
      break;
    case 'progressionGame':
      correctAnswerData = getMissedNumber(expr).toString();
      break;
    case 'primeGame':
      correctAnswerData = (isPrime(Number(expr)) === true) ? 'yes' : 'no';
      break;
    default:
      console.log('Something was wrong. Restart the game.');
  }
  return correctAnswerData;
};

export {
  rundomNumber, getGameCondition, getDataForQuestion, getCorrectAnswer,
};
