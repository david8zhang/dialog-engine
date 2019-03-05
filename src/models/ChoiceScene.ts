import { IAbstractScene } from "../interface/IAbstractScene";
import { LooseObject } from "../interface/LooseObject";
import { ISceneManager } from "../interface/ISceneManager";
import { IRenderManager } from "../interface/IRenderManager";

export interface ChoiceSceneParams {
  addScenes: Function;
  renderManager: IRenderManager;
  branchOptions : LooseObject;
  order: number;
  gotoNextScene: Function;
  bgImage: string;
}

export class ChoiceScene implements IAbstractScene {
  private renderManager : IRenderManager;
  private branchOptions : LooseObject;
  public order : number;
  private gotoNextScene : Function;
  private bgImage : string;
  private line : string;
  private addScenes : Function;

  constructor(config : LooseObject) {
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
  }

  public render() : LooseObject {
    const params = {
      sceneType: 'choiceScene',
      bgImage: this.bgImage,
      branchOptions: this.branchOptions,
      chooseBranchOption: (option : LooseObject[]) => this.chooseBranchOption(option),
      line: this.line,
      gotoNextScene: this.gotoNextScene
    }
    return this.renderManager.choiceSceneRenderer(params);
  }
}