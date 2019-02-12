import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        elevation: 1,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    loginButton: {
        float: 'right',
        marginTop: 15
    }
})

class Register extends React.Component {
    state = {
        password: '',
        showPassword: false,
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value })
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }))
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>

                <TextField
                    id="outlined-name"
                    label="SKU Number"
                    className={classes.textField}
                    value={this.state.sku}
                    onChange={this.handleChange('sku')}
                    margin="normal"
                    variant="outlined"
                />
              
                <TextField
                    id="outlined-name"
                    label="Item Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <Button variant="contained" className={classes.button}>
                    Add Item
                </Button>

            </div>
        )
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Register)