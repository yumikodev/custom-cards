import { AvatarOptions, Fonts, TextOptions } from "../types/models.js";
import { CustomCardsError } from "../utils/error.js";

interface WelcomeCardData {
  /**
   * Set the text for the card.
   *
   * Max 3 indexes.
   */
  text: TextOptions[];
  /**
   * Set the avatar image.
   */
  avatar: AvatarOptions;
  /**
   * Set the background image.
   */
  background?: File;
  /**
   * Set the font family.
   */
  font: Fonts;
}

export class WelcomeCard {
  text: TextOptions[];
  avatar: AvatarOptions;
  background?: File;
  font: Fonts;

  constructor(data: WelcomeCardData) {
    if (!data)
      throw new CustomCardsError("Missing WelcomeCard data in constructor");
    if (!data.avatar) throw new CustomCardsError("data.avatar is required");
    if (!data.font) throw new CustomCardsError("data.font is required");
    if (!data.text) throw new CustomCardsError("data.text is required");

    this.text = data.text;
    this.avatar = data.avatar;
    this.background = data.background;
    this.font = data.font;
  }
}
