import type { ChangeEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import { FormGroup, Input, Label } from 'reactstrap'

interface EmailInputProps {
    value: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const EmailInput = ({ value, onChange = () => {} }: EmailInputProps) => {
    const { t } = useTranslation()
    return (
        <FormGroup>
            <Label for="email">{t('Email')}</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder={t('Email')}
                value={value}
                onChange={onChange}
                data-testid="input-email"
            />
        </FormGroup>
    )
}
