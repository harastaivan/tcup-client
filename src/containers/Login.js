import React, { Component } from 'react'
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

import { login } from '../store/auth/actions'
import { clearErrors } from '../store/error/actions'

class Login extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null,
    }

    static propTypes = {
        clearErrors: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        error: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        t: PropTypes.func.isRequired,
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.clearErrors()
        const { email, password } = this.state
        const user = { email, password }
        this.props.login(user)
        this.setState({
            password: '',
        })
    }

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            this.props.clearErrors()
            this.props.history.push('/')
        }
    }

    render() {
        const t = this.props.t
        return (
            <div>
                <h1>{t('Přihlásit se')}</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="email">{t('Email')}</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t('Email')}
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">{t('Heslo')}</Label>
                        <Input
                            type="password"
                            name="password"
                            id="Password"
                            placeholder={t('Heslo')}
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button
                        color="dark"
                        style={{ marginTop: '2rem' }}
                        block
                        disabled={!this.state.email || !this.state.password}>
                        {t('Přihlásit se')}
                    </Button>
                </Form>
                <Alert color="light" style={{ marginTop: '2rem' }}>
                    {t('Nemáte účet?')} <Link to="/signup">{t('Vytvořte si ho.')}</Link>
                </Alert>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
})

export default connect(mapStateToProps, { login, clearErrors })(withTranslation()(Login))
