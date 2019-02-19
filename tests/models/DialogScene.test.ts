import { expect } from 'chai';
import { spy } from 'sinon';
import 'mocha';

import { DialogScene, DialogParams } from '../../src/models/DialogScene';
import { RenderManager } from '../../src/managers/RenderManager';
import { LooseObject } from '../../src/interface/LooseObject';

const leftCharacter = {
  reaction: 'surprised',
  id: 'left-1234'
}

const rightCharacter = {
  reaction: 'happy',
  id: 'right-1234'
}

describe('Dialog Scene', () => {
  const renderManager = new RenderManager({});
  it('renders the initial speech line correctly', () => {
    const config : DialogParams = {
      bgImage: 'background.jpg',
      speechLines: [{
        line: 'Hello World!',
        leftCharacter,
        rightCharacter,
        speaker: 'left'
      }],
      renderManager,
      gotoNextScene: () : LooseObject => null
    }
    const dialogScene = new DialogScene(config)
    const mockComponent : LooseObject = dialogScene.render();
    expect(mockComponent.bgImage).to.equal('background.jpg');
    expect(mockComponent.activeSpeechLine.leftCharacter).to.deep.equal(leftCharacter);
    expect(mockComponent.activeSpeechLine.rightCharacter).to.deep.equal(rightCharacter);
    expect(mockComponent.activeSpeechLine.speaker).to.equal('left');
    expect(mockComponent.activeSpeechLine.line).to.equal('Hello World!');
  })
  it('renders a speech line sequence correctly', () => {
    const config : DialogParams = {
      bgImage: 'background.jpg',
      speechLines: [{
        line: 'Hello World!',
        leftCharacter,
        rightCharacter,
        speaker: 'left'
      }, {
        line: 'Goodbye World!',
        leftCharacter,
        rightCharacter,
        speaker: 'right'
      }],
      renderManager,
      gotoNextScene: () : LooseObject => null
    }
    const dialogScene = new DialogScene(config);
    const mockComponent1 : LooseObject = dialogScene.render();
    expect(mockComponent1.bgImage).to.equal('background.jpg');
    expect(mockComponent1.activeSpeechLine.leftCharacter).to.equal(leftCharacter);
    expect(mockComponent1.activeSpeechLine.rightCharacter).to.equal(rightCharacter);
    expect(mockComponent1.activeSpeechLine.speaker).to.equal('left');
    expect(mockComponent1.activeSpeechLine.line).to.equal('Hello World!');
    mockComponent1.activeSpeechLine.gotoNextSpeechLine();

    const mockComponent2 : LooseObject = dialogScene.render();
    expect(mockComponent2.bgImage).to.equal('background.jpg');
    expect(mockComponent2.activeSpeechLine.leftCharacter).to.equal(leftCharacter);
    expect(mockComponent2.activeSpeechLine.rightCharacter).to.equal(rightCharacter);
    expect(mockComponent2.activeSpeechLine.speaker).to.equal('right');
    expect(mockComponent2.activeSpeechLine.line).to.equal('Goodbye World!');
  })

  it('correctly calls the gotoNextScene function', () => {
    const gotoNextScene = spy();
    const config : DialogParams = {
      bgImage: 'background.jpg',
      speechLines: [{
        line: 'Hello World!',
        leftCharacter,
        rightCharacter,
        speaker: 'left'
      }, {
        line: 'Goodbye World!',
        leftCharacter,
        rightCharacter,
        speaker: 'right'
      }],
      renderManager,
      gotoNextScene
    }
    const dialogScene = new DialogScene(config);
    const mockComponent1 : LooseObject = dialogScene.render();
    expect(mockComponent1.bgImage).to.equal('background.jpg');
    expect(mockComponent1.activeSpeechLine.leftCharacter).to.deep.equal(leftCharacter);
    expect(mockComponent1.activeSpeechLine.rightCharacter).to.deep.equal(rightCharacter);
    expect(mockComponent1.activeSpeechLine.speaker).to.equal('left');
    expect(mockComponent1.activeSpeechLine.line).to.equal('Hello World!');
    mockComponent1.activeSpeechLine.gotoNextSpeechLine();

    const mockComponent2 : LooseObject = dialogScene.render();
    mockComponent2.activeSpeechLine.gotoNextSpeechLine();
    expect(gotoNextScene.called).to.equal(true);
  })
})