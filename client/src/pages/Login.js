import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import API from '../utils/API'


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
    button: {
        marginTop: theme.spacing.unit * 1.5,
        color: theme.palette.secondary
    },
    registerButton: {
        float: 'right',
        marginTop: 25
    }
})

class Login extends React.Component {
    state = {
        name: '',
        password: '',
        showPassword: false,
        redirect: false
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value })
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }))
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/home" />
        }
    }

    onFormSubmit = () => {
        API.login({
            email: this.state.name,
            password: this.state.password
        }).then(res => {
            if (res.data === "Success") {
                this.setState({
                    redirect: true
                })
            } else if (res.data === "Failed") {
                console.log('Invalid Login')
            }
        })
    }

    render() {
        const { classes } = this.props

        return (
            <form className={classes.container} onSubmit={this.onFormSubmit}>
            {this.handleRedirect()}
                <Paper className={classes.root}>
                    <TextField
                        id="outlined-name"
                        label="Username"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined" />
                    <br />
                    <TextField
                        id="outlined-adornment-password"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={this.state.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }} />
                    <br />
                    <Button variant="contained" className={classes.button} onClick={this.onFormSubmit}>
                        Login
                    </Button>
                    <Link to='/register' className={classes.registerButton}>
                        Register
                    </Link>
                </Paper>
            </form>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)