import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import DashboardTeachers from './DashboardTeachers'
import DashboardStudents from './DashboardStudents'

class Dashboard extends Component {
    render() {
        const { isLoggedIn, currentUserType } = this.props.auth
        return isLoggedIn ?
            currentUserType === 'teacher' ? <DashboardTeachers /> : <DashboardStudents /> :
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)