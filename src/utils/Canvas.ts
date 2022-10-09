import * as Canvas from "canvas";
import { join } from "node:path";
import Card from "../components/Welcome";
import Error from "./Error";

// Functions
function registerFont(fontName: string, family: string) {
  Canvas.registerFont(join(__dirname, `../../fonts/${fontName}`), {
    family,
  });
  return;
}

// Register fonts
registerFont("Capriola-Regular.ttf", "Capriola Regular");
registerFont("FredokaOne-Regular.ttf", "FredokaOne Regular");
registerFont("Poppins-Bold.ttf", "Poppins Bold");

// Canvas
const canvas = Canvas.createCanvas(1024, 500);
const ctx = canvas.getContext("2d");

async function CanvasCard(type: "welcome", model: Card) {
  try {
    switch (type) {
      case "welcome":
        // Background
        let background;
        if (model.background)
          background = await Canvas.loadImage(model.background);

        // Avatar Circle
        ctx.fillStyle = `#${model.circleColor}`;
        if (background)
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.textAlign = "center";
        ctx.beginPath();
        ctx.arc(512, 166, 128, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.fill();

        // Title
        ctx.font = `70px "${model.fontFamily}"`;
        ctx.textAlign = "center";
        ctx.shadowColor = "black";
        ctx.shadowBlur = 7;
        ctx.lineWidth = 2;
        ctx.fillStyle = `#${model.titleColor}`;
        ctx.fillText(model.title, 512, 370);

        // Description
        if (model.description) {
          ctx.fillStyle = `#${model.descriptionColor}`;
          ctx.font = `45px "${model.fontFamily}"`;
          ctx.fillText(model.description, 512, 420);
        }
        ctx.beginPath();
        ctx.arc(512, 166, 119, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        // Avatar
        let avatar = await Canvas.loadImage(model.avatar);

        ctx.drawImage(avatar, 393, 47, 238, 238);

        // Image Buffer
        let buffer = canvas.toBuffer();
        return buffer;
    }
  } catch (err: any) {
    console.error(err);
    throw new Error(err.message);
  }
}

export { CanvasCard };
