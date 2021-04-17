import { useTranslation } from 'react-i18next'
import { Button } from 'reactstrap'

type Props = {
    maximised: boolean
    onToggle: (maximised: boolean) => void
}

const VisualisationMaximisedControl = ({ maximised, onToggle }: Props) => {
    const { t } = useTranslation()

    const onClick = () => {
        onToggle(!maximised)
    }

    return (
        <Button
            onClick={onClick}
            color={maximised ? 'secondary' : 'primary'}
            style={{
                position: 'absolute',
                right: '91px',
                bottom: '5px',
            }}
            outline
            size="sm">
            {maximised ? t('zavřít mapu') : t('otevřít mapu')}
        </Button>
    )
}

export default VisualisationMaximisedControl
