export interface ICache<T> {
  get(key: string): T;
  set(key: string, value: object);
  remove(key: string);
}
