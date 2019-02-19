import { expect } from 'chai';
import { spy } from 'sinon';
import 'mocha';

import { SceneManager } from '../../src/managers/SceneManager';

const leftCharacter = {
  reaction: 'surprised',
  id: 'left-1234'
}

const rightCharacter = {
  reaction: 'happy',
  id: 'right-1234'
}

describe('Scene Manager', () => {
  it('renders the correct default scene', () => {
    const scenes = [{
      sceneType: 'dialogScene',
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
    expect(mockComponent.activeSpeechLine.leftCharacter).to.deep.equal(leftCharacter);
    expect(mockComponent.activeSpeechLine.rightCharacter).to.equal(rightCharacter);
    expect(mockComponent.activeSpeechLine.speaker).to.equal('left');
  })

  it('renders a list of scenes correctly', () => {
    const scenes = [{
      sceneType: 'dialogScene',
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
      bgImage: 'background.jpg'
    }, {
      sceneType: 'cutScene',
      bgImage: 'background.jpg',
      line: 'Cut Scene!'
    }]
    const sceneManagerParams = { scenes };
    const sceneManager = new SceneManager(sceneManagerParams);

    const mockComponent = sceneManager.render();
    mockComponent.activeSpeechLine.gotoNextSpeechLine();
    mockComponent.activeSpeechLine.gotoNextSpeechLine();
    const mockCutSceneComponent = sceneManager.render();

    expect(mockCutSceneComponent.bgImage).to.equal('background.jpg');
    expect(mockCutSceneComponent.line).to.equal('Cut Scene!');
  })

  it('works with custom dialog renderers', () => {
    const customSceneRenderer = spy();
    const sceneManagerParams = {
      scenes: [{
        sceneType: 'dialogScene',
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
        bgImage: 'background.jpg'
      }],
      dialogSceneRenderer: customSceneRenderer
    }
    const sceneManager = new SceneManager(sceneManagerParams);
    sceneManager.render();
    expect(customSceneRenderer.called).to.equal(true);
    const args = customSceneRenderer.getCall(0).args[0];
    expect(args.bgImage).to.equal('background.jpg');
    expect(args.activeSpeechLine.leftCharacter).to.deep.equal(leftCharacter);
    expect(args.activeSpeechLine.rightCharacter).to.deep.equal(rightCharacter);
    expect(args.activeSpeechLine.speaker).to.equal('left');
    expect(args.activeSpeechLine.line).to.equal('Hello World!');
  })

  it('works with custom cutScene renderers', () => {
    const customSceneRenderer = spy();
    const sceneManagerParams = {
      scenes: [{
        sceneType: 'cutScene',
        bgImage: 'background.jpg',
        line: 'Cut Scene!'
      }],
      cutSceneRenderer: customSceneRenderer
    }
    const sceneManager = new SceneManager(sceneManagerParams);
    sceneManager.render();
    expect(customSceneRenderer.called).to.equal(true);
    const args = customSceneRenderer.getCall(0).args[0];
    expect(args.bgImage).to.equal('background.jpg');
    expect(args.line).to.equal('Cut Scene!');
  })
})