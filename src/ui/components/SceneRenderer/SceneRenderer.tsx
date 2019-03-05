import * as React from 'react'
import { ISceneManager } from '../../../interface/ISceneManager';

/** CSS files */
import './sceneRenderer.css';
import { SceneManager } from '../../../managers/SceneManager';
import { LooseObject } from '../../../interface/LooseObject';
import DialogScene from '../DialogScene/DialogScene';
import CutScene from '../CutScene/CutScene';

export interface SceneRendererProps {
  scenes: LooseObject[];
  characters: LooseObject[]
}

class SceneRenderer extends React.Component<SceneRendererProps, {}> {
  public sceneManager : ISceneManager;
  componentDidMount() {
    const config = {
      characters: this.props.characters,
      scenes: this.props.scenes
    };
    this.sceneManager = new SceneManager(config);
    this.forceUpdate();
  }

  renderScene(sceneProps : LooseObject) : React.ReactNode {
    const { sceneType, bgImage, line } = sceneProps;
    switch (sceneType) {
      case 'dialogScene': {
        return (
          <DialogScene
            sceneManager={this.sceneManager}
            activeSpeechLine={sceneProps.activeSpeechLine} 
            bgImage={bgImage}
            update={() => this.forceUpdate()}
          />
        );
      }
      case 'cutScene': {
        return (
          <CutScene
            line={line}
            bgImage={bgImage}
            update={() => this.forceUpdate()}
          />
        )
      }
      case 'choiceScene': {
        return (
          <div />
        )
      }
      default:
        return <div />
    }
  }

  render() {
    if (!this.sceneManager) {
      return <div />
    }
    const sceneProps = this.sceneManager.render();
    return (
      <div className='sceneRendererWrapper'>
        { this.renderScene(sceneProps) }
      </div>
    )
  }
}

export default SceneRenderer;