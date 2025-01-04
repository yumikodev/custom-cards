export type HexColor = `#${string}`;
export type Source = `https://${string}` | `http://${string}`;
export type FrameType = "circle" | "square";

export enum Fonts {
  Fredoka = "Fredoka One",
  Poppins = "Poppins",
  MilkyCoffee = "Milky Coffee",
}

export interface TextOptions {
  content: string;
  color: string;
}

export interface AvatarOptions {
  src: Source;
  frameColor: HexColor;
  frameType: FrameType;
}
