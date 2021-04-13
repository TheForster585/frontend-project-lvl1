import { randomNumber, name, answer } from '../src/index.js';

const isEven = (number) => (number % 2 === 0);
const expectedAnswer = (currentQuestion) => {
  if (isEven(currentQuestion)) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const currentNumber = randomNumber(0, 21);
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
