import { randomNumber, name, answer } from '../src/index.js';

const operators = ['+', '-', '*'];
const expectedAnswer = (question) => String(eval(question));

const game = () => {
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const currentFirstNumber = randomNumber(0, 21);
    const currentSecondNumber = randomNumber(0, 21);
    const currentOperator = operators[randomNumber(0, 3)];
    const currentQuestion = (`${currentFirstNumber} ${currentOperator} ${currentSecondNumber}`);
    const userAnswer = (answer(currentQuestion));

    if (userAnswer === expectedAnswer(currentQuestion)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer(currentQuestion)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
