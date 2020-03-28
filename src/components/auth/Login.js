import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/authActions'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    renderPage = () => {
        const { isLoggedIn } = this.props.auth
        return isLoggedIn ?
            <Redirect to="/dashboard" /> :
            <Redirect to="/" />
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render() {
        return (
            <div>
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Login</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
                {this.renderPage()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)