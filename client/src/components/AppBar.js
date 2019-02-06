import React from "react"
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Menu from '../components/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        
    },
    appName: {
        background: theme.palette.primary,
        color: theme.palette.primary.text,
        marginLeft: 10
    },
    queueLink: {
        marginLeft: 'auto'
    }
})


function Nav(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" color="inherit" className={classes.appName}>
                        SKU Agent
                    </Typography>
                    <Link to="/queue" className={classes.queueLink}>
                        <Badge color="primary" badgeContent={4} >
                            <Button>Queue</Button>
                        </Badge>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Nav)