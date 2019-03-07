import { LooseObject } from "../interface/LooseObject";
import { IAbstractSpeechLine } from "../interface/IAbstractSpeechLine";

export interface MultiSpeechLineParams {
  leftCharacters: LooseObject,
  rightCharacters: LooseObject,
  speakerId : string,
  line : string,
  renderFunc : Function,
  gotoNextSpeechLine: Function
}

export class MultiSpeechLine implements IAbstractSpeechLine {
  private leftCharacters : LooseObject;
  private rightCharacters : LooseObject;
  private speakerId : string;
  private line : string;
  private renderFunc : Function;
  private gotoNextSpeechLine : Function;

  constructor(config : MultiSpeechLineParams) {
    if (config.leftCharacters) this.leftCharacters = config.leftCharacters;
    if (config.rightCharacters) this.rightCharacters = config.rightCharacters;
    if (config.speakerId) this.speakerId = config.speakerId;
    if (config.line) this.line = config.line;
    if (config.renderFunc) this.renderFunc = config.renderFunc;
    if (config.gotoNextSpeechLine) this.gotoNextSpeechLine = config.gotoNextSpeechLine;
  }

  public getLines() : string {
    return this.line;
  }

  public setLines(line : string) {
    this.line = line;
  }

  public getRightCharacter() : LooseObject {
    return this.rightCharacters;
  }

  public setRightCharacter(rightCharacters : LooseObject) {
    this.rightCharacters = rightCharacters
  }

  public getLeftCharacter() : LooseObject {
    return this.leftCharacters;
  }

  public setLeftCharacter(leftCharacters : LooseObject ) {
    this.leftCharacters = leftCharacters;
  }

  public render() : LooseObject {
    const renderParams = {
      sceneType: 'dialogScene',
      leftCharacters: this.leftCharacters,
      rightCharacters: this.rightCharacters,
      line: this.line,
      gotoNextSpeechLine: this.gotoNextSpeechLine,
      speakerId: this.speakerId,
      isMulti: true
    }
    return this.renderFunc(renderParams);
  }
}