import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import API from '../utils/API'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  
})

class ItemModal extends React.Component {
  state = {
    open: false,
    item: '',
    quantity: '',
    items:[]
  }

  handleChange = name => event => {
    this.setState({ [name]: String(event.target.value) })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
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

  onFormSubmit = event => {
    console.log(this.state.item)
    event.preventDefault()
    API.updateStorage({
      item:  this.state.item,      
      location: this.props.id,
      quantity: this.state.quantity})
    .then( () => {
      this.setState({
        item: '',
        quantity: ''
      })
      this.handleClose()
      
    })
  }



  render() {
    const { classes } = this.props
    
    return (
      <div>
        <Button className={classes.newSku} onClick={this.handleClickOpen} color="primary">
            Add Item
        </Button>

        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Add Item to Storage Location</DialogTitle>
          <DialogContent>
            <form className={classes.container} onSubmit={this.onFormSubmit}>
              <FormControl className={classes.formControl}>
                <TextField
                    select
                    className={(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Select Item"
                    value={this.state.item}
                    
                    onChange={this.handleChange('item')}                    
                    >
                    {this.state.items.map(option => (
                        <MenuItem key={option._id} value={option._id}>
                        {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                  id="outlined-quantitiy"
                  label="Item Quantity"
                  className={classes.textField}
                  value={this.state.quantity}
                  onChange={this.handleChange('quantity')}
                  margin="normal"
                  variant="outlined"
                />
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Cancel
            </Button>
            <Button onClick={this.onFormSubmit}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

ItemModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItemModal
)