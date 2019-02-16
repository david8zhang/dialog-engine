import { LooseObject } from "../interface/LooseObject";

export interface SpeechLineParams {
  leftCharacter : string,
  rightCharacter : string,
  speaker : string,
  line : string,
  renderFunc : Function,
  gotoNextSpeechLine: Function
}

export class SpeechLine {
  private leftCharacter : string;
  private rightCharacter : string;
  private speaker : string;
  private line : string;
  private renderFunc : Function;
  private gotoNextSpeechLine : Function;

  constructor(config : SpeechLineParams) {
    if (config.line) this.line = config.line;
    if (config.renderFunc) this.renderFunc = config.renderFunc;
    if (config.leftCharacter) this.leftCharacter = config.leftCharacter;
    if (config.rightCharacter) this.rightCharacter = config.rightCharacter;
    if (config.gotoNextSpeechLine) this.gotoNextSpeechLine = config.gotoNextSpeechLine;
    if (config.speaker) this.speaker = config.speaker;
  }

  public getLines() : string {
    return this.line;
  }

  public setLines(line : string) {
    this.line = line;
  }

  public getRightCharacter() : string {
    return this.rightCharacter;
  }

  public setRightCharacter(rightCharacter : string) {
    this.rightCharacter = rightCharacter
  }

  public getLeftCharacter() : string {
    return this.leftCharacter;
  }

  public setLeftCharacter(leftCharacter : string ) {
    this.leftCharacter = leftCharacter;
  }

  public render() : any {
    const renderParams = {
      leftCharacter: this.leftCharacter,
      rightCharacter: this.rightCharacter,
      line: this.line,
      gotoNextSpeechLine: this.gotoNextSpeechLine,
      speaker: this.speaker
    }
    return this.renderFunc(renderParams);
  }
}