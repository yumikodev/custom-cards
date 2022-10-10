import { Colors } from "../components/enums";
import Error from "../utils/Error";

const Color = {
  1: "black",
  2: "white",
  3: "gray",
  4: "grey",
  5: "red",
  6: "orange",
  7: "yellow",
  8: "green",
  9: "blue",
  10: "pink",
  11: "purple",
};
type imageTypes = {
  url: string;
  buffer: Buffer;
};

export default class {
  constructor(options: { fontFamily: "FredokaOne" | "Capriola" | "Poppins" }) {
    this.fontFamily = options.fontFamily;
  }

  setAvatarOptions(options: { url: string; circleColor: Colors | string }) {
    if (typeof options.circleColor === "number")
      options.circleColor = Color[options.circleColor];

    this.avatarOptions = options;
    return this;
  }
  avatarOptions: any;
  setBackground<T extends keyof imageTypes>(options: {
    type: T;
    data: imageTypes[T];
  }) {
    if (typeof options.data === "string" && options.type === "buffer")
      throw new Error("'data' is not a buffer");

    this.background = options;
    return this;
  }
  background: any;
  setTextOptions(options: {
    username: string;
    usernameColor: Colors | string;
    rankName?: string;
    levelName?: string;
    rankColor: Colors | string;
    levelColor: Colors | string;
    shadowColor: "black" | "white";
  }) {
    // Default Level & Rank Name
    if (!options.levelName) options.levelName = "Level";
    if (!options.rankName) options.rankName = "Rank";

    // Enums
    if (typeof options.usernameColor === "number")
      options.usernameColor = Color[options.usernameColor];
    if (typeof options.rankColor === "number")
      options.rankColor = Color[options.rankColor];
    if (typeof options.levelColor === "number")
      options.levelColor = Color[options.levelColor];

    // Valid Shadow Color
    if (options.shadowColor === "black" || options.shadowColor === "white") {
      this.textOptions = options;
      return this;
    } else {
      throw new Error("shadowColor is invalid");
    }
  }
  textOptions: any;
  setXPLevelOptions(options: {
    emptyBarColor: Colors | string;
    filledBarColor: Colors | string;
    rank: string | number;
    level: string | number;
    minXP: string | number;
    maxXP: string | number;
    XPLevelColor: Colors | string;
  }) {
    if (typeof options.XPLevelColor === "number")
      options.XPLevelColor = Color[options.XPLevelColor];
    if (typeof options.emptyBarColor === "number")
      options.emptyBarColor = Color[options.emptyBarColor];
    if (typeof options.filledBarColor === "number")
      options.filledBarColor = Color[options.filledBarColor];

    this.xpLevelOptions = options;
    return this;
  }
  xpLevelOptions: any;
  fontFamily: any;
}
