export type HexColor = `#${string}`;

export enum Variant {
  Classic = "Classic",
}

export enum FrameType {
  Circle = "circle",
  Square = "square",
  Custom = "custom",
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

export type AvatarOptions =
  | {
      source: File;
      frameType: FrameType.Circle | FrameType.Square;
      frameColor?: HexColor;
    }
  | {
      source: File;
      frameType: FrameType.Custom;
      mask: File;
      frame: File;
    };
