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
  newSku: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 10,
    backgroundColor: theme.palette.secondary.main
}
})

class SkuModal extends React.Component {
  state = {
    open: false,
    name: '',
    sku: '',
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

  

  onFormSubmit = event => {
    console.log('clicked')
    event.preventDefault()
    API.addItem({
      name: this.state.name,
      _id: this.state.sku
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
            Add SKU
        </Button>

        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Add new SKU</DialogTitle>
          <DialogContent>
            <form className={classes.container} onSubmit={this.onFormSubmit}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="outlined-sku"
                  label="Sku SKU"
                  className={classes.textField}
                  value={this.state.sku}
                  onChange={this.handleChange('sku')}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Sku Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
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

SkuModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SkuModal
)