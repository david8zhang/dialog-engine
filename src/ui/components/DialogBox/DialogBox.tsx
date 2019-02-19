import * as React from 'react';
import Typist from 'react-typist';

import './dialog-box.css';

export interface DialogBoxProps {
  characterName?: string;
  text: string;
  gotoNext: Function;
  isRight: boolean;
  style?: any;
}

class DialogBox extends React.Component<DialogBoxProps, any> {
  constructor(props : any) {
    super(props);
    this.state = {
      containerKey: Date.now()
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps : DialogBoxProps) {
    if (nextProps.text !== this.props.text) {
      this.setState({ containerKey: Date.now() })
    }
  }
  render() {
    return (
      <div
        style={this.props.style}
        key={this.state.containerKey}
        className='dialogBoxWrapper'
        onKeyDown={(e) => {
          if (e.keyCode == 13) {
            this.props.gotoNext();
          }
        }}
        tabIndex={0}  
      > 
      {  
        this.props.characterName &&
        <div
          className='characterNameBox'
          style={{
            right: this.props.isRight ? '20px' : 'unset'
          }}
        >
          <p className='characterName'>
            {this.props.characterName}
          </p>
        </div>
      }
        <Typist
          avgTypingDelay={5}
          cursor={{ show: false }}
        >
          <p className='text'>
            {this.props.text}
          </p>
        </Typist>
      </div>
    )
  }
}

export default DialogBox;
