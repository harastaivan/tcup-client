import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from '../store/auth/actions'

class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
    }

    logout = () => {
        this.props.logout()
        this.props.history.push('/')
    }

    componentDidMount() {
        this.logout()
    }

    render() {
        return null
    }
}

export default connect(null, { logout })(Logout)
