
import dayjs from "dayjs";

/**
 * Lays a date out the way people write it here.
 * formatDate("2026-03-15") -> "15/03/2026"
 *
 * @param {string} dateString a date like "2026-03-15"
 * @returns {string} the same date as DD/MM/YYYY
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * The year a date falls in, as a number.
 * yearOf("2026-03-15") -> 2026
 *
 * @param {string} dateString
 * @returns {number}
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * Adds a specified number of days to a date.
 *
 * addDays("2026-03-15", 14) -> "2026-03-29"
 * addDays("2026-03-15", 0) -> "2026-03-15"
 * addDays("2026-12-30", 3) -> "2027-01-02"
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

/**
 * The package YOU chose from the registry.
 */
export const myPackage = "lodash";
