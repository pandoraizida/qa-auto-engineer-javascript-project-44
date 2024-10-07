import readlineSync from 'readline-sync';

const playGame = (condition, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const gameCondition = condition();
  console.log(gameCondition);

  const countRound = 3;
  for (let i = 1; i <= countRound; i += 1) {
    const gamedata = game();
    const questionData = gamedata[0];
    console.log(`Question: ${questionData}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnser = gamedata[1];

    if (correctAnser === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnser}'.\n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
