import * as React from 'react';
import SpeechLine from '../components/SpeechLine/SpeechLine';
import { LooseObject } from '../../interface/LooseObject';

const textSamples = [
  'Hello there. Welcome to the world of Hello, also known as Hello World.',
  "My name is Bob, the Sample Character. I serve to help developers everywhere figure out if their text boxes look wonky or not"
]

const characters : LooseObject[] = [{
  name: 'Waluigi',
  reactions: {
    surprised: 'https://i.kym-cdn.com/photos/images/original/000/804/529/af8.jpg',
    neutral: 'https://www.mariowiki.com/images/thumb/2/27/SuperMarioParty_Waluigi.png/200px-SuperMarioParty_Waluigi.png',
    thinking: 'http://pre10.deviantart.net/c952/th/pre/i/2016/037/4/4/waluigi_by_fawfulthegreat64-d9qrp3q.png'
  },
  characterId: 'waluigi-123'
}, {
  name: 'Shrek',
  reactions: {
    surprised: 'http://pngimg.com/uploads/shrek/shrek_PNG16.png',
    confused: 'https://img.fireden.net/co/image/1528/77/1528778642865.png',
    neutral: 'http://pngimg.com/uploads/shrek/shrek_PNG2.png',
    angry: 'https://banner2.kisspng.com/20180330/tsw/kisspng-shrek-film-series-desktop-wallpaper-animation-shrek-5abea32e8fb343.9011343415224430545886.jpg'
  },
  characterId: 'shrek-123'
}]

const initialState = { textIndex: 0 }

type State = Readonly<typeof initialState>

class TestDialog extends React.Component<{}, State>{
  readonly state : State = initialState;

  render() {
    return (
      <div 
        style={{
          height: '100%',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column-reverse',
          boxSizing: 'border-box'
        }}
      >
        <SpeechLine
          text={textSamples[this.state.textIndex]}
          speakerName='Bob'
          gotoNextSpeechLine={() => {
            if (this.state.textIndex < textSamples.length - 1) {
              this.setState({ textIndex: this.state.textIndex + 1 })
            }
          }}
          rightCharReaction='neutral'
          leftCharReaction='neutral'
          rightCharacterImages={characters[0].reactions}
          leftCharacterImages={characters[1].reactions}
          side='left'
        />
      </div>
    )
  }
}

export default TestDialog;
