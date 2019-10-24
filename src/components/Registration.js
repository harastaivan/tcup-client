import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import EditRegistrationForm from './EditRegistrationForm';
import Login from './Login';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { getRegistration } from '../actions/registration';

class Registration extends Component {
    static propTypes = {
        getRegistration: PropTypes.func
    };

    componentDidUpdate() {
        this.props.getRegistration();
    }

    render() {
        return (
            <div>
                {!this.props.isAuthenticated && (
                    <div>
                        <Alert color='info'>Pro vytvoření přihlášky se přihlaste.</Alert>
                        <Login />
                    </div>
                )}
                {this.props.isAuthenticated && this.props.registration.isRegistered && (
                    <EditRegistrationForm edit={false} />
                )}
                {this.props.isAuthenticated && !this.props.registration.isRegistered && <RegistrationForm />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    registration: state.registration
});

const mapDispatchToProps = {
    getRegistration
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
