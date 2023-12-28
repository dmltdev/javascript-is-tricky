/**
 * A simple curry function
 *
 * @param {*} func
 * @returns {(...args: {}) => any}
 */

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// simple example
const sum = (a, b, c) => a + b + c;
const curriedAverage = curry(sum);

curriedAverage(1)(2)(3); //?
