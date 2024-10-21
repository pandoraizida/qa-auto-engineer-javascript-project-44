import playGame from '../index.js';
import rundomNumber from '../helper.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (expr) => expr % 2 === 0;

const evenGame = () => {
  const dataForQuestion = (rundomNumber(0, 100)).toString();
  const correctAnswerData = isEven(dataForQuestion) ? 'yes' : 'no';
  return [dataForQuestion, correctAnswerData];
};

const runBrainEven = () => {
  playGame(gameCondition, evenGame);
};

export default runBrainEven;
