import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, ButtonGroup, Button } from 'reactstrap'
import Moment from 'react-moment'
import { useTranslation } from 'react-i18next'
import { getCompetitionDays, updateCompetitionDay } from '../store/competitionDay/actions'
import { translateDayName } from '../utils/translateDayName'

const UsersList = () => {
    const {t } = useTranslation()

    return (
        <div>
            <h1>{t('Seznam uživatelů')}</h1>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>{t('jméno')}</th>
                        <th>{t('příjmení')}</th>
                        <th>{t('email')}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((day) => (
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

export default UsersList
