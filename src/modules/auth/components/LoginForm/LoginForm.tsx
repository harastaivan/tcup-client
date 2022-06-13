import React, { FC, useState } from 'react'
import { Button, Form } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { login } from 'store/auth/actions'
import { EmailInput, PasswordInput } from 'modules/auth'

export interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = { email, password }
        dispatch(login(user))
        setPassword('')
    }

    return (
        <Form onSubmit={onSubmit}>
            <EmailInput value={email} onChange={onChangeEmail} />
            <PasswordInput value={password} onChange={onChangePassword} />
            <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                disabled={!email || !password}
                data-testid="button-submit">
                {t('Přihlásit se')}
            </Button>
        </Form>
    )
}
