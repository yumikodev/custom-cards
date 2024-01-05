import { CanvasRenderingContext2D, Image, loadImage } from "canvas";
import { DrawAvatarImageOptions } from "../types/components";
import sharp = require("sharp");
import { CustomCardsError } from "../utils/error";

export async function drawAvatarImage(
  ctx: CanvasRenderingContext2D,
  opts: DrawAvatarImageOptions
): Promise<void> {
  const { height, src, type, width, x, y } = opts;
  let avatarImage: Image;

  if (typeof src === "string") {
    const res = await fetch(src).catch(() => {
      throw new CustomCardsError("Invalid avatar URL");
    });
    const img = await res.arrayBuffer();

    const formatedImg = await sharp(img)
      .toFormat("png")
      .resize({
        width,
        height,
      })
      .toBuffer();

    avatarImage = await loadImage(formatedImg);
  } else {
    const formatedImg = await sharp(src)
      .toFormat("png")
      .resize({
        width,
        height,
      })
      .toBuffer();

    avatarImage = await loadImage(formatedImg);
  }

  ctx.beginPath();

  if (type === "circle") ctx.arc(x, y, width / 2, 0, Math.PI * 2, true);
  else ctx.roundRect(x - width / 2, y - height / 2, width, height, 90);

  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatarImage, x - width / 2, y - height / 2, width, height);
}
