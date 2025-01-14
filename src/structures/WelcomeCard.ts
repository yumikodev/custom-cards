import { AvatarOptions, Fonts, TextOptions, Variant } from "../types/models.js";
import { CustomCardsError } from "../utils/error.js";

interface WelcomeCardData {
  /**
   * Set the variant card
   */
  variant: Variant;
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
   * Set the background opacity.
   */
  backgroundOpacity?: number;
  /**
   * Set the font family.
   */
  font: Fonts;
}

export class WelcomeCard implements WelcomeCardData {
  variant: Variant;
  text: TextOptions[];
  avatar: AvatarOptions;
  background?: File;
  backgroundOpacity?: number;
  font: Fonts;

  constructor(data: WelcomeCardData) {
    if (!data)
      throw new CustomCardsError("Missing WelcomeCard data in constructor");
    if (!data.variant) throw new CustomCardsError("data.variant is required");
    if (!data.avatar) throw new CustomCardsError("data.avatar is required");
    if (!data.font) throw new CustomCardsError("data.font is required");
    if (!data.text) throw new CustomCardsError("data.text is required");

    this.text = data.text;
    this.avatar = data.avatar;
    this.background = data.background;
    this.backgroundOpacity = data.backgroundOpacity;
    this.font = data.font;
    this.variant = data.variant;
  }
}
