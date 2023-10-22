import wordsJson from '../_lib/words.json';

const generateRandomNumber = (maxSize: number) => {
  return Math.floor(Math.random() * maxSize + 1);
};

const convertToTwoDimensionalArray = (array: Word[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const findWord = (wordId: number) =>
  (wordsJson.find((word) => word.id === wordId) ?? wordsJson[0]).word;

export { generateRandomNumber, convertToTwoDimensionalArray, findWord };
