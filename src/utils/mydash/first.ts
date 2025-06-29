import { isEmpty } from './isEmpty'

export function first(list: unknown[]) {
  if (!isEmpty(list)) {
    return list[0]
  }
}
