import memoize from "./lruMemoize.js";
import averageNumber from '../averageNumber.js';

// // simple example
// const memoizedAverage = memoize(averageNumber);

// // New input
// console.time();
// memoizedAverage(1, 2, 3);
// console.timeEnd();

// // Same input received from the cache
// console.time();
// memoizedAverage(1, 2, 3);
// console.timeEnd();

const getRandomNumbers = (min, max, length) => {
  const nums = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    nums.push(randomNumber);
  }
  return nums;
}

function generateRandomTestCase(min = 1, max = 5) {
  return getRandomNumbers(min, max, 3);
}

function generateTestCases(numCases) {
  return Array.from({ length: numCases }, generateRandomTestCase);
}

const memoizedAverage = memoize(averageNumber, 1000);

function testMemoization(memoizedFunction, testCases) {
  testCases.forEach((args, index) => {
    console.time(`Call ${index + 1}`);
    const result = memoizedFunction(...args);
    console.timeEnd(`Call ${index + 1}`);
  });
}

const testCases = generateTestCases(1000);
testMemoization(memoizedAverage, testCases);