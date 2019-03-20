import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#819ca9',
            main: '#546e7a',
            dark: '#29434e',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '##ffff52',
            main: '#0892d0',
            dark: '#c7a600',
            contrastText: '#ffffff'
        },
        error: {
            light: '#ff5131',
            main: '#d50000',
            dark: '#9b0000',
            contrastText: '#ffffff'
        },
        background: {
            default: '#e4e9eb'
        }
    }
})

function startApp() {

    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>,
        document.getElementById("root")
    )
}

if (!window.cordova) {
    startApp()
} else {
    document.addEventListener('deviceready', startApp, false)
}
