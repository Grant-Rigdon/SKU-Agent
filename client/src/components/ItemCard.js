import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';



const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});


class Item extends Component {


  handleClick = () => {
    console.log('clicked')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Chip
          avatar={<Avatar>MB</Avatar>}
          label={this.props.name}
          onClick={this.handleClick}
          className={classes.chip}
        />
      </div>
    )
  }

}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Item)