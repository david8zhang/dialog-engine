import { IAbstractScene } from "../interface/IAbstractScene";
import { IRenderManager } from "../interface/IRenderManager";

export interface CutSceneParams {
  bgImage : string,
  order: number,
  renderManager: IRenderManager,
  line : string,
  gotoNextScene: Function
}

export class CutScene implements IAbstractScene {
  public order : number;
  public bgImage : string;
  public line : string;
  public renderManager : IRenderManager
  private gotoNextScene : Function

  constructor(config : CutSceneParams) {
    if (config.order) this.order = config.order;
    if (config.bgImage) this.bgImage = config.bgImage;
    if (config.renderManager) this.renderManager = config.renderManager;
    if (config.line) this.line = config.line;
    if (config.gotoNextScene) this.gotoNextScene = config.gotoNextScene;
  }

  public getBgImage() : string {
    return this.bgImage;
  }

  public setBgImage(image : string) {
    this.bgImage = image;
  }

  public render() : any {
    const params = {
      bgImage: this.bgImage,
      line: this.line,
      gotoNextScene: this.gotoNextScene
    };
    return this.renderManager.cutSceneRenderer(params);
  }
}