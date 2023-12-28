/**
 * Memoization helper function without timeout or capacity limits
 *
 * @export
 * @param {*} fn
 * @returns {(...args: {}) => any}
 */
export default function memoize(fn) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const res = fn.apply(null, args);
    cache[key] = res;

    return res;
  };
}

// simple example
import averageNumber from '../averageNumber.js';
const memoizedAverage = memoize(averageNumber);

// New input
console.time();
memoizedAverage(1, 2, 3);
console.timeEnd();

// Same input received from the cache
console.time();
memoizedAverage(1, 2, 3);
console.timeEnd();
