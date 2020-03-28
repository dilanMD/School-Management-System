import React, { Component } from 'react'

class Register extends Component {
    state = {
        reg_firstname: '',
        reg_lastname: '',
        reg_email: '',
        reg_usertype: '',
        reg_password: '',
        reg_confirm_password: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Register</h5>
                <div className="row">
                    <div className="col s6">
                        <div className="input-field">
                            <label htmlFor="reg_firstname">First name</label>
                            <input type="text" id="reg_firstname" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="input-field">
                            <label htmlFor="reg_lastname">Last name</label>
                            <input type="text" id="reg_lastname" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="input-field">
                            <label htmlFor="reg_email">Email</label>
                            <input type="email" id="reg_email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="input-field" onChange={this.handleChange}>
                            <p>
                                <label>
                                    <input
                                        name="reg_usertype"
                                        id="reg_usertype"
                                        type="radio"
                                        value="teacher"
                                    />
                                    <span>Teacher</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        name="reg_usertype"
                                        id="reg_usertype"
                                        type="radio"
                                        value="student"
                                    />
                                    <span>Student</span>
                                </label>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="input-field">
                            <label htmlFor="reg_password">Password</label>
                            <input type="password" id="reg_password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="input-field">
                            <label htmlFor="reg_confirm_password">Confirm Password</label>
                            <input type="password" id="reg_confirm_password" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Register</button>
                </div>
            </form>
        )
    }
}

export default Register