export default class {
  constructor(options: {
    family: "FredokaOne" | "Capriola" | "Poppins";
  }) {
    this.fontFamily = options.family;
  }

  setTitle(content: string) {
    this.title = content;
    return this;
  }
  title: any;
  setTitleColor(hexColor: string) {
    this.titleColor = hexColor.replace("#", "");
    return this;
  }
  titleColor: any;
  setDescription(content: string) {
    this.description = content;
    return this;
  }
  description: any;
  setDescriptionColor(hexColor: string) {
    this.descriptionColor = hexColor.replace("#", "");
    return this;
  }
  descriptionColor: any;
  setAvatar(url: string) {
    this.avatar = url;
    return this;
  }
  avatar: any;
  setCircleColor(hexColor: string) {
    this.circleColor = hexColor.replace("#", "");
    return this;
  }
  circleColor: any;
  setBackground(url: string) {
    this.background = url;
    return this;
  }
  background: any;
  fontFamily;
}
