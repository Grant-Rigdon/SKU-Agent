import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'


const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    backgroundColor: theme.palette.secondary.main
  },
})

class AddItemFab extends React.Component {
  state = {
    open: false,
    itemName: '',
  }

  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Fab aria-label="Add" href="/itemlist" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

AddItemFab.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddItemFab)