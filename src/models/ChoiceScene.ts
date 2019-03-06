import { IAbstractScene } from "../interface/IAbstractScene";
import { LooseObject } from "../interface/LooseObject";
import { IRenderManager } from "../interface/IRenderManager";

export interface ChoiceSceneParams {
  speaker : string,
  leftCharacter: LooseObject,
  rightCharacter: LooseObject,
  addScenes: Function;
  renderManager: IRenderManager;
  branchOptions : LooseObject;
  order: number;
  gotoNextScene: Function;
  bgImage: string;
}

export class ChoiceScene implements IAbstractScene {
  // Characters & Dialog
  private leftCharacter : LooseObject;
  private rightCharacter : LooseObject;
  private bgImage : string;
  private line : string;
  private speaker: string;

  // Branching
  private branchOptions : LooseObject;
  private addScenes : Function;

  // Rendering & Scene Ordering
  private renderManager : IRenderManager;
  public order : number;
  private gotoNextScene : Function;
  

  constructor(config : LooseObject) {
    if (config.leftCharacter) this.leftCharacter = config.leftCharacter;
    if (config.rightCharacter) this.rightCharacter = config.rightCharacter;
    if (config.speaker) this.speaker = config.speaker;
    if (config.bgImage) this.bgImage = config.bgImage;
    if (config.gotoNextScene) this.gotoNextScene = config.gotoNextScene;
    if (config.renderManager) this.renderManager = config.renderManager;
    if (config.branchOptions) this.branchOptions = config.branchOptions;
    if (config.order) this.order = config.order;
    if (config.addScenes) this.addScenes = config.addScenes;
    if (config.line) this.line = config.line;
  }

  public getBgImage() : string {
    return this.bgImage;
  }

  public setBgImage(image : string) {
    this.bgImage = image;
  }

  public chooseBranchOption(option : LooseObject[]) {
    this.addScenes(option);
    this.gotoNextScene();
  }

  public render() : LooseObject {
    const params = {
      rightCharacter: this.rightCharacter,
      leftCharacter: this.leftCharacter,
      speaker: this.speaker,
      sceneType: 'choiceScene',
      bgImage: this.bgImage,
      branchOptions: this.branchOptions,
      chooseBranchOption: (option : LooseObject[]) => this.chooseBranchOption(option),
      line: this.line
    }
    return this.renderManager.choiceSceneRenderer(params);
  }
}