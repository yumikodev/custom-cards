import * as Canvas from "canvas";
import { join } from "node:path";
import Level from "../dist/Level";
import Welcome from "../dist/Welcome";
import { percent } from "yutil.js";
import Error from "../utils/Error";

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

async function CanvasCard(
  type: "welcome" | "level",
  model: Welcome | Level | any
) {
  try {
    const cardTypes = {
      welcome: async (model: Welcome) => {
        try {
          // Canvas
          const canvas = Canvas.createCanvas(1024, 500),
            ctx = canvas.getContext("2d");

          let avatar = await Canvas.loadImage(model.avatar);

          // Background
          if (model.background) {
            let background = await Canvas.loadImage(model.background);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
          }

          // Avatar Circle
          ctx.fillStyle = `#${model.circleColor}`;
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
          ctx.drawImage(avatar, 393, 47, 238, 238);

          // Image Buffer
          const buffer = canvas.toBuffer();
          return buffer;
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
      level: async (model: Level) => {
        try {
          // Canvas
          const canvas = Canvas.createCanvas(1024, 300),
            ctx = canvas.getContext("2d");

          let bar_width = 600,
            avatar = await Canvas.loadImage(model.avatarOptions.url),
            xpPercent = parseInt(
              percent(
                model.xpLevelOptions.minXP,
                model.xpLevelOptions.maxXP,
                1
              ).replace("%", "")
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
          (ctx.lineJoin = "round"), (ctx.lineWidth = 50);

          // Empty bar
          ctx.strokeStyle = model.xpLevelOptions.emptyBarColor;
          ctx.strokeRect(340, 250, bar_width, 0);

          // Filled bar
          ctx.strokeStyle = model.xpLevelOptions.filledBarColor;
          ctx.strokeRect(340, 250, xpPercent, 0);

          // Username
          ctx.font = `40px "${model.fontFamily}"`;
          ctx.shadowColor = model.textOptions.shadowColor;
          ctx.shadowBlur = 8;
          ctx.lineWidth = 3;
          ctx.fillStyle = model.textOptions.usernameColor;
          ctx.textAlign = "center";
          ctx.fillText(model.textOptions.username, 485, 150, 400);

          // Rank
          ctx.fillStyle = model.textOptions.rankColor;
          ctx.fillText(`#${model.xpLevelOptions.rank}`, 740, 44, 80);
          // Level
          ctx.fillStyle = model.textOptions.levelColor;
          ctx.fillText(`${model.xpLevelOptions.level}`, 930, 44, 80);

          // Rank & Level text
          ctx.font = `25px "${model.fontFamily}"`;
          ctx.fillStyle = model.textOptions.rankColor;
          ctx.fillText(model.textOptions.rankName, 650, 44, 200);
          ctx.fillStyle = model.textOptions.levelColor;
          ctx.fillText(model.textOptions.levelName, 840, 44, 200);

          // XP level
          ctx.fillStyle = model.xpLevelOptions.XPLevelColor;
          ctx.font = `25px "${model.fontFamily}"`;
          ctx.fillText(
            `${model.xpLevelOptions.minXP}/${model.xpLevelOptions.maxXP} XP`,
            880,
            210
          );
          ctx.fillText(`${xpPercent} / 100%`, 380, 210);

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
          throw new Error(err.message);
        }
      },
    };

    const card = await cardTypes[type](model);
    return card;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export { CanvasCard };
