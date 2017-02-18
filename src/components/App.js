import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import SearchBox from './SearchBox';
import makeAnimatedValidationSearchBox from './SearchBoxController';
const AnimatedSearchBox = makeAnimatedValidationSearchBox(SearchBox);

class App extends Component {
  render() {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <MuiThemeProvider>
        <div style={style}>
          <AnimatedSearchBox />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
