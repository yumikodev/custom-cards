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

    const query = new URLSearchParams({
      avatarURL: avatar.src,
      avatarFrame: avatar.frameType,
      avatarFrameColor: avatar.frameColor,
      font,
    });

    if (background) query.append("background", background);
    if (text) query.append("text", JSON.stringify(text));

    try {
      const {
        data: { data },
      } = await api.get(welcomeCard(query.toString()));

      return Buffer.from(data);
    } catch (e) {
      throw new CustomCardsError(e.message);
    }
  }
}
