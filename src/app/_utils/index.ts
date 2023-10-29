import wordsJson from '../_lib/words.json';

const generateRandomNumber = (maxSize: number) => {
  return Math.floor(Math.random() * maxSize + 1);
};

const findWord = (wordId: number) =>
  (wordsJson.find((word) => word.id === wordId) ?? wordsJson[0]).word;

export { generateRandomNumber, findWord };
