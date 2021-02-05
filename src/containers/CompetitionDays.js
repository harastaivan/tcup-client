import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, ButtonGroup, Button } from 'reactstrap'
import Moment from 'react-moment'
import { useTranslation } from 'react-i18next'
import { getCompetitionDays, updateCompetitionDay } from '../actions/competitionDay'
import { translateDayName } from '../utils/translateDayName'

const competitionDaysEnum = [
    {
        label: 'bez úlohy',
        code: 'NO_TASK',
        color: 'info',
    },
    {
        label: 's úlohou',
        code: 'TASK',
        color: 'success',
    },
    {
        label: 'úloha zrušena',
        code: 'TASK_CANCELLED',
        color: 'danger',
    },
]

const CompetitionDays = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { competitionDays } = useSelector((state) => state.competitionDay)

    useEffect(() => {
        dispatch(getCompetitionDays())
    }, [dispatch])

    const updateDay = (day, task) => {
        day.task = task
        dispatch(updateCompetitionDay(day))
    }

    return (
        <div>
            <h1>{t('Soutěžní dny')}</h1>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>{t('soutěžní den')}</th>
                        <th>{t('datum')}</th>
                        <th>{t('status')}</th>
                    </tr>
                </thead>
                <tbody>
                    {competitionDays.map((day) => (
                        <tr key={day._id}>
                            <td>{translateDayName(day.name, t)}</td>
                            <td>
                                <Moment format={'DD. MM. YYYY'} locale="cs">
                                    {day.date}
                                </Moment>
                            </td>
                            <td>
                                <ButtonGroup>
                                    {competitionDaysEnum.map((d) => (
                                        <Button
                                            key={d.code}
                                            color={d.code === day.task ? d.color : 'secondary'}
                                            onClick={() => {
                                                updateDay(day, d.code)
                                            }}>
                                            {t(d.label)}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CompetitionDays
