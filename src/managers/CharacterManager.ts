import { LooseObject } from "../interface/LooseObject";
import { Character } from "../models/Character";
import { ICharacterManager } from "../interface/ICharacterManager";

export class CharacterManager implements ICharacterManager {
  private characters : LooseObject;

  constructor(config : LooseObject) {
    if (config.characters) this.characters = this.serializeCharacters(config.characters);
  }

  public getCharacterById(id : string) : Character {
    return this.characters[id];
  }

  public getCharacters() : Character[] {
    const res : Character[] = [];
    Object.keys(this.characters).forEach((key) => {
      res.push(this.characters[key]);
    })
    return res;
  }

  public setCharacters(characters : LooseObject) : void {
    this.characters = characters;
  }

  private serializeCharacters(characters : LooseObject[]) {
    const serialized : LooseObject = {};
    characters.forEach((c : LooseObject) => {
      serialized[c.characterId] = new Character(c);
    })
    return serialized;
  }
}