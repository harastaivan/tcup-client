import React, { Component, Fragment } from 'react';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    logout = () => {
        this.props.logout();
        this.props.history.push('/');
    };

    componentDidMount() {
        this.logout();
    }

    render() {
        return <Fragment />;
    }
}

export default connect(null, { logout })(Logout);
