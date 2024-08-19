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
      console.log(`Cache hit for key: ${key}`);
      return value;
    }

    const result = fn.apply(null, args);
    console.log(`Cache miss for key: ${key}`);

    if (cache.size === capacity) {
      const lruKey = cache.keys().next().value;
      console.log(`Cache full. Evicting least recently used key: ${lruKey}`);
      cache.delete(lruKey);
    }

    cache.set(key, result);
    return result;
  };
}

