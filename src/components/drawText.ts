import { CanvasRenderingContext2D } from "canvas";
import { DrawTextOptions } from "../types/components";

export function drawText(
  ctx: CanvasRenderingContext2D,
  opts: DrawTextOptions | DrawTextOptions[]
): void {
  function fillText(opts: DrawTextOptions) {
    const { align, color, content, font, size, x, y, maxWidth } = opts;

    ctx.beginPath();
    ctx.shadowColor = "black";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = -5;
    ctx.shadowOffsetY = 5;

    ctx.font = `${size} "${font}"`;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.fillText(content, x, y, maxWidth);
    ctx.closePath();
  }

  if (Array.isArray(opts)) {
    for (const obj of opts) {
      fillText(obj);
    }
  } else {
    fillText(opts);
  }
}
