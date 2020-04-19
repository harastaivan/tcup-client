import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { clearSuccess } from '../actions/success';
import { clearErrors } from '../actions/error';
import { changePassword } from '../actions/auth';

class ChangePassword extends Component {
    state = {
        oldPassword: '',
        newPassword: '',
        saved: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        success: PropTypes.object.isRequired,
        clearSuccess: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        changePassword: PropTypes.func.isRequired,
        t: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            saved: false
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.clearSuccess();
        this.props.clearErrors();
        const { oldPassword, newPassword } = this.state;

        this.props.changePassword({ oldPassword, newPassword });

        this.setState({ errorMsg: null, saved: true });
    };

    isDisabled = () => {
        return this.state.saved || !this.state.oldPassword || !this.state.newPassword;
    };

    render() {
        const t = this.props.t;
        return (
            <Fragment>
                {this.props.success.msg ? <Alert color="success">{t(this.props.success.msg)}</Alert> : null}
                <h1>{t('Změnit heslo')}</h1>
                <Form onSubmit={this.onSubmit} autoComplete={'off'}>
                    <FormGroup>
                        <Label for="oldPassword">{t('Staré heslo')}</Label>
                        <Input
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                            placeholder={t('Staré heslo')}
                            value={this.state.oldPassword}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="newPassword">{t('Nové heslo')}</Label>
                        <Input
                            type="password"
                            name="newPassword"
                            id="newPassword"
                            placeholder={t('Nové heslo')}
                            value={this.state.newPassword}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button color="dark" style={{ marginTop: '2rem' }} disabled={this.isDisabled()} block>
                        {t('Změnit')}
                    </Button>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    success: state.success
});

export default connect(mapStateToProps, { clearSuccess, clearErrors, changePassword })(
    withTranslation()(ChangePassword)
);
