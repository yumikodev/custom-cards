import * as Canvas from "canvas";

/**
 * Register a new Font Family.
 *
 * @param fontName The name of the font family.
 * @param path The path of the font family.
 */
function registerFont(fontName: string, path: string) {
  Canvas.registerFont(path, {
    family: fontName,
    weight: "400",
  });
}

export { registerFont };
