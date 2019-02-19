import * as React from 'react';
import { SceneRenderer } from '../components';

import { scene as shrekScene } from '../dialog/shrek';

class TestSceneManager extends React.Component {
  render() {
    const { scenes, characters } = shrekScene;
    return (
      <SceneRenderer
        scenes={scenes}
        characters={characters}
      />
    );
  }
}

export default TestSceneManager;
