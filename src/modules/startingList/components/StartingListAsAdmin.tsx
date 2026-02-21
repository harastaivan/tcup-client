import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup } from 'reactstrap'

import { Spinner } from 'modules/ui'
import { toast } from 'modules/toast'
import type { TKey } from 'translations'
import { LoadingButton } from 'modules/form'

import { StartingListByClass } from './StartingListByClass'
import { useExportStartingList, useRegistrationCompletedFilter, useSeeYouExportStartingList } from '../hooks'
import { useGetStartingListQuery } from '../services/api'
import { FinalStartingListToggle } from './FinalStartingListToggle'
import { getConfig } from 'config/domainConfig'
import moment from 'moment'

export const StartingListAsAdmin = () => {
    const { t } = useTranslation()

    const { finalStartingListSince } = getConfig().competition
    const [isFinal, setIsFinal] = useState(() => moment(finalStartingListSince).isBefore(moment()))
    const { isLoading, error, isError, data: startingList } = useGetStartingListQuery({ isFinal })
    const { filterRegistrations, buttons } = useRegistrationCompletedFilter()
    const { exportStartingList, isLoading: isExportLoading } = useExportStartingList()
    const { exportSeeYouStartingList, isLoading: isSeeYouExportLoading } = useSeeYouExportStartingList()

    useEffect(() => {
        if (isError) {
            toast.error('error.generic')
        }
    }, [isError, error])

    return (
        <>
            {isLoading && <Spinner />}
            <LoadingButton loading={isExportLoading} onClick={exportStartingList} style={{ marginBottom: '1em' }}>
                {t('export přihlášek')}
            </LoadingButton>
            {startingList
                ?.filter((x) => x.name !== 'not-accepted')
                ?.map(({ _id, name }) => (
                    <LoadingButton
                        loading={isSeeYouExportLoading}
                        onClick={exportSeeYouStartingList(_id)}
                        style={{ marginBottom: '1em', marginLeft: '1em' }}>
                        {t('export see you')} {name}
                    </LoadingButton>
                ))}
            <div style={{ marginBottom: '1em' }}>
                <ButtonGroup>
                    {buttons.map(({ label, isActive, color, onClick }) => (
                        <Button key={label} color={isActive ? color : 'secondary'} onClick={onClick}>
                            {t(label as TKey)}
                        </Button>
                    ))}
                </ButtonGroup>
                <span style={{ marginLeft: '1em' }}>(Určeno pro registraci závodníků v první soutěžní den)</span>
            </div>

            <FinalStartingListToggle isFinal={isFinal} setIsFinal={setIsFinal} />

            {startingList &&
                startingList.map((competitionClass) => (
                    <StartingListByClass key={competitionClass._id} {...filterRegistrations(competitionClass)} />
                ))}
        </>
    )
}
