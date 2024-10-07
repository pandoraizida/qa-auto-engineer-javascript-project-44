import playGame from '../index.js';
import rundomNumber from '../helper.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameCondition = () => {
  const gameConditionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return gameConditionText;
};

const primeGame = () => {
  const dataForQuestion = rundomNumber(0, 100);
  const correctAnswerData = (isPrime(Number(dataForQuestion)) === true) ? 'yes' : 'no';
  return [dataForQuestion, correctAnswerData];
};

const runBrainPrime = () => {
  playGame(gameCondition, primeGame);
};

export default runBrainPrime;
