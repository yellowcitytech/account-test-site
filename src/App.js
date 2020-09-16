import React from 'react';
import './App.css';
import Main from "./components/Main";
import { MuiThemeProvider} from '@material-ui/core/styles';
import DefaultTheme from './components/styles/DefaultTheme';

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={DefaultTheme}>
        <div className="App">
          <Main />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
