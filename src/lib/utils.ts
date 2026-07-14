import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates the human-readable duration between two dates.
 *
 * @description
 * Computes the total months between a start date and an end date, then
 * formats the result as a compact string such as "5 mos" or "1 yr 2 mos".
 * Pass `"Present"` (case-insensitive) as the `endDate` to use today's date,
 * making the duration automatically update without any manual edits.
 *
 * @param startDate - A month-year string in the format `"MMM YYYY"` (e.g. `"Jan 2026"`).
 * @param endDate   - A month-year string in the format `"MMM YYYY"`, or the
 *                    literal string `"Present"` to use the current date.
 * @returns A compact duration string, e.g. `"5 mos"`, `"1 yr"`, or `"1 yr 2 mos"`.
 *
 * @example
 * calculateDuration('Jan 2026', 'Present'); // => '6 mos'  (as of Jul 2026)
 * calculateDuration('Jun 2025', 'Dec 2025'); // => '7 mos'
 * calculateDuration('Jan 2024', 'Jan 2025'); // => '1 yr'
 * calculateDuration('Mar 2023', 'Sep 2024'); // => '1 yr 7 mos'
 */
export function calculateDuration(startDate: string, endDate: string): string {
  const parseMonthYear = (dateString: string): Date => {
    const [monthAbbreviation, yearString] = dateString.split(' ');
    const monthIndex = new Date(`${monthAbbreviation} 1, 2000`).getMonth();
    return new Date(parseInt(yearString, 10), monthIndex, 1);
  };

  const resolvedEndDate =
    endDate.toLowerCase() === 'present' ? new Date() : parseMonthYear(endDate);
  const resolvedStartDate = parseMonthYear(startDate);

  // +1 for inclusive counting: Jan → Jul = 7 months (Jan, Feb, Mar, Apr, May, Jun, Jul)
  const totalMonths =
    (resolvedEndDate.getFullYear() - resolvedStartDate.getFullYear()) * 12 +
    (resolvedEndDate.getMonth() - resolvedStartDate.getMonth()) +
    1;

  const clampedTotalMonths = Math.max(totalMonths, 1);
  const years = Math.floor(clampedTotalMonths / 12);
  const remainingMonths = clampedTotalMonths % 12;

  if (years === 0) return `${remainingMonths} mos`;
  if (remainingMonths === 0) return `${years} yr`;
  return `${years} yr ${remainingMonths} mos`;
}
