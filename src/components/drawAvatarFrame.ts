import { CanvasRenderingContext2D } from "canvas";
import {
  DrawCircleAvatarFrameOptions,
  DrawSquareAvatarFrameOptions,
} from "../types/components";

export function drawCircleAvatarFrame(
  ctx: CanvasRenderingContext2D,
  opts: DrawCircleAvatarFrameOptions
): void {
  const { color, radius, x, y } = opts;

  ctx.beginPath();
  ctx.shadowColor = "black";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetX = -5;
  ctx.shadowOffsetY = 5;
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.lineWidth = 20;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}

export function drawSquareAvatarFrame(
  ctx: CanvasRenderingContext2D,
  opts: DrawSquareAvatarFrameOptions
): void {
  const { color, height, width, x, y } = opts;

  ctx.beginPath();
  ctx.shadowColor = "black";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetX = -5;
  ctx.shadowOffsetY = 5;
  ctx.roundRect(x - width / 2, y - height / 2, width, height, 90);
  ctx.lineWidth = 20;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}
