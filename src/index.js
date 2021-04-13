import readlineSync from 'readline-sync';

const randomNumber = (min, max) => {
  const rand = (min + Math.random() * max);
  return Math.floor(rand);
};

const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

const answer = (question) => readlineSync.question(`Question: ${question}
Your answer: `);

export { randomNumber, name, answer };
