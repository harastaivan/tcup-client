import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import { getCompetitionDays } from 'store/competitionDay/actions'
import { getCompetitionDay } from 'utils/getCompetitionDay'
import { getTrackings } from 'store/tracking/actions'
import { translateDayName } from 'utils/translateDayName'

const EXTERNAL_TRACKING = 'http://lkvp.alte.cz/tracking_v3/2023tcup/tracking.html'

const Tracking = () => {
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
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                {t('Tracking')}
            </DropdownToggle>
            <DropdownMenu right className="bg-light">
                {trackings.map((tracking) => {
                    const trackingUrl = `https://glideandseek.com/?taskOneUrl=${tracking.taskUrl}`
                    return (
                        <DropdownItem className="bg-light" key={tracking._id}>
                            <NavLink tag="a" href={trackingUrl} target="_blank" rel="noopener">
                                {`${t(tracking.competitionClass.name)} ${translateDayName(tracking.day.name, t)}`}
                            </NavLink>
                        </DropdownItem>
                    )
                })}
                {trackings.length === 2 && (
                    <DropdownItem className="bg-light">
                        <NavLink
                            tag="a"
                            href={`https://glideandseek.com/?taskOneUrl=${trackings[0].taskUrl}&taskTwoUrl=${trackings[1].taskUrl}`}
                            target="_blank"
                            rel="noopener">
                            {`${t(trackings[0].competitionClass.name)} & ${t(
                                trackings[1].competitionClass.name
                            )} ${translateDayName(trackings[0].day.name, t)}`}
                        </NavLink>
                    </DropdownItem>
                )}
                <DropdownItem className="bg-light">
                    <NavLink tag="a" href={EXTERNAL_TRACKING} target="_blank" rel="noopener">
                        Rozcestník
                    </NavLink>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default Tracking
