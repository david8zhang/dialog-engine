import { LooseObject } from "../interface/LooseObject";

export class Character {
  private name : string;
  private characterId : string;
  private reactions : LooseObject;

  constructor(config : LooseObject) {
    if (config.name) this.name = config.name;
    if (config.characterId) this.characterId = config.characterId;
    if (config.reactions) this.reactions = config.reactions;
  }

  public getCharacterId() : string {
    return this.characterId;
  }

  public getReactions() : LooseObject {
    return this.reactions;
  }

  public getName() : string {
    return this.name;
  }

  public setName(name : string) { 
    this.name = name
  }

  public setCharacterId(newId : string) : void {
    this.characterId = newId;
  }

  public setReactions(reactions : LooseObject) : void {
    this.reactions = reactions;
  }
}