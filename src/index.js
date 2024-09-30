import readlineSync from 'readline-sync';

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  game.getGameCondition();

  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const questionData = game.getDataForQuestion();
    console.log(`Question: ${questionData}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnser = game.getCorrectAnswer(questionData);

    if (correctAnser === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnser}'.\n Let's try again, ${name}!`);
    }
  }
};

export default playGame;
