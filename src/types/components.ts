export type Size = `${number}px`;
export type FrameType = "circle" | "square";

export interface Positions {
  x: number;
  y: number;
}

// Avatar Frame components
export interface AvatarFrameOptions extends Positions {
  color: string;
}

export interface DrawSquareAvatarFrameOptions extends AvatarFrameOptions {
  width: number;
  height: number;
}

export interface DrawCircleAvatarFrameOptions extends AvatarFrameOptions {
  radius: number;
}

// Avatar Image component
export interface DrawAvatarImageOptions extends Positions {
  type: FrameType;
  src: string | Buffer;
  width: number;
  height: number;
}

export interface DrawTextOptions extends Positions {
  font: string;
  size: Size;
  color: string;
  content: string;
  align: CanvasTextAlign;
  maxWidth?: number;
}
