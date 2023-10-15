const generateRandomNumber = (maxSize: number) => {
  return Math.floor(Math.random() * maxSize + 1);
};

const convertToTwoDimensionalArray = (array: number[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export { generateRandomNumber, convertToTwoDimensionalArray };
