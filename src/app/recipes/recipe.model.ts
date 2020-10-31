export class Recipe {
  public name: string;
  public describtion: string;
  public imagePath: string;
  constructor(name: string, describtion: string, imagePath: string) {
    this.name = name;
    this.describtion = describtion;
    this.imagePath = imagePath;
  }
}
