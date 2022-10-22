export class UnProcessableEntityException extends Error {
  constructor() {
    super("UnProcessable Entity Exception!");
    this.name = "UnProcessableEntityException";
  }
}
