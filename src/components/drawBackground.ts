import { CanvasRenderingContext2D, Image, loadImage } from "canvas";
import { Source } from "../types/models";
import { CustomCardsError } from "../utils/error";
import sharp = require("sharp");

export async function drawBackground(
  ctx: CanvasRenderingContext2D,
  src: Source
): Promise<void> {
  let background: Image;

  if (typeof src === "string") {
    const res = await fetch(src).catch(() => {
      throw new CustomCardsError("Invalid background URL");
    });
    const img = await res.arrayBuffer();

    const formatedImg = await sharp(img)
      .toFormat("png")
      .resize({
        width: ctx.canvas.width,
        height: ctx.canvas.height,
      })
      .toBuffer();

    background = await loadImage(formatedImg);
  } else {
    const formatedImg = await sharp(src)
      .toFormat("png")
      .resize({
        width: ctx.canvas.width,
        height: ctx.canvas.height,
      })
      .toBuffer();

    background = await loadImage(formatedImg);
  }

  ctx.beginPath();
  ctx.roundRect(0, 0, ctx.canvas.width, ctx.canvas.height, 60);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);
}
