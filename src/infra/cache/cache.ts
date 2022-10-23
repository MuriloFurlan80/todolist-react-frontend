import { ICache } from "./cache-adapter";

export class Cache implements ICache {
  get(key: string): object {
    return JSON.parse(localStorage.getItem(key));
  }
  set(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}
