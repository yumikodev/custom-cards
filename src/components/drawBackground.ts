import { CanvasRenderingContext2D, loadImage } from "canvas";
import { Source } from "../types/models";

export async function drawBackground(
  ctx: CanvasRenderingContext2D,
  src: Source
): Promise<void> {
  const img = await loadImage(src);

  ctx.beginPath();
  ctx.roundRect(0, 0, ctx.canvas.width, ctx.canvas.height, 60);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
}
