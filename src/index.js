import readlineSync from 'readline-sync';
import { getGameCondition, getDataForQuestion, getCorrectAnswer } from './helper.js';

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  getGameCondition(game);

  const countRound = 3;
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < countRound; i += 1) {
    const questionData = getDataForQuestion(game);
    console.log(`Question: ${questionData}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnser = getCorrectAnswer(game, questionData);

    if (correctAnser === userAnswer) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnser}'.\n Let's try again, ${name}!`);
    }
  }
  if (countOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
