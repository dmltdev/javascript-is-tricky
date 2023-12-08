/**
 * Capitalizes the first letter of the string
 * @date 12/8/2023 - 9:31:56 AM
 *
 * @export
 * @param {string} str - The string to capitalize
 * @returns {string} string with a first letter capitalized
 */

export default function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

capitalize('linux is great'); //?
