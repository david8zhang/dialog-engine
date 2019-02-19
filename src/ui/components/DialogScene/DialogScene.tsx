import * as React from 'react';
import { LooseObject } from '../../../interface/LooseObject';
import SpeechLine from '../SpeechLine/SpeechLine';
import { ISceneManager } from '../../../interface/ISceneManager';

import './dialogScene.css';

export interface DialogSceneProps {
  sceneManager?: ISceneManager;
  activeSpeechLine: LooseObject;
  bgImage: string;
  update?: Function;
}

class DialogScene extends React.Component<DialogSceneProps, {}> {
  render() {
    const { speaker } = this.props.activeSpeechLine;
    const leftParams = this.props.activeSpeechLine.leftCharacter;
    const rightParams = this.props.activeSpeechLine.rightCharacter;
    const leftCharacter = this.props.sceneManager.getCharacterById(leftParams.id);
    const rightCharacter = this.props.sceneManager.getCharacterById(rightParams.id);

    return (
      <div className='dialogScene'>
        <img
          src={this.props.bgImage}
          className='backgroundImage'
        />
        <SpeechLine
          text={this.props.activeSpeechLine.line}
          side={this.props.activeSpeechLine.speaker}
          speakerName={speaker === 'left' ? leftCharacter.name : rightCharacter.name}
          gotoNextSpeechLine={() => {
            this.props.activeSpeechLine.gotoNextSpeechLine();
            this.props.update();
          }}
          rightCharReaction={rightParams.reaction}
          leftCharReaction={leftParams.reaction}
          rightCharacterImages={rightCharacter.reactions}
          leftCharacterImages={leftCharacter.reactions}
        />
      </div>
    )
  }
}

export default DialogScene;