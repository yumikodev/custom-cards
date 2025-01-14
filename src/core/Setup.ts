import { AxiosInstance } from "axios";
import { CustomCardsError } from "../utils/error.js";
import { createHttpClient } from "./axios.js";
import { Cards } from "../services/cards.js";

export class Setup {
  readonly _api: AxiosInstance;

  constructor(private token: string) {
    if (!this.token) throw new CustomCardsError("Missing token");

    this._api = createHttpClient(token);
    this.cards = new Cards(this._api);
  }

  cards: Cards;
}
