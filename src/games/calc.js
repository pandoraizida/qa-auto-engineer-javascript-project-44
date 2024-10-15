import playGame from '../index.js';
import rundomNumber from '../helper.js';

const gameCondition = 'What is the result of the expression?';

const rundomOperator = () => {
  const operatorPool = ['+', '-', '*'];
  const rand = operatorPool[Math.floor(Math.random() * operatorPool.length)];
  return rand;
};

const getExpression = () => {
  const expression = (`${rundomNumber(0, 100)} ${rundomOperator()} ${rundomNumber(0, 100)}`);
  return expression;
};

const calculate = (operator, i, j) => {
  const actions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const operators = Object.keys(actions);
  if (operators.indexOf(operator) < 0) {
    return null;
  }
  return actions[operator](i, j);
};

const calculateCorrectAnswer = (expr) => {
  const mass = expr.split(' ');
  return calculate(mass[1], Number(mass[0]), Number(mass[2]));
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
