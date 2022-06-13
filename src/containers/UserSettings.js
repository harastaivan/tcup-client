import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import EditUserSettings from './EditUserSettings'
import { LoginPage } from 'modules/auth'

class UserSettings extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        history: PropTypes.object.isRequired,
    }

    render() {
        return (
            <Fragment>
                {this.props.isAuthenticated && <EditUserSettings />}
                {!this.props.isAuthenticated && <LoginPage history={this.props.history} />}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(UserSettings)
