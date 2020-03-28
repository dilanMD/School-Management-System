import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/authActions'

class TeacherLinks extends Component {
    componentDidMount() {
        console.log("--------Signed In Links Start--------")
        console.log(this.props.auth)
        console.log("--------Signed In Links End--------")
    }

    handleLogout = () => {
        this.props.logout()
    }

    renderLinks = () => {
        const { currentUserType } = this.props.auth
        return currentUserType === 'teacher' ?
            <ul className="right">
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/" onClick={this.handleLogout}>Logout</NavLink></li>
                <li><NavLink to="/profile" className="btn btn-floating pink lighten-1">TT</NavLink></li>
            </ul> :
            <ul className="right">
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/" onClick={this.handleLogout}>Logout</NavLink></li>
                <li><NavLink to="/profile" className="btn btn-floating pink lighten-1">SS</NavLink></li>
            </ul>
    }

    redirectTo = () => {
        const { isLoggedIn } = this.props.auth
        return !isLoggedIn ? <Redirect to="/" /> : null
    }

    render() {
        return (
            <div>
                {this.renderLinks()}
                {this.redirectTo()}
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
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherLinks)