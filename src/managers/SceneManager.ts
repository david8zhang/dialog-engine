import { ISceneManager } from "../interface/ISceneManager";
import { DialogScene, DialogParams } from "../models/DialogScene";
import { LooseObject } from "../interface/LooseObject";
import { IAbstractScene } from "../interface/IAbstractScene";
import { CutScene, CutSceneParams } from "../models/CutScene";
import { IRenderManager } from "../interface/IRenderManager";
import { RenderManagerParams, RenderManager } from "./RenderManager";
import { CharacterManager } from "./CharacterManager";
import { ICharacterManager } from "../interface/ICharacterManager";
import { Character } from "../models/Character";
import { ChoiceScene, ChoiceSceneParams } from "../models/ChoiceScene";

const SceneFactory : LooseObject = {
  dialogScene: DialogScene,
  cutScene: CutScene,
  choiceScene: ChoiceScene
}

const debugSceneRenderer = (params : LooseObject) : LooseObject => params;

export class SceneManager implements ISceneManager {
  private scenes : IAbstractScene[];
  private activeSceneIndex : number = 0;
  private renderManager : IRenderManager;
  private characterManager : ICharacterManager;

  constructor(config : LooseObject) {
    // initialize renderManager
    const renderManagerParams : RenderManagerParams = {
      cutSceneRenderer: config.cutSceneRenderer || debugSceneRenderer,
      dialogSceneRenderer: config.dialogSceneRenderer || debugSceneRenderer,
      speechLineRenderer: config.speechLineRenderer || debugSceneRenderer
    }
    this.renderManager = new RenderManager(renderManagerParams);
    this.characterManager = new CharacterManager(config);
    if (config.scenes) this.scenes = this.serializeScenes(config.scenes);
  }

  public serializeScenes(scenes : LooseObject[]) {
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
      } else if (sceneType === 'choiceScene') {
        sceneParams = {
          bgImage: s.bgImage,
          line: s.line,
          gotoNextScene: () => this.gotoNextScene(),
          renderManager: this.renderManager,
          order: index,
          addScenes: (scenes : LooseObject[]) => this.addScenes(scenes),
          branchOptions: s.branchOptions
        } as ChoiceSceneParams
      }
      return new SceneFactory[sceneType](sceneParams);
    });
  }

  public _getScenes() : IAbstractScene[] {
    return this.scenes;
  }

  public addScenes(scenes : LooseObject[]) {
    const serializedScenes = this.serializeScenes(scenes);
    this.scenes = this.scenes.concat(serializedScenes);
  }

  private gotoNextScene() : boolean {
    if (this.activeSceneIndex < this.scenes.length - 1) {
      this.activeSceneIndex++;
      return true;
    } else {
      return false;
    }
  }

  public render() : LooseObject {
    this.scenes.sort((a : IAbstractScene, b : IAbstractScene) => {
      return a.order - b.order;
    })
    const activeScene = this.scenes[this.activeSceneIndex];
    return activeScene.render()
  }

  public getCharacterById(id : string) : LooseObject {
    const serializedChar : Character =  this.characterManager.getCharacterById(id);
    return {
      name: serializedChar.getName(),
      reactions: serializedChar.getReactions(),
      id: serializedChar.getCharacterId
    }
  }
}