export default function hexToRgba(hex) {
  const [r, g, b] = hex.match(/\w\w/g).map(val => parseInt(val, 16));
  return `rgba(${r}, ${g}, ${b}, 1)`;
}
