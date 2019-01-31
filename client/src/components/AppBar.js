import React from "react"
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default
    },
    appName: {
        background: theme.palette.primary,
        color: theme.palette.primary.text,
        marginLeft: 10
    }
})


function Nav(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
            <AppBar position="static">
            <Typography variant="h6" color="inherit" className={classes.appName}>
                SKU Agent
            </Typography>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Nav)