import { WelcomeCard } from "../structures/WelcomeCard.js";
import { CustomCardsError } from "../utils/error.js";
import { welcomeCard } from "../utils/endpoints.js";
import { ApiCardResponse } from "../types/api.js";
import { FrameType } from "../types/models.js";
import { AxiosInstance } from "axios";

export class Cards {
  constructor(protected api: AxiosInstance) {}

  async createWelcomeCard(card: WelcomeCard): Promise<ApiCardResponse<Buffer>> {
    if (!card) throw new CustomCardsError("card property is required");
    if (!card.avatar) throw new CustomCardsError("card.avatar is required");
    if (!card.font) throw new CustomCardsError("card.font is required");
    if (!card.text) throw new CustomCardsError("card.text is required");
    if (!(card.avatar.source instanceof File))
      throw new CustomCardsError("Invalid avatar source, use an image adapter");

    const body = new FormData();

    body.append("variant", card.variant);
    body.append("text", JSON.stringify(card.text));
    body.append("font", card.font);
    body.append("avatar", card.avatar.source);
    body.append("frameType", card.avatar.frameType);

    // Avatar
    if (card.avatar.frameType !== FrameType.Custom) {
      if (card.avatar.frameColor)
        body.append("frameColor", card.avatar.frameColor);
    } else {
      if (!card.avatar.mask)
        throw new CustomCardsError("card.avatar.mask is required");
      if (!(card.avatar.mask instanceof File))
        throw new CustomCardsError("Invalid mask source, use an image adapter");
      if (!card.avatar.frame)
        throw new CustomCardsError("card.avatar.frame is required");
      if (!(card.avatar.frame instanceof File))
        throw new CustomCardsError(
          "Invalid frame source, use an image adapter"
        );

      body.append("mask", card.avatar.mask);
      body.append("frame", card.avatar.frame);
    }

    // Background
    if (card.background) {
      if (!(card.background instanceof File))
        throw new CustomCardsError(
          "Invalid background source, use an image adapter"
        );
      body.append("background", card.background);
    }
    if (card.backgroundOpacity)
      body.append("backgroundOpacity", `${card.backgroundOpacity}`);

    try {
      const { data } = await this.api.post<ApiCardResponse>(welcomeCard, body);
      return {
        card: Buffer.from(data.card, "base64"),
        mimetype: data.mimetype,
      };
    } catch (e) {
      const msg = Array.isArray(e.message) ? e.message[0] : e.message;
      throw new CustomCardsError(msg);
    }
  }
}
