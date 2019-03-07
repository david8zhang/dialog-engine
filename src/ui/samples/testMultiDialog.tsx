import * as React from 'react';
import { scene } from '../dialog/multi';
import { SceneRenderer } from '../components';

class TestMultiDialog extends React.Component {
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

export default TestMultiDialog;
