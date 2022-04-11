import { useEffect } from 'react'
import Spinner from 'components/Spinner'
import { toast } from 'modules/toast'
import { useGetStartingListQuery } from '../services/api'
import { StartingListByClass } from './StartingListByClass'

export const StartingList = () => {
    const { isLoading, error, isError, data: startingList } = useGetStartingListQuery()

    useEffect(() => {
        if (isError) {
            toast.error('error.generic')
        }
    }, [isError, error])

    return (
        <>
            {isLoading && <Spinner />}
            {startingList &&
                startingList.map((competitionClass) => (
                    <StartingListByClass key={competitionClass._id} {...competitionClass} />
                ))}
        </>
    )
}
