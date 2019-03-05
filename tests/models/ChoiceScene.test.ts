import { expect } from 'chai';
import 'mocha';
import { spy } from 'sinon';

import { RenderManager } from '../../src/managers/RenderManager';
import { ChoiceScene } from '../../src/models/ChoiceScene';

const leftCharacter = {
  reaction: 'surprised',
  id: 'left-1234'
}

const rightCharacter = {
  reaction: 'happy',
  id: 'right-1234'
}

const renderManager = new RenderManager({});

const choiceSceneParams = {
  sceneType: 'choiceScene',
  branchOptions: {
    choice1: [{
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
    choice2: [{
      sceneType: 'cutScene',
      bgImage: 'background.jpg',
      line: 'Cut Scene!'
    }]
  },
  bgImage: 'background.jpg',
  line: 'Choice!',
  renderManager,
};

describe('Choice Scene', () => {
  it('renders a choice scene', () => {
    const choiceScene = new ChoiceScene(choiceSceneParams);
    const mockComponent = choiceScene.render();
    expect(mockComponent.bgImage).to.equal(choiceSceneParams.bgImage);
    expect(mockComponent.line).to.equal(choiceSceneParams.line);
    expect(mockComponent.sceneType).to.equal(choiceSceneParams.sceneType);
  })

  it('correctly calls the chooseBranchOption', () => {
    const addSceneFunc = spy();
    const newParams = {
      ...choiceSceneParams,
      addScenes: addSceneFunc
    }
    const choiceScene = new ChoiceScene(newParams);
    const mockComponent = choiceScene.render();
    mockComponent.chooseBranchOption(choiceSceneParams.branchOptions.choice1)
    expect(addSceneFunc.called).to.equal(true);
    expect(addSceneFunc.calledWith(choiceSceneParams.branchOptions.choice1)).to.equal(true);
  })

  it('correctly calls the gotoNextScene function', () => {
    const gotoNextSceneFunc = spy();
    const newParams = {
      ...choiceSceneParams,
      gotoNextScene: gotoNextSceneFunc
    }
    const choiceScene = new ChoiceScene(newParams);
    const mockComponent = choiceScene.render();
    mockComponent.gotoNextScene();
    expect(gotoNextSceneFunc.called).to.equal(true);
  })
})