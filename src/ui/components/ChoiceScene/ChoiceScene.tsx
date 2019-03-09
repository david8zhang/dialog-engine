import * as React from 'react';
import '../../../css/choiceScene.css';
import DialogBox from '../DialogBox/DialogBox';
import { LooseObject } from '../../../interface/LooseObject';
import { ISceneManager } from '../../../interface/ISceneManager';

export interface ChoiceSceneProps {
  bgImage: string;
  line: string;
  update: Function;
  branchOptions: LooseObject;
  chooseBranchOption: Function;
  side: string;
  rightCharacter: LooseObject;
  leftCharacter: LooseObject;
  sceneManager: ISceneManager;
}

class ChoiceScene extends React.Component<ChoiceSceneProps, any> {
  constructor(props : any) {
    super(props);
    this.state = {
      showChoices: false
    }
  }
  renderRightCharacter() {
    const rightCharacterReaction = this.props.rightCharacter.reaction;
    const rightCharacterImages = this.props.sceneManager.getCharacterById(this.props.rightCharacter.id).reactions;
    const isActive = this.props.side === 'right';
    return Object.keys(rightCharacterImages).map((reaction : string) => {
      const src = rightCharacterImages[reaction];
      return (
        <div className={`choiceCharacter ${isActive ? 'active': ''} right`}>
          <img
            style={{
              opacity: rightCharacterReaction === reaction ? 1 : 0
            }}
            className='characterImg'
            src={src}
          />
        </div>
      )
    })
  }
  renderLeftCharacter() {
    const leftCharacterReaction = this.props.leftCharacter.reaction;
    const leftCharacterImages = this.props.sceneManager.getCharacterById(this.props.leftCharacter.id).reactions;
    const isActive = this.props.side === 'left';
    return Object.keys(leftCharacterImages).map((reaction : string) => {
      const src = leftCharacterImages[reaction];
      return (
        <div className={`choiceCharacter ${isActive ? 'active': ''}`}>
          <img
            style={{
              opacity: leftCharacterReaction === reaction ? 1 : 0
            }}
            className='characterImg'
            src={src}
          />
        </div>
      )
    })
  }
  renderChoices() {
    if (!this.state.showChoices) {
      return <div />;
    }
    return (
      <div
        className='optionsWrapper'
        style={{
          left: this.props.side === 'right' ? '25%' : '',
          right: this.props.side === 'left' ? '25%' : ''
        }}
      >
        { Object.keys(this.props.branchOptions).map((option) => (
          <p
            className='option'
            onClick={() => {
              this.props.chooseBranchOption(this.props.branchOptions[option]);
              this.props.update();
            }}
          >
            "{option}"
          </p>
        ))}
      </div>
    )
  }
  render() {
    let name;
    if (this.props.side === 'left') {
      name = this.props.sceneManager.getCharacterById(this.props.leftCharacter.id).name;
    } else {
      name = this.props.sceneManager.getCharacterById(this.props.rightCharacter.id).name;
    }

    return (
      <div className='choiceSceneWrapper'>
        <img
          src={this.props.bgImage}
          className='backgroundImage'
        />
        <div className='choiceCharactersWrapper'>
          { this.renderLeftCharacter() }
          { this.renderRightCharacter() }
        </div>
        { this.renderChoices() }
        <DialogBox
          style={{ position: 'absolute', bottom: '0px', minHeight: '15%' }}
          characterName={name}
          onTypingDone={() => {
            this.setState({ showChoices: true });
          }}
          text={this.props.line}
          isRight={this.props.side === 'right'}
          gotoNext={() => {
            this.setState({ showChoices: true });
          }}
        />
      </div>
    )
  }
}

export default ChoiceScene;