export interface ICache {
  get(key: string): object;
  set(key: string, value: object);
  remove(key: string);
}
