import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'


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

function Item(props) {
  const { classes } = props
  // console.log(props.item)
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {props.item.name}
        </Typography>
        <Typography component="p">
          Quantity Needed: {props.item.quantity}
        </Typography>
        {props.item.location.map(location => (
        <div className={classes.buttonContainer} key={location._id}>
          <Badge className={classes.badge} badgeContent={location.items.map(item => (item.item === props.item._id ? item.quantity : ""))}>
            <Button variant="contained" size="small" className={classes.button}>{location.name}</Button>
          </Badge>
        </div>
        ))}
      </Paper>
    </div>
  )
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Item)