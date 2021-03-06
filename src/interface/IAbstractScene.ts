import { LooseObject } from "./LooseObject";

export interface IAbstractScene {
  order : number;
  getBgImage() : string;
  setBgImage(bgImage: string) : void;
  render() : LooseObject;
}