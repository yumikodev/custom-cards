import * as CanvasModule from "canvas";
import { percent } from "yutil.js";
import { Level } from "../classes/Level";
import Error from "../utils/Error";

export default async function (Canvas: typeof CanvasModule, model: Level) {
  try {
    // Canvas
    const canvas = Canvas.createCanvas(1024, 300),
      ctx = canvas.getContext("2d");

    let bar_width = 600,
      avatar = await Canvas.loadImage(model.avatarOptions.data),
      xpPercent = percent(
        model.xpLevelOptions.xp.current,
        model.xpLevelOptions.xp.max,
        1
      );

    // Background
    if (model.background) {
      let background = await Canvas.loadImage(model.background.data);

      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }

    // Avatar Circle
    ctx.fillStyle = model.avatarOptions.circleColor;
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.arc(150, 150, 110, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();

    // XP Bar
    (ctx.lineJoin = "round"), (ctx.lineWidth = 40);

    // Empty bar
    ctx.strokeStyle = model.xpLevelOptions.barColor.empty;
    ctx.shadowColor = model.xpLevelOptions.barColor.shadowColor;
    ctx.shadowBlur = 8;
    ctx.strokeRect(340, 245, bar_width, 0);

    // Filled bar
    ctx.strokeStyle = model.xpLevelOptions.barColor.filled;
    ctx.shadowBlur = 0;
    ctx.strokeRect(340, 245, (xpPercent * bar_width) / 100, 0);

    // Username
    ctx.font = `40px "${model.fontFamily}"`;
    ctx.shadowColor = model.textOptions.user.shadowColor;
    ctx.shadowBlur = 8;
    ctx.lineWidth = 3;
    ctx.fillStyle = model.textOptions.user.color;
    ctx.textAlign = "left";
    ctx.fillText(model.textOptions.user.name, 320, 150, 400);

    // Rank Number
    ctx.font = `50px "${model.fontFamily}"`;
    ctx.shadowColor = model.textOptions.rank.shadowColor;
    ctx.shadowBlur = 8;
    ctx.lineWidth = 3;
    ctx.fillStyle = model.textOptions.rank.color;
    ctx.textAlign = "right";
    ctx.fillText(`#${model.xpLevelOptions.rank}`, 740, 45, 80);

    // Level Number
    ctx.shadowColor = model.textOptions.level.shadowColor;
    ctx.shadowBlur = 8;
    ctx.lineWidth = 3;
    ctx.fillStyle = model.textOptions.level.color;
    ctx.fillText(`${model.xpLevelOptions.level}`, 960, 45, 80);

    // Rank text
    ctx.font = `25px "${model.fontFamily}"`;
    ctx.shadowColor = model.textOptions.rank.shadowColor;
    ctx.shadowBlur = 8;
    ctx.lineWidth = 3;
    ctx.fillStyle = model.textOptions.rank.color;
    ctx.fillText(model.textOptions.rank.name, 640, 45, 100);

    // Level text
    ctx.shadowColor = model.textOptions.level.shadowColor;
    ctx.shadowBlur = 8;
    ctx.lineWidth = 3;
    ctx.fillStyle = model.textOptions.level.color;
    ctx.fillText(model.textOptions.level.name, 870, 45, 100);

    // XP level
    ctx.fillStyle = model.xpLevelOptions.xp.levelColor;
    ctx.font = `25px "${model.fontFamily}"`;
    ctx.textAlign = "right";
    ctx.fillText(
      `${model.xpLevelOptions.xp.current}/${model.xpLevelOptions.xp.max} XP`,
      960,
      210
    );
    ctx.textAlign = "left";
    ctx.fillText(`${xpPercent} / 100%`, 320, 210);

    // Rounded Avatar Corners
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    // Avatar
    ctx.drawImage(avatar, 50, 50, 200, 200);

    // Card Buffer
    const buffer = canvas.toBuffer();
    return buffer;
  } catch (err: any) {
    console.error(err);
    throw new Error(err.message);
  }
}
