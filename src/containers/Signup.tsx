import { useEffect, useState } from 'react'
import { Alert, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

import { register } from 'store/auth/actions'
import { getAuth } from 'store/auth/selectors'
import { SIGNUP_DISABLED } from 'config/constants'
import { getConfig, isLatestYear } from 'config/domainConfig'

import GdprConsent from './GdprConsent'

const signupDisabled = SIGNUP_DISABLED || !isLatestYear

export const Signup = () => {
    const { t } = useTranslation()
    const history = useHistory()

    const { isAuthenticated } = useSelector(getAuth)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        const newUser = {
            name,
            surname,
            email,
            password,
        }

        dispatch(register(newUser))
        setPassword('')
    }

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
    }, [history, isAuthenticated])

    return (
        <div>
            {isLatestYear && signupDisabled && (
                <Alert color="info">
                    {t('homepage.signup.disabled', {
                        at: moment(getConfig().competition.signupSince).format('D. M. YYYY HH:mm'),
                    })}
                </Alert>
            )}
            <h1>{t('Registrovat se')}</h1>
            <Form onSubmit={handleSubmit} autoComplete={'off'}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">{t('Jméno')}</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder={t('Jméno')}
                                value={name}
                                onChange={(e) => setName(e.currentTarget.value)}
                                disabled={signupDisabled}
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
                                value={surname}
                                onChange={(e) => setSurname(e.currentTarget.value)}
                                disabled={signupDisabled}
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
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        disabled={signupDisabled}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">{t('Heslo')}</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder={t('Heslo')}
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        disabled={signupDisabled}
                    />
                </FormGroup>
                {!signupDisabled && <GdprConsent action="Zaregistrováním se souhlasíte" />}
                <Button
                    color="dark"
                    style={{ marginTop: '2rem' }}
                    disabled={!name || !surname || !email || !password}
                    block>
                    {t('Registrovat se')}
                </Button>
            </Form>
            <Alert color="light" style={{ marginTop: '2rem' }}>
                {t('Již máte účet?')} <Link to="/login">{t('Přihlaste se.')}</Link>
            </Alert>
        </div>
    )
}
