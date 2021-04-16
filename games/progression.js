import { randomNumber, name, answer } from '../src/index.js';

const progression = (step, count) => {
  const result = [];
  const firstNumber = randomNumber(0, 21);
  result.push(firstNumber);

  for (let i = 1; i < count; i += 1) {
    const nextNumber = result[i - 1] + step;
    result.push(nextNumber);
  }

  return result;
};

const game = () => {
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const currentStep = randomNumber(2, 10);
    const currentCount = randomNumber(5, 16);
    const currentProgression = progression(currentStep, currentCount);
    const missingNumberIdx = randomNumber(0, currentCount);
    const missingNumber = currentProgression[missingNumberIdx];
    currentProgression[missingNumberIdx] = '..';
    const currentQuestion = currentProgression.join(' ');

    const userAnswer = answer(currentQuestion);

    if (userAnswer === String(missingNumber)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      i = -1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
