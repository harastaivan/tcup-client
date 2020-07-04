import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, ButtonGroup, Button, Input, Label, Form, Row, Col, FormGroup } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { getCompetitionDays } from '../actions/competitionDay';
import {
    getCompetitorStatuses,
    updateCompetitorStatus,
    resetCompetitorStatuses,
    setLoadingCompetitorStatuses
} from '../actions/competitorStatus';
import Spinner from '../components/Spinner';
import { getCompetitionDay } from '../utils/getCompetitionDay';

const competitorStatusesEnum = [
    {
        label: 'na zemi',
        code: 'DNF',
        color: 'info'
    },
    {
        label: 'letí',
        code: 'FLYING',
        color: 'primary'
    },
    {
        label: 'na poli',
        code: 'OUTLANDING',
        color: 'danger'
    },
    {
        label: 'doma',
        code: 'HOME',
        color: 'success'
    }
];

const CompetitorStatuses = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [day, setDay] = useState('');

    const competitionDays = useSelector((state) => state.competitionDay.competitionDaysUntilToday);
    const { competitorStatuses, loading } = useSelector((state) => state.competitorStatus);
    const { isAdmin } = useSelector((state) => state.auth);

    const updateStatus = (status, newStatus) => {
        status.status = newStatus;
        dispatch(updateCompetitorStatus(status));
    };

    useEffect(() => {
        dispatch(resetCompetitorStatuses());
        dispatch(getCompetitionDays());
    }, [dispatch]);

    useEffect(() => {
        const today = getCompetitionDay(competitionDays);
        if (!today) {
            return;
        }
        setDay(today._id);
    }, [competitionDays]);

    useEffect(() => {
        dispatch(resetCompetitorStatuses());
        if (!day) {
            return;
        }
        dispatch(setLoadingCompetitorStatuses());
        dispatch(getCompetitorStatuses(day));
    }, [dispatch, day]);

    return (
        <div>
            <h1>{t('Statusy soutěžících')}</h1>
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={'competitionDay'}>{t('Vyber den')}</Label>
                            <Input
                                type={'select'}
                                name={'competitionDay'}
                                id={'competitionDay'}
                                value={day}
                                onChange={(e) => {
                                    setDay(e.target.value);
                                }}
                                disabled={competitionDays.length === 0}
                            >
                                <option value="">{t('Vyber den')}</option>
                                {competitionDays.map((day) => {
                                    return (
                                        <option key={day._id} value={day._id}>
                                            {`${day.name} - ${moment(day.date).format('DD. MM. YYYY')}`}
                                        </option>
                                    );
                                })}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            {competitorStatuses.length > 0 && (
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>{t('jméno')}</th>
                            <th>{t('typ kluzáku')}</th>
                            <th>{t('imatrikulace')}</th>
                            <th>{t('startovní číslo')}</th>
                            <th>{t('status')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competitorStatuses.map((status) => {
                            const statusInfo = competitorStatusesEnum.find((s) => s.code === status.status);
                            const userStatus = <span className={`text-${statusInfo.color}`}>{statusInfo.label}</span>;
                            const adminStatus = (
                                <ButtonGroup>
                                    {competitorStatusesEnum.map((s) => (
                                        <Button
                                            key={s.code}
                                            color={s.code === status.status ? s.color : 'secondary'}
                                            onClick={() => {
                                                updateStatus(status, s.code);
                                            }}
                                        >
                                            {t(s.label)}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            );
                            return (
                                <tr key={status._id}>
                                    <td>{`${status.name} ${status.surname}`}</td>
                                    <td>{status.glider.gliderType.name}</td>
                                    <td>{status.glider.registrationNumber}</td>
                                    <td>{status.glider.startNumber}</td>
                                    <td>
                                        {isAdmin && adminStatus}
                                        {!isAdmin && userStatus}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            )}
            {competitorStatuses.length === 0 && loading && <Spinner />}
            {competitorStatuses.length === 0 && !loading && (
                <Fragment>{t('Na tento den nejsou žádné statusy soutěžících.')}</Fragment>
            )}
        </div>
    );
};

export default CompetitorStatuses;
