import React, { useEffect } from 'react'
import { Alert } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { getAuth } from 'store/auth/selectors'

import { LoginForm } from '../components'

export const LoginPage: React.FC = () => {
    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(getAuth)

    const history = useHistory()

    const { t } = useTranslation()

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
    }, [isAuthenticated, dispatch, history])

    return (
        <div>
            <h1>{t('Přihlásit se')}</h1>
            <LoginForm />
            <Alert color="light" style={{ marginTop: '2rem' }}>
                {t('Nedaří se přihlásit? Možná jste')} <Link to="/password-reset">{t('zapomněli heslo.')}</Link>
            </Alert>
        </div>
    )
}
