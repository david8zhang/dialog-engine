import * as React from 'react';
import '../../../css/speech-line.css';
import DialogBox from '../DialogBox/DialogBox';
import { LooseObject } from '../../../interface/LooseObject';

export interface SpeechLineProps {
  text: string;
  speakerName: string;
  rightCharacterImages: LooseObject;
  leftCharacterImages: LooseObject;
  leftCharReaction: string;
  rightCharReaction: string;
  gotoNextSpeechLine: Function;
  side: string;
}

class SpeechLine extends React.Component<SpeechLineProps, {}> {
  renderRightCharacter() {
    const isActive = this.props.side === 'right';
    return Object.keys(this.props.rightCharacterImages).map((reaction : string) => {
      const src = this.props.rightCharacterImages[reaction];
      return (
        <div className={`character ${isActive ? 'active': ''} right`}>
          <img
            style={{
              opacity: this.props.rightCharReaction === reaction ? 1 : 0
            }}
            className='characterImg'
            src={src}
          />
        </div>
      )
    })
  }
  renderLeftCharacter() {
    const isActive = this.props.side === 'left';
    return Object.keys(this.props.leftCharacterImages).map((reaction : string) => {
      const src = this.props.leftCharacterImages[reaction];
      return (
        <div className={`character ${isActive ? 'active': ''}`}>
          <img
            style={{
              opacity: this.props.leftCharReaction === reaction ? 1 : 0
            }}
            className='characterImg'
            src={src}
          />
        </div>
      )
    })
  }
  render() {
    return (
      <div className='speechLineWrapper'>
        <div className='charactersWrapper'>
          { this.renderLeftCharacter() }
          { this.renderRightCharacter() }
        </div>
        <DialogBox
          text={this.props.text}
          characterName={this.props.speakerName}
          gotoNext={this.props.gotoNextSpeechLine}
          isRight={this.props.side === 'right'}
        />
      </div>
    )
  }
}

export default SpeechLine;
