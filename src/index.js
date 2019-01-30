import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { yellow } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: grey[200],
            main: grey[600],
            dark: '#EF6C00',
            contrastText: 'rgb(0,0,0)'
        },
        secondary: {
            light: yellow[200],
            main: yellow[600],
            dark: '#EF6C00',
            contrastText: 'rgb(0,0,0)'
        },
        error: {
            light: grey[200],
            main: grey[600],
            dark: '#EF6C00',
            contrastText: 'rgb(0,0,0)'
        },
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById("root")
)