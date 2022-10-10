import { CanvasCard } from "../components/Canvas";
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
        if (!model.avatar) throw new Error("'avatar' is required");
        if (!model.circleColor) throw new Error("'circleColor' is required");
        if (!model.fontFamily) throw new Error("'fontFamily' is required");
        if (!model.title) throw new Error("'title' is required");
        if (!model.titleColor) throw new Error("'titleColor' is required");

        try {
          let buffer = await CanvasCard("welcome", model);
          return buffer;
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
      level: async (model: Level) => {
        try {
          if (!model.avatarOptions)
            throw new Error("'avatarOptions' is required");
          if (!model.fontFamily) throw new Error("'fontFamily' is required");
          if (!model.textOptions) throw new Error("'textOptions' is required");
          if (!model.xpLevelOptions)
            throw new Error("'xpLevelOptions' is required");

          let buffer = await CanvasCard("level", model);
          return buffer;
        } catch (err: any) {
          throw new Error(err.message);
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
    throw new Error(err.message);
  }
}
