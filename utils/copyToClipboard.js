/**
 * A function to copy some content to the clipboard
 * @date 12/8/2023 - 9:34:05 AM
 *
 * @export
 * @param {string} content
 * @returns {void}
 */
export default function copyToClipboard(content) {
  navigator.clipboard.writeText(content);
}
