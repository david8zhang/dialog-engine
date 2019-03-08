import * as React from 'react';
import { LooseObject } from '../../../interface/LooseObject';
import DialogBox from '../DialogBox/DialogBox';
import { ISceneManager } from '../../../interface/ISceneManager';
import './multi-speech-line.css';

export interface MultiSpeechLineProps {
  text: string;
  rightCharacterImgMap: LooseObject;
  leftCharacterImgMap: LooseObject;
  leftCharReactionMap: LooseObject;
  rightCharReactionMap: LooseObject;
  gotoNextSpeechLine: Function;
  speakerId: string;
  sceneManager?: ISceneManager;
}

class MultiSpeechLine extends React.Component<MultiSpeechLineProps, any> {
  renderCharacters(isRight : boolean) {
    let charactersImageMap : LooseObject;
    let characterReactions : LooseObject;
    if (isRight) {
      charactersImageMap = this.props.rightCharacterImgMap;
      characterReactions = this.props.rightCharReactionMap;
    } else {
      charactersImageMap = this.props.leftCharacterImgMap;
      characterReactions = this.props.leftCharReactionMap;
    }
    return Object.keys(charactersImageMap).map((characterId : string, index : number) => {
      const characterImages : LooseObject = charactersImageMap[characterId];
      const characterReaction : string = characterReactions[characterId].reaction;
      const isActive = this.props.speakerId === characterId;
      const offset = index * 200

      return Object.keys(characterImages.reactions).map((reaction : string) => {
        const src = characterImages.reactions[reaction];
        return (
          <div
            className={`character ${isActive ? 'active': ''} ${isRight ? 'right' : ''}`}
            style={{
              left: isRight ? '' : `${offset}px`,
              right: isRight ? `${offset}px` : '',
              zIndex: 1000 - index + (isActive ? 1000 : 0),
              opacity: characterReaction === reaction ? 1 : 0
            }}
          >
            <img
              className='characterImg'
              src={src}
            />
          </div>
        )
      })
    })
  }
  renderDialog() {
    let side = 'left';
    Object.keys(this.props.rightCharacterImgMap).forEach((characterId : string) => {
      if (characterId === this.props.speakerId) {
        side = 'right'
      }
    });
    let speakerName = this.props.sceneManager.getCharacterById(this.props.speakerId).name;
    return (
      <DialogBox
        style={{ zIndex: '3000' }}
        text={this.props.text}
        characterName={speakerName}
        gotoNext={this.props.gotoNextSpeechLine}
        isRight={side === 'right'}
      />
    )
  }
  render() {
    return (
      <div className='multiSpeechLineWrapper'>
        <div className='charactersWrapper'>
          { this.renderCharacters(false) }
          { this.renderCharacters(true) }
        </div>
        { this.renderDialog() }
      </div>
    )
  }
}

export default MultiSpeechLine;