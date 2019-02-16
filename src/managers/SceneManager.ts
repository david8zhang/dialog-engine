import { ISceneManager } from "../interface/ISceneManager";
import { DialogScene, DialogParams } from "../models/DialogScene";
import { LooseObject } from "../interface/LooseObject";
import { IAbstractScene } from "../interface/IAbstractScene";
import { CutScene, CutSceneParams } from "../models/CutScene";
import { IRenderManager } from "../interface/IRenderManager";
import { RenderManagerParams, RenderManager } from "./RenderManager";

const SceneFactory : LooseObject = {
  dialogScene: DialogScene,
  cutScene: CutScene
}

const debugSceneRenderer = (params : LooseObject) : LooseObject => params;

export class SceneManager implements ISceneManager {
  private scenes : IAbstractScene[];
  private activeSceneIndex : number = 0;
  private renderManager : IRenderManager;

  constructor(config : LooseObject) {
    // initialize renderManager
    const renderManagerParams : RenderManagerParams = {
      cutSceneRenderer: config.cutSceneRenderer || debugSceneRenderer,
      dialogSceneRenderer: config.dialogSceneRenderer || debugSceneRenderer,
      speechLineRenderer: config.speechLineRenderer || debugSceneRenderer
    }
    this.renderManager = new RenderManager(renderManagerParams);
    if (config.scenes) this.scenes = this.serializeScenes(config.scenes);
  }

  private serializeScenes(scenes : LooseObject[]) {
    return scenes.map((s : LooseObject, index : number) => {
      const { sceneType } = s;
      let sceneParams;
      if (sceneType === 'dialogScene') {
        sceneParams = {
          bgImage: s.bgImage,
          speechLines: s.speechLines,
          gotoNextScene: () => this.gotoNextScene(),
          renderManager: this.renderManager,
          order: index
        } as DialogParams;
      } else if (sceneType === 'cutScene') {
        sceneParams = {
          bgImage: s.bgImage,
          line: s.line,
          gotoNextScene: () => this.gotoNextScene(),
          renderManager: this.renderManager,
          order: index
        } as CutSceneParams;
      }
      return new SceneFactory[sceneType](sceneParams);
    });
  }

  private gotoNextScene() : boolean {
    if (this.activeSceneIndex < this.scenes.length - 1) {
      this.activeSceneIndex++;
      return true;
    } else {
      return false;
    }
  }

  public render() : any {
    this.scenes.sort((a : IAbstractScene, b : IAbstractScene) => {
      return a.order - b.order;
    })
    const activeScene = this.scenes[this.activeSceneIndex];
    return activeScene.render()
  }
}