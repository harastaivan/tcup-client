import React from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useResetPassword } from '../hooks/resetPassword'
import Spinner from './Spinner'

type Props = {
    token: string
}

const TokenResetPassword = ({ token }: Props) => {
    const { t } = useTranslation()
    const {
        loading,
        tokenValid,
        passwordChanged,
        error,
        password,
        onChangePassword,
        passwordCheck,
        onChangePasswordCheck,
        submit,
    } = useResetPassword(token)

    return (
        <div>
            {loading && <Spinner />}

            {error && (
                <Alert color="danger" style={{ marginTop: '2rem' }}>
                    {t(error)}
                </Alert>
            )}

            {!loading && !error && !passwordChanged && tokenValid && (
                <Alert color="info" style={{ marginTop: '2rem' }}>
                    {t('Vytvořte si nové heslo.')}
                </Alert>
            )}

            {!loading && passwordChanged && (
                <Alert color="success" style={{ marginTop: '2rem' }}>
                    {t('Vaše heslo bylo úspěšně změněno. Můžete se přihlásit.')}
                </Alert>
            )}

            <h1>{t('Obnovit heslo')}</h1>

            {tokenValid && (
                <Form onSubmit={submit}>
                    <FormGroup>
                        <Label for="password">{t('Heslo')}</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder={t('Heslo')}
                            value={password}
                            onChange={onChangePassword}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password-check">{t('Heslo znovu')}</Label>
                        <Input
                            type="password"
                            name="password-check"
                            id="password-check"
                            placeholder={t('Heslo znovu')}
                            value={passwordCheck}
                            onChange={onChangePasswordCheck}
                        />
                    </FormGroup>
                    <Button
                        color="dark"
                        style={{ marginTop: '2rem' }}
                        block
                        disabled={loading || Boolean(error) || passwordChanged}>
                        {t('Změnit heslo')}
                    </Button>
                </Form>
            )}
        </div>
    )
}

export default TokenResetPassword
