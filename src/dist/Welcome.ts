import { Color } from "../components/ColorObject";
import { Colors } from "../components/enums";
import Error from "../utils/Error";

type imageType = {
  url: string;
  buffer: Buffer;
};

export default class {
  constructor(options: { fontFamily: "FredokaOne" | "Capriola" | "Poppins" }) {
    this.fontFamily = options.fontFamily;
  }
  setText(options: {
    title: {
      content: string;
      color: Colors | string;
      shadowColor: Colors | string;
    };
    description?: {
      content: string;
      color: Colors | string;
      shadowColor: Colors | string;
    };
  }) {
    if (!options) throw new Error("the 'options' parameter is required");

    if (typeof options.title.color === "number")
      options.title.color = Color[options.title.color];
    if (typeof options.title.shadowColor === "number")
      options.title.shadowColor = Color[options.title.shadowColor];
    if (typeof options.description?.color === "number")
      options.description.color = Color[options.description.color];
    if (typeof options.description?.shadowColor === "number")
      options.description.shadowColor = Color[options.description.shadowColor];

    this.textOptions = options;
    return this;
  }
  textOptions: any;
  setAvatar<T extends keyof imageType>(options: {
    type: T;
    data: imageType[T];
    circleColor: Colors | string;
  }) {
    if (!options) throw new Error("the 'options' parameter is required");

    if (typeof options.circleColor === "number")
      options.circleColor = Color[options.circleColor];
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
  setBackground<T extends keyof imageType>(options: {
    type: T;
    data: imageType[T];
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
  fontFamily;
}
