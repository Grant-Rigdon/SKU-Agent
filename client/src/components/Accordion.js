import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import StorageTable from './Table'

const styles = theme => ({
  root: {
    minWidth: 320,
    maxWidth: 768,
    height: 'auto',
    position: 'absolute',
    top: '8%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  panel: {
    marginTop: 0
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
})

class Accordion extends React.Component {
  state = {
    expanded: null,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  }

  render() {
    const { classes } = this.props
    const { expanded } = this.state

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Location Name</Typography>
            <Typography className={classes.secondaryHeading}>Type of Items Stored Here</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails >
            <StorageTable />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

Accordion.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Accordion)