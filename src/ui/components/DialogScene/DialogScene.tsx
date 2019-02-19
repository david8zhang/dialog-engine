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
    const { leftCharacter, rightCharacter, speaker } = this.props.activeSpeechLine;
    const leftCharObject = this.props.sceneManager.getCharacterById(leftCharacter.id);
    const rightCharObject = this.props.sceneManager.getCharacterById(rightCharacter.id);

    return (
      <div className='dialogScene'>
        <img
          src={this.props.bgImage}
          className='backgroundImage'
        />
        <SpeechLine
          text={this.props.activeSpeechLine.line}
          side={this.props.activeSpeechLine.speaker}
          speakerName={speaker === 'left' ? leftCharObject.name : rightCharObject.name}
          gotoNextSpeechLine={() => {
            this.props.activeSpeechLine.gotoNextSpeechLine();
            this.props.update();
          }}
          rightCharReaction={rightCharacter.reaction}
          leftCharReaction={leftCharacter.reaction}
          rightCharacterImages={rightCharObject.reactions}
          leftCharacterImages={leftCharObject.reactions}
        />
      </div>
    )
  }
}

export default DialogScene;