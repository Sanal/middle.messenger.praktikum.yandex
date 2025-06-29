import { isEmpty } from './isEmpty'

export function last(list: unknown[]) {
  if (!isEmpty(list)) {
    return list[list.length - 1]
  }
}
