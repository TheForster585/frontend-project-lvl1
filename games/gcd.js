import { randomNumber, name, answer } from '../src/index.js';

const expectedAnswer = (firstNumber, secondNumber) => {
  const max = Math.max(firstNumber, secondNumber);
  const min = Math.min(firstNumber, secondNumber);
  const gcd = max % min === 0 ? min : expectedAnswer(min, max % min);
  return String(gcd);
};

const game = () => {
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const currentFirstNumber = randomNumber(1, 101);
    const currentSecondNumber = randomNumber(1, 101);
    const currentQuestion = (`${currentFirstNumber} ${currentSecondNumber}`);
    const userAnswer = (answer(currentQuestion));

    if (userAnswer === expectedAnswer(currentFirstNumber, currentSecondNumber)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer(currentFirstNumber, currentSecondNumber)}'.`);
      console.log(`Let's try again, ${name}!`);
      i = -1;
    }
  }
};

export default game;
