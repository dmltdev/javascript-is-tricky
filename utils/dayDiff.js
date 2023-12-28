/**
 * Caulciates the day difference between two dates
 *
 * @export
 * @param {Date} day1 - input date 1
 * @param {Date} day2 - input date 2
 * @returns {number} the number of days between the two dates
 */

export default function dayDiff(day1, day2) {
  return Math.ceil(Math.abs(day1.getTime() - day2.getTime()) / 86400000);
}

dayDiff(new Date('2023-01-01'), new Date('2024-01-01')); //?
