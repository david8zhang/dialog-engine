import * as React from 'react';
import { scene } from '../dialog/shaggy';
import { SceneRenderer } from '../components';

class TestComplexChoice extends React.Component {
  render() {
    const { scenes, characters } = scene;
    return (
      <SceneRenderer
        characters={characters}
        scenes={scenes}
      />
    )
  }
}

export default TestComplexChoice;
