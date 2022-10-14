import * as CanvasModule from "canvas";
import Welcome from "../dist/Welcome";
import Error from "../utils/Error";

export default async function (Canvas: typeof CanvasModule, model: Welcome) {
  try {
    // Canvas
    const canvas = Canvas.createCanvas(1024, 500),
      ctx = canvas.getContext("2d");

    let avatar = await Canvas.loadImage(model.avatarOptions.data);

    // Background
    if (model.background) {
      let background = await Canvas.loadImage(model.background.data);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }

    // Avatar Circle
    ctx.fillStyle = model.avatarOptions.circleColor;
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.arc(512, 166, 128, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();

    // Title
    ctx.font = `70px "${model.fontFamily}"`;
    ctx.textAlign = "center";
    ctx.shadowColor = model.textOptions.title.shadowColor;
    ctx.shadowBlur = 8;
    ctx.lineWidth = 3;
    ctx.fillStyle = model.textOptions.title.color;
    ctx.fillText(model.textOptions.title.content, 512, 370, 700);

    // Description
    if (model.textOptions.description) {
      ctx.font = `45px "${model.fontFamily}"`;
      ctx.textAlign = "center";
      ctx.shadowColor = model.textOptions.description.shadowColor;
      ctx.shadowBlur = 8;
      ctx.lineWidth = 3;
      ctx.fillStyle = model.textOptions.description.color;
      ctx.fillText(model.textOptions.description.content, 512, 420, 900);
    }

    // Rounded Avatar Corners
    ctx.beginPath();
    ctx.arc(512, 166, 119, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    // Avatar
    ctx.drawImage(avatar, 393, 47, 238, 238);

    // Image Buffer
    const buffer = canvas.toBuffer();
    return buffer;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
