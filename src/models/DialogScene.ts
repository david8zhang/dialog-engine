import { IAbstractScene } from "../interface/IAbstractScene";
import { LooseObject } from "../interface/LooseObject";
import { SpeechLine, SpeechLineParams } from "./SpeechLine";
import { IRenderManager } from "../interface/IRenderManager";
import { MultiSpeechLineParams, MultiSpeechLine } from "./MultiSpeechLine";
import { IAbstractSpeechLine } from "../interface/IAbstractSpeechLine";

export interface DialogParams {
  bgImage : string
  speechLines: LooseObject[],
  gotoNextScene : Function,
  renderManager :IRenderManager
  order?: number
}

export class DialogScene implements IAbstractScene {
  private bgImage : string;
  private speechLines : IAbstractSpeechLine[];
  private currentSpeechLineIndex : number = 0;
  private gotoNextScene : Function;
  private renderManager : IRenderManager;
  public order : number;

  constructor(config : DialogParams) {
    if (config.bgImage) this.bgImage = config.bgImage;
    if (config.renderManager) this.renderManager = config.renderManager;
    if (config.speechLines) this.speechLines = this.serializeSpeechLines(config.speechLines);
    if (config.gotoNextScene) this.gotoNextScene = config.gotoNextScene;
    if (config.order) this.order = config.order;
  }

  public getBgImage() : string {
    return this.bgImage;
  }

  public setBgImage(image : string) {
    this.bgImage = image;
  }

  private serializeSpeechLines(speechLines : LooseObject[]) : IAbstractSpeechLine[] {
    const serializedSpeechLines = speechLines.map((s : LooseObject) => {
      if (s.isMulti) {
        const multiSpeechLineParams : MultiSpeechLineParams = {
          leftCharacters: s.leftCharacters,
          rightCharacters: s.rightCharacters,
          speakerId: s.speakerId,
          line: s.line,
          renderFunc: this.renderManager.speechLineRenderer,
          gotoNextSpeechLine: () => this.gotoNextSpeechLine()
        }
        return new MultiSpeechLine(multiSpeechLineParams);
      } else {
        const speechLineParams : SpeechLineParams = {
          leftCharacter : s.leftCharacter,
          rightCharacter : s.rightCharacter,
          speaker: s.speaker,
          line: s.line,
          renderFunc: this.renderManager.speechLineRenderer,
          gotoNextSpeechLine: () => this.gotoNextSpeechLine()
        }
        return new SpeechLine(speechLineParams);
      }
    })
    return serializedSpeechLines;
  }

  public render() : LooseObject {
    const activeSpeechLine = this.speechLines[this.currentSpeechLineIndex];
    const renderParams = {
      bgImage: this.bgImage,
      sceneType: 'dialogScene',
      activeSpeechLine: activeSpeechLine.render()
    }
    return this.renderManager.dialogSceneRenderer(renderParams);
  }

  private gotoNextSpeechLine() : void {
    if (this.currentSpeechLineIndex < this.speechLines.length - 1) {
      this.currentSpeechLineIndex++;
    } else {
      this.gotoNextScene();
    }
  }
}