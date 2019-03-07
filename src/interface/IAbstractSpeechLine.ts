import { LooseObject } from "./LooseObject";

export interface IAbstractSpeechLine {
  render() : LooseObject;
  getLines() : string;
  setLines(line : string) : void;
}