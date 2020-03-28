import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedoutLinks from './SignedoutLinks'

class Navbar extends Component {

    componentDidMount() {
        console.log("--------Navbar Start--------")
        console.log(this.props.auth)
        console.log("--------Navbar End--------")
    }

    renderLinks = () => {
        const { isLoggedIn } = this.props.auth
        return !isLoggedIn ? <SignedoutLinks /> : <SignedInLinks />
    }

    render() {
        return (
            <nav className="nav-wrapper primary darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">School</Link>
                    {this.renderLinks()}
                </div>
            </nav>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)