import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import { getCompetitionDays } from '../actions/competitionDay'
import { getCompetitionDay } from '../utils/getCompetitionDay'
import { getTrackings } from '../actions/tracking'
import { translateDayName } from '../utils/translateDayName'

const CompetitorStatuses = () => {
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const competitionDays = useSelector((state) => state.competitionDay.competitionDays)
    const trackings = useSelector((state) => state.tracking.trackings)

    const [today, setToday] = useState('')

    useEffect(() => {
        dispatch(getCompetitionDays())
    }, [dispatch])

    useEffect(() => {
        const today = getCompetitionDay(competitionDays)
        if (!today) {
            return
        }
        setToday(today)
    }, [competitionDays])

    useEffect(() => {
        if (!today) {
            return
        }
        dispatch(getTrackings(today))
    }, [dispatch, today])

    return (
        <div>
            <h2>{t('Tracking')}</h2>
            <ListGroup style={{ marginTop: '2.1rem' }}>
                {trackings.map((tracking) => {
                    const trackingUrl = `https://glideandseek.com/?taskOneUrl=${tracking.taskUrl}`
                    return (
                        <ListGroupItem tag="a" href={trackingUrl} key={tracking._id}>
                            {`Tracking ${t(tracking.competitionClass.name)} ${translateDayName(tracking.day.name, t)}`}
                        </ListGroupItem>
                    )
                })}
                {trackings.length === 2 && (
                    <ListGroupItem
                        tag="a"
                        href={`https://glideandseek.com/?taskOneUrl=${trackings[0].taskUrl}&taskTwoUrl=${trackings[1].taskUrl}`}>
                        {`Tracking ${t(trackings[0].competitionClass.name)} & ${t(
                            trackings[1].competitionClass.name
                        )} ${translateDayName(trackings[0].day.name, t)}`}
                    </ListGroupItem>
                )}
                {trackings.length === 0 && <p>{t('Pro tento den není tracking.')}</p>}
            </ListGroup>
        </div>
    )
}

export default CompetitorStatuses
