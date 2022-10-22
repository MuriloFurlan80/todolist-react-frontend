export class BadRequestException extends Error {
  constructor() {
    super("Bad Request Exception!");
    this.name = "BadRequestException";
  }
}
