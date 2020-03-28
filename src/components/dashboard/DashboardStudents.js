import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class DashboardStudents extends Component {
    render() {
        const { isLoggedIn } = this.props.auth
        return isLoggedIn ?
            <div>
                <div className="row">
                    <div className="col s4">
                        <div className="card horizontal">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h3>Dashboard about students details</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s8">
                        <div className="card horizontal">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h3>Dashboard about students details</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
            <Redirect to="/" />
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStudents)