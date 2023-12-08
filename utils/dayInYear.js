/**
 * Find the day in the year
 * @date 12/8/2023 - 9:43:06 AM
 *
 * @export
 * @param {Date} day - input date
 * @returns {number} - the day in the year 
 */
export default function dayInYear(day) {
  return Math.floor(
    (day - new Date(day.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
}
dayInYear(new Date('2023/06/23')); //?
