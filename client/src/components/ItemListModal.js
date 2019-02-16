import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
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
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    backgroundColor: theme.palette.secondary.main
  },
})

class ItemListModal extends React.Component {
  state = {
    open: false,
    quantity: ''
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

  

  onFormSubmit = () => {
           
    API.addQueue({
        _id: this.props.item._id,
        name: this.props.item.name,
        location: this.props.item.location,
        quantity: this.state.quantity
  })
    .then( () => {        
        this.handleClose()
    })
  }



  render() {
    const { classes } = this.props

    return (
      <div>
        <Button className={classes.newSku} onClick={this.handleClickOpen} color="primary">
            Add to Queue
        </Button>

        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form className={classes.container} onSubmit={this.onFormSubmit}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="outlined-name"
                  label="Quantity Needed"
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

ItemListModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItemListModal
)