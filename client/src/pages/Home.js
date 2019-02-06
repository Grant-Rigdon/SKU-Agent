import React, { Component } from 'react'
import Accordian from '../components/Accordion'
import { withStyles } from '@material-ui/core/styles'
import LocationModal from '../components/LocationModal'
import SkuModal from '../components/SkuModal';

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
    
})

class Home extends Component {
    state = {}

    
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Accordian />
                <SkuModal />
                <LocationModal />
            </div>
        )
    }
}

export default withStyles(styles)(Home)