import { Character } from "../models/Character";
import { LooseObject } from "./LooseObject";

export interface ICharacterManager {
  getCharacterById(id : string) : Character;
  getCharacters() : LooseObject;
  setCharacters(charcters : LooseObject) : void;
}