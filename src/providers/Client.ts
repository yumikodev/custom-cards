import { AxiosInstance } from "axios";
import { createHttpClient } from "./axios.js";
import { CustomCardsError } from "../utils/error.js";
import { WelcomeCard } from "../models/WelcomeCard.js";
import { welcomeCard } from "../utils/endpoints.js";
import { ApiCardResponse } from "../types/api.js";

class Cards {
  constructor(protected api: AxiosInstance) {}

  async createWelcomeCard(card: WelcomeCard): Promise<Buffer> {
    if (!card) throw new CustomCardsError("card property is required");
    if (!card.avatar) throw new CustomCardsError("card.avatar is required");
    if (!card.font) throw new CustomCardsError("card.font is required");
    if (!card.text) throw new CustomCardsError("card.text is required");
    if (!(card.avatar.src instanceof File))
      throw new CustomCardsError("Invalid avatar source, use an image adapter");

    const body = new FormData();

    body.append("text", JSON.stringify(card.text));
    body.append("font", card.font);
    body.append("avatar", card.avatar.src);
    body.append("avatarFrame", card.avatar.frameType);
    if (card.avatar.frameColor)
      body.append("avatarFrameColor", card.avatar.frameColor);
    if (card.background) {
      if (!(card.background instanceof File))
        throw new CustomCardsError(
          "Invalid background source, use an image adapter"
        );
      body.append("background", card.background);
    }

    try {
      const { data } = await this.api.post<ApiCardResponse>(welcomeCard, body);
      return Buffer.from(data.card);
    } catch (e) {
      const msg = Array.isArray(e.message) ? e.message[0] : e.message;
      throw new CustomCardsError(msg);
    }
  }
}

export class Client {
  readonly api: AxiosInstance;

  constructor(private token: string) {
    if (!this.token) throw new CustomCardsError("Missing token");

    this.api = createHttpClient(token);
    this.cards = new Cards(this.api);
  }

  cards: Cards;
}
