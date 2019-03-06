import * as React from 'react';
import { scene } from '../dialog/choice';
import { SceneRenderer } from '../components';

class TestChoice extends React.Component {
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

export default TestChoice;
