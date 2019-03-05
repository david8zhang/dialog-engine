import { LooseObject } from "../interface/LooseObject";

export interface SpeechLineParams {
  leftCharacter: LooseObject,
  rightCharacter: LooseObject,
  speaker : string,
  line : string,
  renderFunc : Function,
  gotoNextSpeechLine: Function
}

export class SpeechLine {
  private leftCharacter : LooseObject;
  private rightCharacter : LooseObject;
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

  public getRightCharacter() : LooseObject {
    return this.rightCharacter;
  }

  public setRightCharacter(rightCharacter : LooseObject) {
    this.rightCharacter = rightCharacter
  }

  public getLeftCharacter() : LooseObject {
    return this.leftCharacter;
  }

  public setLeftCharacter(leftCharacter : LooseObject ) {
    this.leftCharacter = leftCharacter;
  }

  public render() : LooseObject {
    const renderParams = {
      sceneType: 'dialogScene',
      leftCharacter: this.leftCharacter,
      rightCharacter: this.rightCharacter,
      line: this.line,
      gotoNextSpeechLine: this.gotoNextSpeechLine,
      speaker: this.speaker
    }
    return this.renderFunc(renderParams);
  }
}