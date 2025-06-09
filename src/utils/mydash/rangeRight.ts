import { range } from "./range";

/**
 * Creates an array of numbers in the given range in reverse order with a step
 */
export function rangeRight(start: number, end?: number, step: number = 1) {
  return range(start, end, step, true);
}
