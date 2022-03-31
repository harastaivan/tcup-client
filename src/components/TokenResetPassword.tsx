import { useTranslation } from 'react-i18next'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { SubmitButton } from 'modules/form'
import { useResetPassword } from 'hooks'

type Props = {
    token: string
}

const TokenResetPassword = ({ token }: Props) => {
    const { t } = useTranslation()
    const {
        loading,
        tokenValid,
        passwordChanged,
        password,
        onChangePassword,
        passwordCheck,
        onChangePasswordCheck,
        submit,
    } = useResetPassword(token)

    return (
        <div>
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
                    <SubmitButton loading={loading} disabled={passwordChanged}>
                        {t('Změnit heslo')}
                    </SubmitButton>
                </Form>
            )}
        </div>
    )
}

export default TokenResetPassword
