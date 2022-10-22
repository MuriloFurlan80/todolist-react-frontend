export class InternalServerErrorException extends Error {
  constructor() {
    super("Internal Server Error Exception!");
    this.name = "InternalServerErrorException";
  }
}
