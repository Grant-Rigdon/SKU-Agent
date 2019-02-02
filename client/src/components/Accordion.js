import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import StorageTable from './Table'
import Button from '@material-ui/core/Button'
import API from '../utils/API'

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
    storage: []
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  }
  loadStorage = () => {
    API.getStorage()
      .then(res => {
        this.setState({ storage: res.data })
      })
  }

  componentDidMount() {
    this.loadStorage()
  }

  render() {
    const { classes } = this.props
    const { expanded } = this.state

    return (
      <div className={classes.root}>
      {this.state.storage.map(storage => (
        <ExpansionPanel expanded={expanded === storage.name} onChange={this.handleChange(storage.name)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{storage.name}</Typography>
            <Typography className={classes.secondaryHeading}>Items Stored Here</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails >
            <StorageTable items={storage.items}/>
          </ExpansionPanelDetails>
          <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
        </ExpansionPanel>
      ))}
      </div>
    )
  }
}

Accordion.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Accordion)