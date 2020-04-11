import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Alert, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import RegistrationForm from './RegistrationForm';
import EditRegistrationForm from './EditRegistrationForm';
import Login from './Login';
import { getRegistration, getFormData } from '../actions/registration';

class Registration extends Component {
    static propTypes = {
        getRegistration: PropTypes.func.isRequired,
        getFormData: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        registration: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        t: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getRegistration();
        this.props.getFormData();
    }

    componentDidUpdate(previousProps) {
        if (previousProps.isAuthenticated !== this.props.isAuthenticated) {
            this.props.getRegistration();
        }
    }

    render() {
        const spinner = <Spinner type="grow" color="secondary" className="m-3" />;
        const { loading } = this.props.registration;
        const t = this.props.t;
        return (
            <div>
                {loading ? (
                    spinner
                ) : (
                    <Fragment>
                        {!this.props.isAuthenticated && (
                            <div>
                                <Alert color="info">{t('Pro vytvoření přihlášky se přihlaste.')}</Alert>
                                <Login history={this.props.history} />
                            </div>
                        )}

                        {this.props.isAuthenticated && this.props.registration.isRegistered && (
                            <EditRegistrationForm edit={false} />
                        )}
                        {this.props.isAuthenticated && !this.props.registration.isRegistered && <RegistrationForm />}
                    </Fragment>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    registration: state.registration
});

const mapDispatchToProps = {
    getRegistration,
    getFormData
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Registration));
