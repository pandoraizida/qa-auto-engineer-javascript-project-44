import playGame from '../index.js';
import rundomNumber from '../helper.js';

const step = 5;
const rowLength = 10;

const getNumberLine = () => {
  let number = rundomNumber(0, 100);
  const mass = [];
  for (let i = 0; i < rowLength; i += 1) {
    mass.push(number);
    number += step;
  }
  mass[(rundomNumber(0, rowLength - 1))] = '..';
  const result = mass.join(' ');
  return result;
};

const getMissedNumber = (expr) => {
  const mass = expr.split(' ');
  const ind = mass.indexOf('..');
  let result = 0;
  if (ind === rowLength - 1) {
    result = Number(mass[rowLength - 2]) + step;
  } else {
    result = Number(mass[ind + 1]) - step;
  }
  return result;
};

const gameCondition = () => {
  const gameConditionText = 'What number is missing in the progression?';
  return gameConditionText;
};

const progressionGame = () => {
  const dataForQuestion = getNumberLine();
  const correctAnswerData = getMissedNumber(dataForQuestion).toString();
  return [dataForQuestion, correctAnswerData];
};

const runBrainProgression = () => {
  playGame(gameCondition, progressionGame);
};

export default runBrainProgression;
