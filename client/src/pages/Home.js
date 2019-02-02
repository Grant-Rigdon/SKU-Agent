import React, { Component } from 'react'
import Accordian from '../components/Accordion'
import { withStyles } from '@material-ui/core/styles'
import LocationModal from '../components/LocationModal'
import Button from '@material-ui/core/Button'
import { relative } from 'path';

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
    },
    newSku: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 10,
        backgroundColor: theme.palette.secondary.main
    }
})

class Home extends Component {
    state = {}

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Accordian />
                <Button className={classes.newSku} color="primary">
                    Add SKU
                </Button>
                <LocationModal />
            </div>
        )
    }
}

export default withStyles(styles)(Home)