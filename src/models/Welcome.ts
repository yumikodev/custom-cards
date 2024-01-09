import { Canvas } from "../components/Canvas";
import {
  drawCircleAvatarFrame,
  drawSquareAvatarFrame,
} from "../components/drawAvatarFrame";
import { drawAvatarImage } from "../components/drawAvatarImage";
import { drawBackground } from "../components/drawBackground";
import { drawText } from "../components/drawText";
import { DrawTextOptions } from "../types/components";
import { AvatarOptions, Fonts, Source, TextOptions } from "../types/models";
import { CustomCardsError } from "../utils/error";

export class Welcome {
  text!: TextOptions[];
  avatar!: AvatarOptions;
  image!: Source;
  font!: string;

  /**
   * Set the text for the card.
   *
   * Max 3 indexes.
   */
  setText(data: TextOptions[]) {
    if (data.length > 3)
      throw new CustomCardsError(
        `The max of indexes was exceeded. (Max 3, but there are ${data.length})`
      );

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
  setImage(src: Source) {
    this.image = src;
    return this;
  }

  /**
   * Set the font family.
   */
  setFont(fontName: Fonts | string) {
    this.font = fontName;
    return this;
  }

  static async render(
    model: Pick<
      InstanceType<typeof Welcome>,
      "avatar" | "font" | "image" | "text"
    >
  ): Promise<Buffer> {
    try {
      const width = 1280,
        height = 720,
        { ctx, canvas } = new Canvas(width, height);

      const text: DrawTextOptions[] = model.text.map(
        ({ color, content }, i) => {
          let h = i === 0 ? 1.5 : i === 1 ? 1.32 : 1.2;

          return {
            align: "center",
            color,
            content,
            font: model.font,
            size: i === 0 ? "80px" : i === 1 ? "60px" : "40px",
            x: width / 2,
            y: height / h,
            maxWidth: (width * 90) / 100,
          };
        }
      );

      await drawBackground(ctx, model.image);
      drawText(ctx, text);

      // Avatar & Frame
      if (model.avatar.frameType === "circle") {
        drawCircleAvatarFrame(ctx, {
          color: model.avatar.frameColor,
          x: width / 2,
          y: height / 3.1,
          radius: 150,
        });
      } else {
        drawSquareAvatarFrame(ctx, {
          color: model.avatar.frameColor,
          width: 300,
          height: 300,
          x: width / 2,
          y: height / 3.1,
        });
      }
      await drawAvatarImage(ctx, {
        src: model.avatar.src,
        type: model.avatar.frameType,
        width: 300,
        height: 300,
        x: width / 2,
        y: height / 3.1,
      });

      return canvas.toBuffer();
    } catch (e) {
      throw new CustomCardsError(e);
    }
  }
}
