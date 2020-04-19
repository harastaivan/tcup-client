import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { register } from '../actions/auth';
import { clearErrors } from '../actions/error';
import GdprConsent from './GdprConsent';

class Signup extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        t: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, surname, email, password } = this.state;

        const newUser = {
            name,
            surname,
            email,
            password
        };
        this.props.register(newUser);
        this.setState({
            password: ''
        });
    };

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            this.props.clearErrors();
            this.props.history.push('/');
        }
    }

    signupDisabled() {
        return true;
    }

    render() {
        const t = this.props.t;
        return (
            <div>
                {this.signupDisabled() && (
                    <Alert color="info">{t('Již není možná registrace, máme plnou kapacitu.')}</Alert>
                )}
                <h1>{t('Registrovat se')}</h1>
                <Form onSubmit={this.onSubmit} autoComplete={'off'}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">{t('Jméno')}</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder={t('Jméno')}
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    disabled={this.signupDisabled()}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="surname">{t('Příjmení')}</Label>
                                <Input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    placeholder={t('Příjmení')}
                                    value={this.state.surname}
                                    onChange={this.onChange}
                                    disabled={this.signupDisabled()}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="email">{t('Email')}</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t('Email')}
                            value={this.state.email}
                            onChange={this.onChange}
                            disabled={this.signupDisabled()}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">{t('Heslo')}</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder={t('Heslo')}
                            value={this.state.password}
                            onChange={this.onChange}
                            disabled={this.signupDisabled()}
                        />
                    </FormGroup>
                    {!this.signupDisabled() && <GdprConsent action="Zaregistrováním se souhlasíte" />}
                    <Button
                        color="dark"
                        style={{ marginTop: '2rem' }}
                        disabled={!this.state.name || !this.state.surname || !this.state.email || !this.state.password}
                        block
                    >
                        {t('Registrovat se')}
                    </Button>
                </Form>
                <Alert color="light" style={{ marginTop: '2rem' }}>
                    {t('Již máte účet?')} <Link to="/login">{t('Přihlaste se.')}</Link>
                </Alert>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(withTranslation()(Signup));
