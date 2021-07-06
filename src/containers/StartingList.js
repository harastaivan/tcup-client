import { Fragment, useEffect, useState } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Button, ButtonGroup, Container, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment'
import { useTranslation } from 'react-i18next'
import 'moment/locale/cs'

import {
    getStartingList as getStartingListAction,
    setStartingListLoading,
    markPaid,
    exportRegistrations,
} from '../store/startingList/actions'
import Spinner from '../components/Spinner'
import { getIsAdmin } from '../store/auth/selectors'
import { getStartingList } from '../store/startingList/selectors'

const registrationsCompletedEnum = [
    {
        label: 'všechny registrace',
        color: 'primary',
        filter: null,
    },
    {
        label: 'dokončené',
        color: 'success',
        filter: true,
    },
    {
        label: 'nedokončené',
        color: 'danger',
        filter: false,
    },
]

const StartingList = () => {
    const [registrationCompletedIndex, setRegistrationCompletedIndex] = useState(0)

    const startingList = useSelector(getStartingList)
    const isAdmin = useSelector(getIsAdmin)

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const onMarkPaid = (registrationId, nowPaid) => () => {
        const paid = !nowPaid
        dispatch(markPaid(registrationId, paid))
    }

    const exportStartingList = () => {
        dispatch(exportRegistrations())
    }

    useEffect(() => {
        dispatch(setStartingListLoading())
        dispatch(getStartingListAction())
    }, [dispatch])

    const { classes, loading } = startingList

    const getRegistrations = (competitionClass) => {
        const { filter } = registrationsCompletedEnum[registrationCompletedIndex]
        if (filter === null) {
            return competitionClass.registrations
        }

        return competitionClass.registrations.filter((reg) => reg.registrationCompleted === filter)
    }

    return (
        <Container>
            <h1>{t('Startovní listina')}</h1>
            {loading ? <Spinner /> : null}
            {isAdmin && (
                <Button color="primary" className="mb-3" onClick={exportStartingList}>
                    {t('export přihlášek')}
                </Button>
            )}
            {isAdmin && (
                <div style={{ marginBottom: '1em' }}>
                    <ButtonGroup>
                        {registrationsCompletedEnum.map((s, index) => (
                            <Button
                                key={s.label}
                                color={index === registrationCompletedIndex ? s.color : 'secondary'}
                                onClick={() => {
                                    setRegistrationCompletedIndex(index)
                                }}>
                                {t(s.label)}
                            </Button>
                        ))}
                    </ButtonGroup>
                    <span style={{ marginLeft: '1em' }}>(Určeno pro registraci závodníků v první soutěžní den)</span>
                </div>
            )}
            {classes.map((one) => {
                const registrations = getRegistrations(one)

                return (
                    <Fragment key={one._id}>
                        <h2>
                            {t(one.name)} {registrations.length ? `(${registrations.length})` : null}
                        </h2>
                        {registrations.length ? (
                            <div style={{ overflowX: 'scroll' }}>
                                <Table striped responsive>
                                    <thead>
                                        <tr>
                                            <th>{t('jméno')}</th>
                                            <th>{t('datum narození')}</th>
                                            <th>{t('aeroklub')}</th>
                                            <th>{t('startovní číslo')}</th>
                                            <th>{t('typ')}</th>
                                            <th>{t('imatrikulace')}</th>
                                            <th>{t('zaplaceno')}</th>
                                            {isAdmin && (
                                                <Fragment>
                                                    <th>administrace</th>
                                                    <th> </th>
                                                </Fragment>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {registrations.map((registration) => (
                                            <tr key={registration._id}>
                                                <td>{registration.fullName}</td>
                                                <td>
                                                    {registration.birthDate && (
                                                        <Moment format={'YYYY'} locale="cs">
                                                            {registration.birthDate}
                                                        </Moment>
                                                    )}
                                                </td>
                                                <td>{registration.aeroclub}</td>
                                                <td>{registration.startNumber}</td>
                                                <td>{registration.gliderType}</td>
                                                <td>{registration.registrationNumber}</td>
                                                {registration.paid ? (
                                                    <td className="text-success">{t('ano')}</td>
                                                ) : (
                                                    <td className="text-danger">{t('ne')}</td>
                                                )}
                                                {isAdmin && (
                                                    <Fragment>
                                                        <td>
                                                            <Button
                                                                color={registration.paid ? 'danger' : 'success'}
                                                                className="mb-1"
                                                                onClick={onMarkPaid(
                                                                    registration._id,
                                                                    registration.paid
                                                                )}
                                                                size="sm">
                                                                {registration.paid
                                                                    ? t('označit jako nezaplacené')
                                                                    : t('označit jako zaplacené')}
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                outline
                                                                color={'primary'}
                                                                className="mb-1"
                                                                onClick={() => {}}
                                                                size="sm"
                                                                tag={Link}
                                                                to={`/registration/${registration._id}`}>
                                                                {t('úprava přihlášky')}
                                                            </Button>
                                                        </td>
                                                    </Fragment>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        ) : (
                            <p style={{ margin: '1.5rem 0', color: '#323232' }}>
                                {t('Nikdo z této třídy nemá podanou přihlášku.')}
                            </p>
                        )}
                    </Fragment>
                )
            })}
        </Container>
    )
}

export default StartingList
