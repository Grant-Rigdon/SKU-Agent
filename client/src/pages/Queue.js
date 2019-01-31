import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'
import Modal from '../components/Modal'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        minWidth: 320,
        maxWidth: 1080,
        height: 'auto',
        position: 'absolute',
        top: '10%',
        left: 0,
        right: 0,
        margin: 'auto',
        flexGrow: 1
    }
})

class Queue extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={"auto"}>
                        <ItemCard />
                    </Grid>
                    <Grid item xs={"auto"}>
                        <ItemCard />
                    </Grid>
                    <Grid item xs={"auto"}>
                        <ItemCard />
                    </Grid>
                    <Grid item xs={"auto"}>
                        <ItemCard />
                    </Grid>
                    <Grid item xs={"auto"}>
                        <ItemCard />
                    </Grid>
                    <Grid item xs={"auto"}>
                        <ItemCard />
                    </Grid>
                </Grid>

                <Modal />
            </div >

        )
    }
}


export default withStyles(styles)(Queue)