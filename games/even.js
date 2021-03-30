import readlineSync from 'readline-sync';

const randomNumber = () => {
  const rand = (0 + Math.random() * 21);
  return Math.floor(rand);
};

const isEven = (number) => (number % 2 === 0);
const expectedAnswer = (correctAnswer) => {
  // eslint-disable-next-line default-case
  switch (correctAnswer) {
    case true:
      return 'yes';
    case false:
      return 'no';
  }
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
    switch (userAnswer) {
      case 'yes':
        if (isEven(currentNumber)) {
          console.log('Correct!');
        } else {
          console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
          console.log(`Let's try again, ${name}!`);
          i = -1;
        }
        break;

      case 'no':
        if (!isEven(currentNumber)) {
          console.log('Correct!');
        } else {
          console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
          console.log(`Let's try again, ${name}!`);
          i = -1;
        }
        break;

      default:
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer(isEven(currentNumber))}'.`);
        console.log(`Let's try again, ${name}!`);
        i = -1;
        break;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
