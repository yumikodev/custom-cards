export class CustomCardsError extends Error {
  name: string = "CustomCards-Error";

  constructor(msg: string) {
    super(msg);
  }
}
