import { Color } from "../components/ColorObject";
import { Colors } from "../components/enums";
import Error from "../utils/Error";

type imageTypes = {
  url: string;
  buffer: Buffer;
};

export default class {
  constructor(options: {
    fontFamily: "FredokaOne" | "Capriola" | "Poppins" | "MilkyCoffee";
  }) {
    this.fontFamily = options.fontFamily;
  }

  setAvatar<T extends keyof imageTypes>(options: {
    type: T;
    data: imageTypes[T];
    circleColor: Colors | string;
  }) {
    if (!options) throw new Error("the 'options' parameter is required");

    if (typeof options.circleColor === "number")
      options.circleColor = Color[options.circleColor];
    if (typeof options.data === "string" && options.type === "buffer")
      throw new Error("'data' is not a buffer");
    if (
      options.type === "url" &&
      typeof options.data === "string" &&
      !options.data.startsWith("https://")
    )
      throw new Error(
        "invalid url address, only https protocol is allowed (https://)"
      );

    this.avatarOptions = options;
    return this;
  }
  avatarOptions: any;
  setBackground<T extends keyof imageTypes>(options: {
    type: T;
    data: imageTypes[T];
  }) {
    if (!options) throw new Error("the 'options' parameter is required");

    if (typeof options.data === "string" && options.type === "buffer")
      throw new Error("'data' is not a buffer");
    if (
      options.type === "url" &&
      typeof options.data === "string" &&
      !options.data.startsWith("https://")
    )
      throw new Error(
        "invalid url address, only https protocol is allowed (https://)"
      );

    this.background = options;
    return this;
  }
  background: any;
  setText(options: {
    user: {
      name: string;
      color: Colors | string;
      shadowColor: Colors | string;
    };
    rank: {
      name?: string;
      color: Colors | string;
      shadowColor: Colors | string;
    };
    level: {
      name?: string;
      color: Colors | string;
      shadowColor: Colors | string;
    };
  }) {
    if (!options) throw new Error("the 'options' parameter is required");

    // Default Level & Rank Name
    if (!options.level.name) options.level.name = "Level";
    if (!options.rank.name) options.rank.name = "Rank";

    // Enums
    if (typeof options.user.color === "number")
      options.user.color = Color[options.user.color];
    if (typeof options.user.shadowColor === "number")
      options.user.shadowColor = Color[options.user.shadowColor];
    if (typeof options.rank.color === "number")
      options.rank.color = Color[options.rank.color];
    if (typeof options.rank.shadowColor === "number")
      options.rank.shadowColor = Color[options.rank.shadowColor];
    if (typeof options.level.color === "number")
      options.level.color = Color[options.level.color];
    if (typeof options.level.shadowColor === "number")
      options.level.shadowColor = Color[options.level.shadowColor];

    this.textOptions = options;
    return this;
  }
  textOptions: any;
  setXPLevel(options: {
    barColor: {
      empty: Colors | string;
      filled: Colors | string;
      shadowColor: Colors | string;
    };
    rank: string | number;
    level: string | number;
    xp: {
      current: string | number;
      max: string | number;
      levelColor: Colors | string;
    };
  }) {
    if (!options) throw new Error("the 'options' parameter is required");
    if (typeof options.xp.levelColor === "number")
      options.xp.levelColor = Color[options.xp.levelColor];
    if (typeof options.barColor.empty === "number")
      options.barColor.empty = Color[options.barColor.empty];
    if (typeof options.barColor.filled === "number")
      options.barColor.filled = Color[options.barColor.filled];
    if (typeof options.barColor.shadowColor === "number")
      options.barColor.shadowColor = Color[options.barColor.shadowColor];

    this.xpLevelOptions = options;
    return this;
  }
  xpLevelOptions: any;
  fontFamily: any;
}
