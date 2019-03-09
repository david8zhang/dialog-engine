import * as React from 'react';
import '../../../css/cutscene.css';
import DialogBox from '../DialogBox/DialogBox';

export interface CutSceneProps {
  bgImage: string;
  line: string;
  update: Function;
  gotoNextScene: Function;
}

class CutScene extends React.Component<CutSceneProps, any> {
  render() {
    return (
      <div className='cutScene'>
        <img
          src={this.props.bgImage}
          className='backgroundImage'
        />
        <DialogBox
          style={{ position: 'absolute', bottom: '0px', minHeight: '15%' }}
          text={this.props.line}
          isRight={false}
          gotoNext={() => {
            this.props.gotoNextScene();
            this.props.update()
          }}
        />
      </div>
    )
  }
}

export default CutScene;