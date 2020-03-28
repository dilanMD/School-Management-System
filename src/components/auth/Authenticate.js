import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'

class Authenticate extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col s8">
                        <div className="card horizontal">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card horizontal">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <Login />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Authenticate