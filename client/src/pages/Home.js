import React, { Component } from 'react'
import Accordian from '../components/Accordion'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        minWidth: 320,
        maxWidth: 768,
        height: 'auto',
        position: 'absolute',
        top: '8%',
        left: 0,
        right: 0,
        margin: 'auto'
    }
})

class Home extends Component {
    state = {}

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Accordian />
            </div>
        )
    }
}

export default withStyles(styles)(Home)