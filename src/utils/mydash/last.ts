import { isEmpty } from "./isEmpty";

export function last(list: any[]) {
  if (!isEmpty(list)) {
    return list[list.length - 1];
  }
}
