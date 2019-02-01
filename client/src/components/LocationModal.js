import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
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

class LocationModal extends React.Component {
  state = {
    open: false,
    name: '',
    storage: []
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

  loadStorage = () => {
    API.getStorage()
      .then(res => {
        this.setState({ storage: res.data })
      })
  }

  onFormSubmit = event => {
    event.preventDefault()
    API.addStorage({
      name: this.state.name
    })
    .then( () => this.handleClose())
  }

  componentDidMount() {
    this.loadStorage()
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Fab aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>

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
                  label="Location Name"
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
            <Button onClick={this.submitForm}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

LocationModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LocationModal
)