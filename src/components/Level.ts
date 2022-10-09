export default class {
  constructor(options: { family: "FredokaOne" | "Capriola" | "Poppins" }) {
    this.fontFamily = options.family;
  }

  setAvatar(url: string) {
    this.avatar = url;
    return this;
  }
  avatar: any;
  setBackground(url: string) {
    this.background = url;
    return this;
  }
  background: any;
  setTextOptions(options: {
    username: string;
    rankName?: string;
    levelName?: string;
    rankStyle: string;
    levelStyle: string;
  }) {
    if (!options.levelName) options.levelName = "Level";
    if (!options.rankName) options.rankName = "Rank";
    options.levelStyle = options.levelStyle.replace("#", "");
    options.rankStyle = options.rankStyle.replace("#", "");

    this.textOptions = options;
    return this;
  }
  textOptions: any;
  setTextStyle(hexColor: string) {
    this.textStyle = hexColor.replace("#", "");
    return this;
  }
  textStyle: any;
  setCircleColor(hexColor: string) {
    this.circleColor = hexColor.replace("#", "");
    return this;
  }
  circleColor: any;
  setXpBarOptions(options: {
    emptyBarStyle: string;
    filledBarStyle: string;
    rank: string | number;
    level: string | number;
    minXP: string | number;
    maxXP: string | number;
  }) {
    this.xpBarOptions = options;
    return this;
  }
  xpBarOptions: any;
  fontFamily: any;
}
