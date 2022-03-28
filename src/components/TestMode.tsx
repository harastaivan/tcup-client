import { useTranslation } from 'react-i18next'
import { Alert } from 'reactstrap'
import { TEST_MODE } from 'config/constants'

type Props = {
    hidden?: boolean
}

const TestMode: React.FC<Props> = ({ hidden }: Props) => {
    const { t } = useTranslation()

    if (TEST_MODE && !hidden) {
        return (
            <Alert color="warning">
                {t('Aplikace se právě testuje. Nemusí vše fungovat správně.')}{' '}
                <a href="https://gitreports.com/issue/harastaivan/tcup-client">{t('Chyby hlašte zde')}</a>.
            </Alert>
        )
    }

    return null
}

export default TestMode
