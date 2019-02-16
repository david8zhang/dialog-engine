import { expect } from 'chai';
import 'mocha';
import { spy } from 'sinon';

import { CutScene, CutSceneParams } from '../../src/models/CutScene';
import { RenderManager } from '../../src/managers/RenderManager';

describe('Cut Scene', () => {
  const renderManager = new RenderManager({});

  it('renders a cutscene', () => {
    const cutSceneParams : CutSceneParams = {
      bgImage: 'background.jpg',
      line: 'Cut Scene',
      gotoNextScene: null,
      renderManager,
      order: 0
    }
    const cutScene = new CutScene(cutSceneParams);
    const mockComponentProps = cutScene.render();
    expect(mockComponentProps.bgImage).to.equal('background.jpg');
    expect(mockComponentProps.line).to.equal('Cut Scene');
  })

  it('correctly calls the gotoNextScene function', () => {
    const gotoNextScene = spy();
    const cutSceneParams : CutSceneParams = {
      bgImage: 'background.jpg',
      line: 'Cut Scene',
      gotoNextScene,
      renderManager,
      order: 0
    }
    const cutScene = new CutScene(cutSceneParams);
    const mockComponentProps = cutScene.render();
    mockComponentProps.gotoNextScene();
    expect(gotoNextScene.called).to.equal(true);
  })
})