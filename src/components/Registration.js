import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import EditRegistrationForm from './EditRegistrationForm';
import Login from './Login';
import { Alert } from 'reactstrap';

class Registration extends Component {
    render() {
        return (
            <div>
                {!this.props.isAuthenticated && (
                    <div>
                        <Alert color='info'>Pro vytvoření přihlášky se přihlaste.</Alert>
                        <Login />
                    </div>
                )}
                {this.props.isAuthenticated && this.props.registration && this.props.registration.isRegistered && (
                    <EditRegistrationForm disabled={true} />
                )}
                {this.props.isAuthenticated && !(this.props.registration && this.props.registration.isRegistered) && (
                    <RegistrationForm />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    registration: state.registration
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
