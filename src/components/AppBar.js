import React from "react"
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appName: {
        backgroundColor: theme.palette.primary,
        color: theme.palette.primary.light,
        flexGrow: 1,
        marginLeft: 10
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
})


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