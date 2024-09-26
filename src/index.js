import readlineSync from 'readline-sync';
import { rundomNum, correctAnswer } from './helper.js';

const gameIsEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const question = rundomNum(0, 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer(question) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'.\n Let's try again, ${name}!`);
    }
  }
};

export default gameIsEven;
