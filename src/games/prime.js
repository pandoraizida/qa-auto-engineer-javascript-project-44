import playGame from '../index.js';
import rundomNumber from '../helper.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const primeGame = () => {
  const dataForQuestion = rundomNumber(0, 100);
  const correctAnswerData = (isPrime(Number(dataForQuestion)) === true) ? 'yes' : 'no';
  return [dataForQuestion, correctAnswerData];
};

const runBrainPrime = () => {
  playGame(gameCondition, primeGame);
};

export default runBrainPrime;
