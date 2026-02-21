import { useEffect, useState } from 'react'

import { Spinner } from 'modules/ui'
import { toast } from 'modules/toast'

import { useGetStartingListQuery } from '../services/api'
import { StartingListByClass } from './StartingListByClass'
import { FinalStartingListToggle } from './FinalStartingListToggle'
import { getConfig } from 'config/domainConfig'
import moment from 'moment'

export const StartingList = () => {
    const { finalStartingListSince } = getConfig().competition
    const [isFinal, setIsFinal] = useState(() => moment(finalStartingListSince).isBefore(moment()))
    const { isLoading, error, isError, data: startingList } = useGetStartingListQuery({ isFinal })

    useEffect(() => {
        if (isError) {
            toast.error('error.generic')
        }
    }, [isError, error])

    return (
        <>
            <FinalStartingListToggle isFinal={isFinal} setIsFinal={setIsFinal} />

            {isLoading && <Spinner />}
            {startingList &&
                startingList.map((competitionClass) => (
                    <StartingListByClass key={competitionClass._id} {...competitionClass} />
                ))}
        </>
    )
}
