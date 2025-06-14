/**
 * Creates an array of numbers in the given range with a step
 */
export function range(
  start = 0,
  end?: number,
  step?: number,
  isRight: boolean = false
): number[] {
  if (end === undefined) {
    end = start
    start = 0
  }

  step = step === undefined ? (start < end ? 1 : -1) : step
  return baseRange(start, end, step, isRight)
}

function baseRange(
  start: number,
  end: number,
  step: number,
  isRight: boolean
): number[] {
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)
  const result = new Array(length)

  while (length--) {
    result[isRight ? length : ++index] = start
    start += step
  }

  return result
}
