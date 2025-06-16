export function isEmpty(value: any) {
  if (
    value === null ||
    value === undefined ||
    typeof value === 'boolean' ||
    typeof value === 'number'
  ) {
    return true
  }

  if (value instanceof Map || value instanceof Set) {
    return !value.size
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  return !value
}
