import { getConfig } from 'config/domainConfig'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup } from 'reactstrap'

export interface FinalStartingListToggleProps {
    isFinal: boolean
    setIsFinal: (isFinal: boolean) => void
}

export const FinalStartingListToggle = ({ isFinal, setIsFinal }: FinalStartingListToggleProps) => {
    const { t } = useTranslation()
    const { finalStartingListSince } = getConfig().competition

    if (!finalStartingListSince) {
        return null
    }

    const formattedFinalStartingListSince = moment(finalStartingListSince).format('D MMM')

    return (
        <ButtonGroup size="sm mb-5">
            <Button color={!isFinal ? 'primary' : 'secondary'} onClick={() => setIsFinal(false)}>
                {t('předběžná', { date: formattedFinalStartingListSince })}
            </Button>
            <Button color={isFinal ? 'primary' : 'secondary'} onClick={() => setIsFinal(true)}>
                {t('finální', { date: formattedFinalStartingListSince })}
            </Button>
        </ButtonGroup>
    )
}
