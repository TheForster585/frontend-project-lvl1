import { randomNumber, name, answer } from '../src/index.js';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const expectedAnswer = (currentQuestion) => {
  if (isPrime(currentQuestion)) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const currentNumber = randomNumber(0, 102);
    const userAnswer = answer(currentNumber);

    if (userAnswer === expectedAnswer(currentNumber)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer(currentNumber)}'.`);
      console.log(`Let's try again, ${name}!`);
      i = -1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
