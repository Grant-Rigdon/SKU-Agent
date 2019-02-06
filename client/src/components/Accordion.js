import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import StorageTable from './Table'
import API from '../utils/API'
import ItemModal from './ItemModal';

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

  handleClick = () => {

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

  
    
 

  render() {
    const { classes } = this.props
    const { expanded } = this.state
    this.loadStorage()
    return (
      <div className={classes.root}>
      {this.state.storage.map(storage => (
        <ExpansionPanel key={storage.name} expanded={expanded === storage.name} onChange={this.handleChange(storage.name)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{storage.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails >
            <StorageTable items={storage.items}/>
          </ExpansionPanelDetails>
          <ItemModal id={storage._id}/>
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