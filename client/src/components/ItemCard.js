import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ItemListModal from './ItemListModal';



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

<<<<<<< HEAD
function Item(props) {
  const { classes } = props

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {props.item.name}
        </Typography>
        <ItemListModal item={props.item}/>
      </Paper>
    </div>
  )
=======

  function Item(props) {
    const { classes } = props
  
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            {props.name}
          </Typography>
        </Paper>
      </div>
    )

>>>>>>> f530edb029e1becb0c43392ca2ba6dfe11f855c5
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Item)