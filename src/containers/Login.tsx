import React, { useEffect, useState } from 'react'
import { Alert, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { login } from '../store/auth/actions'
import { clearErrors } from '../store/error/actions'
import { getAuth } from '../store/auth/selectors'

type FormData = {
    email: string
    password: string
}

const LoginSchema = yup.object().shape({
    email: yup.string().email('Musí být ve formátu emailu').required('Email musí být vyplněn'),
    password: yup.string().required('Heslo musí být vyplněno'),
})

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(LoginSchema),
    })

    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(getAuth)

    const history = useHistory()

    const { t } = useTranslation()

    const onSubmit = handleSubmit((data: FormData) => {
        alert(JSON.stringify(data))
        dispatch(clearErrors())
        const { email, password } = data
        const user = { email, password }
        dispatch(login(user))
        reset()
        // setPassword('')
    })

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(clearErrors())
            history.push('/')
        }
    }, [isAuthenticated, dispatch, history])

    console.log(errors)

    return (
        <div>
            <h1>{t('Přihlásit se')}</h1>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="email">{t('Email')}</Label>
                    <Input id="email" placeholder={t('Email')} invalid={!!errors.email} {...register('email')} />
                    {errors.email && <FormFeedback>{t(errors.email.message as string)}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="password">{t('Heslo')}</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder={t('Heslo')}
                        invalid={!!errors.password}
                        {...register('password')}
                    />
                    {errors.password && <FormFeedback>{t(errors.password.message as string)}</FormFeedback>}
                </FormGroup>
                {/* TODO disabled */}
                <Button color="dark" style={{ marginTop: '2rem' }} block disabled={false}>
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
