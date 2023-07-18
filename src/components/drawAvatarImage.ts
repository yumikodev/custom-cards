import { CanvasRenderingContext2D, loadImage } from "canvas";
import { DrawAvatarImageOptions } from "../types/components";

export async function drawAvatarImage(
  ctx: CanvasRenderingContext2D,
  opts: DrawAvatarImageOptions
): Promise<void> {
  const { height, src, type, width, x, y } = opts,
    img = await loadImage(src);

  ctx.beginPath();

  if (type === "circle") ctx.arc(x, y, width / 2, 0, Math.PI * 2, true);
  else ctx.roundRect(x - width / 2, y - height / 2, width, height, 90);

  ctx.closePath();
  ctx.clip();
  ctx.drawImage(img, x - width / 2, y - height / 2, width, height);
}
