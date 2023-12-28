/**
 * Memoization function that works like an LRU cache: least-recently-used value is evicted when capacity is reached
 *
 * @export
 * @param {*} fn
 * @param {number} [capacity=10]
 * @returns {(...args: {}) => any}
 */

export default function memoize(fn, capacity = 10) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (key in cache) {
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }

    const result = fn.apply(null, args);

    if (cache.size === capacity) {
      const lruKey = cache.keys().next().value;
      cache.delete(lruKey);
    }

    cache.set(key, result);
    return result;
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