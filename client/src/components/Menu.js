import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Link } from 'react-router-dom'

const options = [
  {
    name: 'Add User',
    link: '/'
  },
  {
    name: 'Add SKU',
    link: "/newsku"
  },
  {
    name: 'Add Location',
    link: '/home'
  },
  {
    name: 'Logout',
    link: '/logout'
  }
]

const styles = theme => ({
  link: {
    textDecoration: 'none',
  }
})

const ITEM_HEIGHT = 48

class LongMenu extends React.Component {

state = {
  anchorEl: null,
}

handleClick = event => {
  this.setState({ anchorEl: event.currentTarget })
}

handleClose = () => {
  this.setState({ anchorEl: null })
}

renderMenu = (options) => {
  const { classes } = this.props
  return options.map(option => (
    <MenuItem key={option.name} onClick={this.handleClose}>
      <Link to={option.link} className={classes.link}>
        {option.name}
      </Link>
    </MenuItem>
  ))
}

render() {
  const { anchorEl } = this.state
  const open = Boolean(anchorEl)

  return (

    <div>
      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={this.handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={this.handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {this.renderMenu(options)}
      </Menu>
    </div>
  )
}
}

export default withStyles(styles)(LongMenu)