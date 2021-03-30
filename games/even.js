import readlineSync from 'readline-sync';

const randomNumber = () => {
  const rand = (0 + Math.random() * 21);
  return Math.floor(rand);
};

const isEven = (number) => (number % 2 === 0);
const expectedAnswer = (correctAnswer) => {
  if (correctAnswer) {
    return 'yes';
  }
  return 'no';
};

const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

const game = () => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const currentNumber = randomNumber();
    const userAnswer = readlineSync.question(`Question: ${currentNumber}
Your answer: `);
    if (userAnswer === expectedAnswer(isEven(currentNumber))) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer(isEven(currentNumber))}'.`);
      console.log(`Let's try again, ${name}!`);
      i = -1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
