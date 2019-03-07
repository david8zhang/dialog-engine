import * as React from 'react';
import { LooseObject } from '../../../interface/LooseObject';
import SpeechLine from '../SpeechLine/SpeechLine';
import { ISceneManager } from '../../../interface/ISceneManager';

import './dialogScene.css';
import MultiSpeechLine from '../MultiSpeechLine/MultiSpeechLine';

export interface DialogSceneProps {
  sceneManager?: ISceneManager;
  activeSpeechLine: LooseObject;
  bgImage: string;
  update?: Function;
}

class DialogScene extends React.Component<DialogSceneProps, {}> {
  renderSpeechLine() {
    // Render a multi dialog scene
    const { speakerId, isMulti, line } = this.props.activeSpeechLine;
    const gotoNextSpeechLine = () => {
      this.props.activeSpeechLine.gotoNextSpeechLine();
      this.props.update();
    }

    if (isMulti) {
      console.log(this.props.activeSpeechLine);
      const leftCharacterReactions = this.props.activeSpeechLine.leftCharacters;
      const rightCharacterReactions = this.props.activeSpeechLine.rightCharacters;
      const leftCharacterImgMap : LooseObject = {};
      const rightCharacterImgMap : LooseObject = {};
      Object.keys(leftCharacterReactions).forEach((characterId) => {
        leftCharacterImgMap[characterId] = this.props.sceneManager.getCharacterById(characterId);
      })
  
      Object.keys(rightCharacterReactions).forEach((characterId) => {
        rightCharacterImgMap[characterId] = this.props.sceneManager.getCharacterById(characterId);
      })
      return (
        <MultiSpeechLine
          text={line}
          gotoNextSpeechLine={gotoNextSpeechLine}
          speakerId={speakerId}
          leftCharReactionMap={leftCharacterReactions}
          rightCharReactionMap={rightCharacterReactions}
          sceneManager={this.props.sceneManager}
          leftCharacterImgMap={leftCharacterImgMap}
          rightCharacterImgMap={rightCharacterImgMap}
        />
      )
    }

    // Render a single dialog scene
    const { speaker } = this.props.activeSpeechLine;
    const leftParams = this.props.activeSpeechLine.leftCharacter;
    const rightParams = this.props.activeSpeechLine.rightCharacter;
    const leftCharacter = this.props.sceneManager.getCharacterById(leftParams.id);
    const rightCharacter = this.props.sceneManager.getCharacterById(rightParams.id);
    return (
      <SpeechLine
        text={line}
        side={this.props.activeSpeechLine.speaker}
        speakerName={speaker === 'left' ? leftCharacter.name : rightCharacter.name}
        gotoNextSpeechLine={gotoNextSpeechLine}
        rightCharReaction={rightParams.reaction}
        leftCharReaction={leftParams.reaction}
        rightCharacterImages={rightCharacter.reactions}
        leftCharacterImages={leftCharacter.reactions}
      />
    )
  }
  render() {
    return (
      <div className='dialogScene'>
        <img
          src={this.props.bgImage}
          className='backgroundImage'
        />
        { this.renderSpeechLine() }
      </div>
    )
  }
}

export default DialogScene;