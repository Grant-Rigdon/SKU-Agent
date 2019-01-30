import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

function Item(props) {
  const { classes } = props

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <Badge color="primary" badgeContent={4} className={classes.margin}>
          <Button variant="contained">Button</Button>
        </Badge>
      </Paper>
    </div>
  )
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Item)