import api from "../providers/axios";
import { AvatarOptions, Fonts, Source, TextOptions } from "../types/models";
import { welcomeCard } from "../utils/api";
import { CustomCardsError } from "../utils/error";

export class Welcome {
  text?: TextOptions[];
  avatar: AvatarOptions;
  background?: Source;
  font: Fonts;

  /**
   * Set the text for the card.
   *
   * Max 3 indexes.
   */
  setText(data: TextOptions[]) {
    if (data.length > 3) data.length = 3;

    this.text = data;
    return this;
  }

  /**
   * Set the avatar image.
   */
  setAvatar(opts: AvatarOptions) {
    this.avatar = opts;
    return this;
  }

  /**
   * Set the background image.
   */
  setBackground(src: Source) {
    this.background = src;
    return this;
  }

  /**
   * Set the font family.
   */
  setFont(fontName: Fonts) {
    this.font = fontName;
    return this;
  }

  static async render(
    model: Pick<
      InstanceType<typeof Welcome>,
      "avatar" | "font" | "background" | "text"
    >
  ): Promise<Buffer> {
    const { avatar, font, background, text } = model;

    const body: Record<string, any> = {
      avatarURL: avatar.src,
      avatarFrame: avatar.frameType,
      avatarFrameColor: avatar.frameColor,
      font,
    };

    if (background) body.background = background;
    if (text) body.text = text;

    try {
      const { data } = await api.post(welcomeCard, body);

      return Buffer.from(data.card);
    } catch (e) {
      throw new CustomCardsError(e.message);
    }
  }
}
