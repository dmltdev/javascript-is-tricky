export default function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}