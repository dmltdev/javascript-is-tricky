/**
 * Find the day in the year
 *
 * @export
 * @param arr - array with optional nested arrays
 * @returns any[] - Flattened array
 */

// const flat = arr => {
//   [].concat.apply(
//     [],
//     arr.map(a => (Array.isArray(a) ? flat(a) : a))
//   );
// };

export default function flat(arr) {
  return arr.reduce(
    (a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]),
    []
  );
}

flat(['cat', ['lion', 'tiger']]) //?