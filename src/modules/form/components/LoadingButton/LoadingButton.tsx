import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonProps, Spinner } from 'reactstrap'

interface LoadingButtonProps extends ButtonProps {
    loading?: boolean
    disabled?: boolean
    children: ReactNode
}

export const LoadingButton = ({ loading = false, disabled = false, color, children, ...props }: LoadingButtonProps) => {
    const { t } = useTranslation()

    const spinner = (
        <span>
            <Spinner type="grow" color="light" size="sm" className="mr-2" />
            <span>{t('form.submitting')}</span>
        </span>
    )

    return (
        <Button color={color || 'primary'} disabled={loading || disabled} {...props}>
            {loading ? spinner : children}
        </Button>
    )
}
