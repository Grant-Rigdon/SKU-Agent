import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import API from '../utils/API'


const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    minWidth: 160,
    maxWidth: 320,
    height: 'auto'
  },
  buttonContainer: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    
  },
  badge: {
    backgroundColor: theme.palette.secondary.main
  }
})

class QueueItemCard extends Component {
  state = { 
      quantityNeeded: this.props.item.quantity,
      item: this.props.item
   }
  
  handleDelete = (id) => {    
    API.removeQueue({
      id: id,
      route: 'queue'
    })
  }

  onClick = (current, location) => {
    let currentNum = current[0].quantity 

    if (currentNum > this.state.quantityNeeded){
      API.removeItem({
        id: this.props.item._id,
        route: 'home',
        location: location
      })
      API.updateStorage({
        item:  this.state.item,      
        location: location,
        quantity: ( parseInt(currentNum) - parseInt(this.state.quantityNeeded))})
      .then( () => {
          this.handleDelete(this.props.item._id)
      })
       
      
    }else{
      this.setState({ quantityNeeded: (parseInt(this.state.quantityNeeded) - parseInt(currentNum) )})
      API.removeItem({
        id: this.props.item._id,
        route: 'home',
        location: location})
      .then( () => {
          this.handleDelete(this.props.item._id)
      })
    }
    

  }

  render() {
    const { classes } = this.props
    
    return (
      <div>
        <Paper className={classes.root} elevation={1}>        
          <Typography variant="h5" component="h3">
            {this.props.item.name}
            <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={()=>this.handleDelete(this.props.item._id)}
              >
                <CloseIcon />
            </IconButton>
          </Typography>
          <Typography component="p">
            Quantity Needed: {this.state.quantityNeeded}
          </Typography>
          <div className={classes.buttonContainer} >
          {this.state.item.location.map(location => (
            <Badge className={classes.badge} key={location._id} badgeContent={location.items.map(item => (item.item === this.props.item._id ? item.quantity : ""))}>
              <Button variant="contained" size="small" className={classes.button} onClick={()=>this.onClick(location.items.filter(item => (item.item === this.props.item._id )),location._id)}>{location.name}</Button>
            </Badge>
          ))}
          </div>
        </Paper>
      </div>
    )
  }  
}



export default withStyles(styles)(QueueItemCard)