import { FrameType } from "./components";

export type HexColor = `#${string}`;
export type Source = `https://${string}` | `http://${string}` | Buffer;

export enum Fonts {
  Fredoka = "FredokaOne",
  Capriola = "Capriola",
  Poppins = "Poppins",
  MilkyCoffee = "MilkyCoffee",
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
