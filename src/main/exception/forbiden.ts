export class ForbidenException extends Error {
  constructor() {
    super("Forbiden Exception!");
    this.name = "ForbidenException";
  }
}
