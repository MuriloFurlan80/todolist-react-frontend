export class NotFoundException extends Error {
  constructor() {
    super("Not Found Exception!");
    this.name = "NotFoundException";
  }
}

