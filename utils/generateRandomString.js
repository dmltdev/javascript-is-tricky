/**
 * Returns a randomly generated string.
 *
 * @param {number} length - The length of the string.
 * @returns {string} a generated string
 */

export default function generateRandomString(length) {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
}
generateRandomString(10); //?
generateRandomString(20); //?
