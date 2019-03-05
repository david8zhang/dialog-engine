import { LooseObject } from "./LooseObject";

export interface ISceneManager {
  render() : LooseObject;
  getCharacterById(id : string) : LooseObject;
  addScenes(scenes : LooseObject[]) : void;
}