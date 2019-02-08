import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'
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
    state={ 
        items: [],
        quantity:""
     }

    loadItems = () => {
        API.getItem()
          .then(res => {
            this.setState({ items: res.data })        
          })
        
      }
    
    componentDidMount() {
    this.loadItems()
    }
    onClick = item => { 
        console.log(item)
           
        API.addQueue({
            _id: item._id,
            name: item.name,
            location: item.location,
            // quantity: this.state.quantity
    })
    .then( () => {        
        
    })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={16}>
                {this.state.items.map(item => (
                    <Grid item xs={"auto"} onClick={()=>this.onClick(item)}>
                        <ItemCard name= {item.name}/>
                    </Grid>
                ))}    
                </Grid>
            </div >

        )
    }
}


export default withStyles(styles)(Queue)