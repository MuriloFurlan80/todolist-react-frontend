import { ICache } from "./cache-adapter";

export class Cache<T> implements ICache<T> {
  get(key: string): T {
    return JSON.parse(localStorage.get(key));
  }
  set(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}
