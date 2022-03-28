import { useTranslation } from 'react-i18next'
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useSendEmail } from '../hooks/resetPassword'
import type { TKey } from '../i18next'
import Spinner from './Spinner'

const InitiateResetPassword = () => {
    const { t } = useTranslation()
    const { email, onChangeEmail, loading, done, error, submit } = useSendEmail()
    return (
        <div>
            {!done && !error && (
                <Alert color="info" style={{ marginTop: '2rem' }}>
                    {t('Na váš email Vám přijde obnovovací odkaz.')}
                </Alert>
            )}

            {loading && <Spinner />}

            {done && (
                <Alert color="success" style={{ marginTop: '2rem' }}>
                    {t(
                        'Na váš email by Vám měl přijít obnovovací odkaz. Pokud nepřijde, kontaktujte administrátora prosím.'
                    )}
                </Alert>
            )}

            {error && (
                <Alert color="danger" style={{ marginTop: '2rem' }}>
                    {t(error as TKey)}
                </Alert>
            )}

            <h1>{t('Obnovit heslo')}</h1>

            <Form onSubmit={submit}>
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
                <Button color="dark" style={{ marginTop: '2rem' }} block disabled={!email || loading || done}>
                    {t('Obnovit heslo')}
                </Button>
            </Form>
        </div>
    )
}

export default InitiateResetPassword
