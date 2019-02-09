import React, { Component } from 'react'
import QueueItemCard from '../components/QueueItemCard'
import AddItemFab from '../components/AddItemFab'
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
    state = { 
        queue: []
     }
    
    loadQueue = () => {
        API.getQueue()
            .then(res => {
            this.setState({ queue: res.data })
            })
    }

    
    
    render() {
        const { classes } = this.props 
        this.loadQueue()   
            
        return (
            <div className={classes.root}>
                <Grid container spacing={16}>
                    {this.state.queue.map(queueItem => (
                    <Grid item xs={"auto"} key={queueItem._id}>
                        <QueueItemCard item={queueItem}/>
                    </Grid>
                    ))}
                </Grid>

                <AddItemFab />
            </div >

        )
    }
}


export default withStyles(styles)(Queue)


