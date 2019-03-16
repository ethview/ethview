import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
import store from './store'
import WelcomeOrDashboard from './containers/WelcomeOrDashboard';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#27699f'
    }
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F1F2F7 !important;
    font-family: 'Roboto', sans-serif !important;
    color: #4f6d8d;
  }
`

 
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <WelcomeOrDashboard />
    </MuiThemeProvider>
  </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
