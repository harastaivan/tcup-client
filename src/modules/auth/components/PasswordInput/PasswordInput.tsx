import type { ChangeEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import { FormGroup, Input, Label } from 'reactstrap'

export interface PasswordInputProps {
    value: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
    const { t } = useTranslation()
    return (
        <FormGroup>
            <Label for="Password">{t('Heslo')}</Label>
            <Input
                type="password"
                name="password"
                id="Password"
                placeholder={t('Heslo')}
                value={value}
                onChange={onChange}
                data-testid="input-password"
            />
        </FormGroup>
    )
}
