import React from "react"
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
        flexGrow: 1,
    },
    appName: {
        flexGrow: 1,
        marginLeft: 10
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}


function Nav(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
            <Typography variant="h6" color="inherit" className={classes.appName}>
                SKU Agent
            </Typography>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Nav)