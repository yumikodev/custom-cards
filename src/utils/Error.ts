export default class extends Error {
  constructor(error: string) {
    super();

    this.name = "CustomCards-Error";
    this.message = error;
  }
}
