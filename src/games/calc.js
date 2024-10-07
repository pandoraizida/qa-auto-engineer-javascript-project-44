import playGame from '../index.js';
import rundomNumber from '../helper.js';

const rundomOperator = () => {
  const operatorPool = ['+', '-', '*'];
  const rand = operatorPool[Math.floor(Math.random() * operatorPool.length)];
  return rand;
};

const getExpression = () => {
  const expression = (`${rundomNumber(0, 100)} ${rundomOperator()} ${rundomNumber(0, 100)}`);
  return expression;
};

const calculateCorrectAnswer = (expr) => {
  const actions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const operators = Object.keys(actions);
  let result = 0;
  let mass = [];
  for (let i = 0; i < operators.length; i += 1) {
    mass = expr.split(operators[i]);
    if (mass.length > 1) {
      result = actions[operators[i]](Number(mass[0]), Number(mass[1]));
      break;
    }
  }
  return result;
};

const gameCondition = () => {
  const gameConditionText = 'What is the result of the expression?';
  return gameConditionText;
};

const calcGame = () => {
  const dataForQuestion = getExpression();
  const correctAnswerData = calculateCorrectAnswer(dataForQuestion).toString();
  return [dataForQuestion, correctAnswerData];
};

const runBrainCalc = () => {
  playGame(gameCondition, calcGame);
};

export default runBrainCalc;
