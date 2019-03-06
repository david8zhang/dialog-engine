import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './app.css';

import { TestDialog, TestSceneManager, TestChoice } from './samples';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className='app'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a href='/dialog'>Test Dialog Box</a>
          <a href='/choice'>Test Choice Box</a>
          <a href='/shrek'>Shrek</a>
        </div>
        <Router>
          <Switch>
            <Route path='/choice' exact component={TestChoice} />
            <Route path='/dialog' exact component={TestDialog} />
            <Route path='/shrek' exact component={TestSceneManager} />
          </Switch>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('example')
)