export class UnExpectedException extends Error {
  constructor() {
    super("UnExpected Exception!");
    this.name = "UnExpectedException";
  }
}

