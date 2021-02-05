import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import { clearErrors } from '../store/error/actions'
import { changeUserInfo } from '../store/auth/actions'

class EditUserSettings extends Component {
    state = {
        name: this.props.auth.user.name,
        surname: this.props.auth.user.surname,
        email: this.props.auth.user.email,
        msg: null,
        saved: false,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        auth: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired,
        changeUserInfo: PropTypes.func.isRequired,
        t: PropTypes.func.isRequired,
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { name, surname, email } = this.state

        const newUser = {
            name,
            surname,
            email,
        }

        this.props.changeUserInfo(newUser)

        this.setState({ saved: true })
    }

    isDisabled = () => {
        return this.state.saved || !this.state.name || !this.state.surname || !this.state.email
    }

    render() {
        const t = this.props.t
        return (
            <div>
                {this.state.msg ? <Alert color="danger">{t(this.state.msg)}</Alert> : null}
                <h1>{t('Změnit mé údaje')}</h1>
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
                        />
                    </FormGroup>
                    <Button color="dark" style={{ marginTop: '2rem' }} disabled={this.isDisabled()} block>
                        {t('Změnit')}
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    error: state.error,
})

export default connect(mapStateToProps, { clearErrors, changeUserInfo })(withTranslation()(EditUserSettings))
