import { CanvasCard } from "../utils/Canvas";
import Error from "../utils/Error";
import Card from "./Welcome";

export default async function (options: { type: "welcome"; model: Card }) {
  try {
    if (options.type !== "welcome") throw new Error("invalid type");
    if (!options.model.avatar) throw new Error("'avatar' is not defined");
    if (!options.model.circleColor)
      throw new Error("'circleColor' is not defined");
    if (!options.model.fontFamily)
      throw new Error("'fontFamily' is not defined");
    if (!options.model.title) throw new Error("'title' is not defined");
    if (!options.model.titleColor)
      throw new Error("'titleColor' is not defined");

    let buffer = await CanvasCard(options.type, options.model);
    return buffer;
  } catch (err: any) {
    console.error(err);
  }
}
