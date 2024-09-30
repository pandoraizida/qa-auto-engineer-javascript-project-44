import playGame from '../index.js';
import rundomNumber from '../helper.js';

const evenGame = () => {
  const getGameCondition = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  };

  const getDataForQuestion = () => {
    const dataForQuestion = rundomNumber(0, 100);
    return dataForQuestion;
  };

  const getCorrectAnswer = (expr) => {
    const correctAnswerData = ((expr % 2 === 0) ? 'yes' : 'no');
    return correctAnswerData;
  };

  return {
    getDataForQuestion,
    getCorrectAnswer,
    getGameCondition,
  };
};

const runBrainEven = () => {
  playGame(evenGame());
};

export default runBrainEven;
