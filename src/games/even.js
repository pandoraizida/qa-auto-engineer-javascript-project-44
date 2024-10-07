import playGame from '../index.js';
import rundomNumber from '../helper.js';

const gameCondition = () => {
  const gameConditionText = 'Answer "yes" if the number is even, otherwise answer "no".';
  return gameConditionText;
};

const evenGame = () => {
  const dataForQuestion = (rundomNumber(0, 100)).toString();
  const correctAnswerData = ((dataForQuestion % 2 === 0) ? 'yes' : 'no');
  return [dataForQuestion, correctAnswerData];
};

const runBrainEven = () => {
  playGame(gameCondition, evenGame);
};

export default runBrainEven;
