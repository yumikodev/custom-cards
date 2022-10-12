import { CanvasCard } from "../components/Canvas";
import Error from "../utils/Error";
import Level from "./Level";
import Welcome from "./Welcome";

type renderType = {
  welcome: Welcome;
  level: Level;
};

export default async function <T extends keyof renderType>(options: {
  type: T;
  model: renderType[T];
}) {
  try {
    const cardTypes = {
      welcome: async (model: Welcome) => {
        if (!model.avatarOptions) throw new Error("'avatarOptions' is required");
        if (!model.fontFamily) throw new Error("'fontFamily' is required");
        if (!model.textOptions) throw new Error("'textOptions' is required");

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
      return cardTypes["welcome"](<Welcome>options.model);
    } else if (options.type === "level") {
      return cardTypes["level"](<Level>options.model);
    } else {
      throw new Error("invalid type");
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
}
