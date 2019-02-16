import { IRenderManager } from "../interface/IRenderManager";
import { LooseObject } from "../interface/LooseObject";

export interface RenderManagerParams {
  dialogSceneRenderer?: Function,
  cutSceneRenderer?: Function,
  speechLineRenderer?: Function
}

const debugSceneRenderer = (params : LooseObject) => params;

export class RenderManager implements IRenderManager {
  public dialogSceneRenderer : Function = debugSceneRenderer;
  public cutSceneRenderer : Function = debugSceneRenderer;
  public speechLineRenderer : Function = debugSceneRenderer;

  constructor(config : RenderManagerParams) {
    if (config.dialogSceneRenderer) this.dialogSceneRenderer = config.dialogSceneRenderer;
    if (config.cutSceneRenderer) this.cutSceneRenderer = config.cutSceneRenderer;
    if (config.speechLineRenderer) this.speechLineRenderer = config.speechLineRenderer;
  }
}