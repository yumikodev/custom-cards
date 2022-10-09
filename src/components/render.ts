import { CanvasCard } from "../utils/Canvas";
import Error from "../utils/Error";
import Level from "./Level";
import Welcome from "./Welcome";

export default async function (options: {
  type: "welcome" | "level";
  model: Welcome | Level | any;
}) {
  try {
    const cardTypes = {
      welcome: async (model: Welcome) => {
        if (!model.avatar) throw new Error("'avatar' is not defined");
        if (!model.circleColor) throw new Error("'circleColor' is not defined");
        if (!model.fontFamily) throw new Error("'fontFamily' is not defined");
        if (!model.title) throw new Error("'title' is not defined");
        if (!model.titleColor) throw new Error("'titleColor' is not defined");

        try {
          let buffer = await CanvasCard("welcome", model);
          return buffer;
        } catch (err) {
          console.error(err);
        }
      },
      level: async (model: Level) => {
        try {
          let buffer = await CanvasCard("level", options.model);
          return buffer;
        } catch (err) {
          console.error(err);
        }
      },
    };

    if (options.type === "welcome") {
      return cardTypes[options.type](options.model);
    } else if (options.type === "level") {
      return cardTypes[options.type](options.model);
    } else {
      throw new Error("invalid type");
    }
  } catch (err: any) {
    console.error(err);
  }
}
