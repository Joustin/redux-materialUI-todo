import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./App";

import './index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue, lightGreen, yellow } from '@material-ui/core/colors';

import * as serviceWorker from './serviceWorker';


const store = createStore(todoApp);

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: blue,
        secondary: {
            main: yellow[700],
            light: lightGreen.A100,
            dark: yellow[900]
        }
    },
    // type: "dark"
});

//console.log(theme);

render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
