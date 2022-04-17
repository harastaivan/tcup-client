import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Spinner } from 'reactstrap'

interface SubmitButtonProps {
    loading?: boolean
    disabled?: boolean
    children: ReactNode
}

export const SubmitButton = ({ loading = false, disabled = false, children }: SubmitButtonProps) => {
    const { t } = useTranslation()

    const spinner = (
        <span>
            <Spinner type="grow" color="light" size="sm" className="mr-2" />
            <span>{t('form.submitting')}</span>
        </span>
    )

    return (
        <Button
            type="submit"
            style={{ width: '100%', marginTop: '1em' }}
            disabled={loading || disabled}
            data-testid="button-submit">
            {loading ? spinner : children}
        </Button>
    )
}
