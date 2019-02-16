import { expect } from 'chai';
import 'mocha';

import { SceneManager } from '../../src/managers/SceneManager';

describe('Scene Manager', () => {
  it('renders the correct default scene', () => {
    const scenes = [{
      sceneType: 'dialogScene',
      speechLines: [{
        line: 'Hello World!',
        leftCharacter: 'left.jpg',
        rightCharacter: 'right.jpg',
        speaker: 'left'
      }, {
        line: 'Goodbye World!',
        leftCharacter: 'left.jpg',
        rightCharacter: 'right.jpg',
        speaker: 'right'
      }],
      bgImage: 'background.jpg'
    }, {
      sceneType: 'cutScene',
      bgImage: 'background.jpg',
      line: 'Cut Scene!'
    }]
    const sceneManagerParams = { scenes };
    const sceneManager = new SceneManager(sceneManagerParams);
    const mockComponent = sceneManager.render();
    expect(mockComponent.bgImage).to.equal('background.jpg');
    expect(mockComponent.activeSpeechLine.line).to.equal('Hello World!');
    expect(mockComponent.activeSpeechLine.leftCharacter).to.equal('left.jpg');
    expect(mockComponent.activeSpeechLine.rightCharacter).to.equal('right.jpg');
    expect(mockComponent.activeSpeechLine.speaker).to.equal('left');
  })
})