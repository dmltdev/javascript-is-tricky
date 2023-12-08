export default function rgbaToHex(r, g, b) {
  return (
    '#' +
    [r, g, b].map(num => parseInt(num).toString(16).padStart(2, '0')).join('')
  );
}