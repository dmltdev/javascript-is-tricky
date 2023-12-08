/**
 * Get the average of multiple numbers
 * @date 12/8/2023 - 9:30:36 AM
 *
 * @export
 * @param {...number} args an array of numbers
 * @returns {number} an average number
 */

export default function averageNumber(...args) {
  return args.reduce((a, b) => a + b, 0) / args.length;
}

averageNumber(0, 1, 2, 3, 4, 5); //?
averageNumber(1, 5, 11, 19, 24, 30, 36); //?
