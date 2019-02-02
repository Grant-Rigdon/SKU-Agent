import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'
import ItemModal from '../components/ItemModal'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import API from '../utils/API'

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

    loadQueue = () => {
        API.getQueue()
            .then(res => {
            this.setState({ items: res.data })
            })
    }

    componentDidMount() {
        this.loadQueue()
    }

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

                <ItemModal />
            </div >

        )
    }
}


export default withStyles(styles)(Queue)


