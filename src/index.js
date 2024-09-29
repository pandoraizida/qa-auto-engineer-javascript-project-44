import readlineSync from 'readline-sync';
import rundomNum from './games/even.js';
import { getExpression, calculateCorrectAnswer } from './games/calc.js';
import { getNumbers, getGCD } from './games/gcd.js';

const getGameCondition = (gameType) => {
  switch (gameType) {
    case 1:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 2:
      console.log('What is the result of the expression?');
      break;
    default:
      console.log('Find the greatest common divisor of given numbers.');
  }
};

const getDataForQuestion = (gameType) => {
  let dataForQuestion;
  switch (gameType) {
    case 1:
      dataForQuestion = rundomNum(0, 100);
      break;
    case 2:
      dataForQuestion = getExpression();
      break;
    default:
      dataForQuestion = getNumbers();
  }
  return dataForQuestion;
};

const getCorrectAnswer = (gameType, expr) => {
  let correctAnswerData = '';
  switch (gameType) {
    case 1:
      correctAnswerData = ((expr % 2 === 0) ? 'yes' : 'no');
      break;
    case 2:
      correctAnswerData = (calculateCorrectAnswer(expr)).toString();
      break;
    default:
      correctAnswerData = (getGCD(expr)).toString();
  }
  return correctAnswerData;
};

const playGame = (gameType) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  getGameCondition(gameType);

  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const questionData = getDataForQuestion(gameType);
    console.log(`Question: ${questionData}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnser = getCorrectAnswer(gameType, questionData);

    if (correctAnser === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnser}'.\n Let's try again, ${name}!`);
    }
  }
};

export default playGame;
