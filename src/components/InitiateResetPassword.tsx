import { useTranslation } from 'react-i18next'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { useSendEmail } from 'hooks'
import { SubmitButton } from 'modules/form'

const InitiateResetPassword = () => {
    const { t } = useTranslation()
    const { email, onChangeEmail, loading, submit } = useSendEmail()
    return (
        <div>
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
                <SubmitButton loading={loading}>{t('Obnovit heslo')}</SubmitButton>
            </Form>
        </div>
    )
}

export default InitiateResetPassword
