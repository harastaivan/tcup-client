import React, { useEffect, useState } from 'react'
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { login } from '../store/auth/actions'
import { clearErrors } from '../store/error/actions'
import { getAuth } from '../store/auth/selectors'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(getAuth)

    const history = useHistory()

    const { t } = useTranslation()

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(clearErrors())
        const user = { email, password }
        dispatch(login(user))
        setPassword('')
    }

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(clearErrors())
            history.push('/')
        }
    }, [isAuthenticated, dispatch, history])

    return (
        <div>
            <h1>{t('Přihlásit se')}</h1>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="email">{t('Email')}</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={t('Email')}
                        value={email}
                        onChange={onChangeEmail}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">{t('Heslo')}</Label>
                    <Input
                        type="password"
                        name="password"
                        id="Password"
                        placeholder={t('Heslo')}
                        value={password}
                        onChange={onChangePassword}
                    />
                </FormGroup>
                <Button color="dark" style={{ marginTop: '2rem' }} block disabled={!email || !password}>
                    {t('Přihlásit se')}
                </Button>
            </Form>
            <Alert color="light" style={{ marginTop: '2rem' }}>
                {t('Nedaří se přihlásit? Možná jste')} <Link to="/password-reset">{t('zapomněli heslo.')}</Link>
            </Alert>
        </div>
    )
}

export default Login
