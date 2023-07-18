import { CanvasRenderingContext2D, createCanvas } from "canvas";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { registerFont } from "../utils/registerFont";

export class Canvas {
  ctx: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    const canvas = createCanvas(width, height),
      ctx = canvas.getContext("2d");

    const fonts = readdirSync(join(process.cwd(), "fonts"));

    for (const font of fonts) {
      registerFont(
        font.split(".")[0].replace("-", " "),
        join(process.cwd(), "fonts", font)
      );
    }

    this.ctx = ctx;
  }

  get buffer(): Buffer {
    return this.ctx.canvas.toBuffer();
  }
}
