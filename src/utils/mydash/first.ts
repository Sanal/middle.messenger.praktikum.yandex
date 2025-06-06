import { isEmpty } from "./isEmpty";

export function first(list: any[]) {
  if (!isEmpty(list)) {
    return list[0];
  }
}
