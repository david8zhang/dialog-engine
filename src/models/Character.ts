import { LooseObject } from "../interface/LooseObject";

export class Character {
  private characterId : string;
  private reactions : LooseObject;

  constructor(config : LooseObject) {
    if (config.reactions) this.reactions = config.reactions;
  }

  public getCharacterId() : string {
    return this.characterId;
  }

  public getReactions() : LooseObject {
    return this.reactions;
  }

  public setCharacterId(newId : string) : void {
    this.characterId = newId;
  }

  public setReactions(reactions : LooseObject) : void {
    this.reactions = reactions;
  }
}