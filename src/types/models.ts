export type HexColor = `#${string}`;

export enum FrameType {
  Circle = "circle",
  Square = "square",
}

export enum Fonts {
  Fredoka = "Fredoka One",
  Poppins = "Poppins",
  MilkyCoffee = "Milky Coffee",
}

export interface TextOptions {
  content: string;
  color?: string;
}

export interface AvatarOptions {
  src: File;
  frameType: FrameType;
  frameColor?: HexColor;
}
