import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Row, Col, Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import Spinner from '../components/Spinner';
import { getCompetitionDay } from '../utils/getCompetitionDay';
import { getCompetitionDays } from '../actions/competitionDay';
import { formatCompetitionDay } from '../utils/formatCompetitionDay';
import { addIgc, getIgcFormData } from '../actions/igc';

const SendIgc = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const competitionDays = useSelector((state) => state.competitionDay.competitionDays);
    const { pilots, loading, success, error } = useSelector((state) => state.igc);

    const [day, setDay] = useState('');

    useEffect(() => {
        dispatch(getCompetitionDays());
    }, [dispatch]);

    useEffect(() => {
        const today = getCompetitionDay(competitionDays);
        if (!today) {
            return;
        }
        setDay(today._id);
    }, [competitionDays]);

    return (
        <div style={{ marginTop: '2rem' }}>
            <h3>{t('Stáhnout IGC')}</h3>
            <Form>
                <Row>
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
                                            {formatCompetitionDay(day, t)}
                                        </option>
                                    );
                                })}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SendIgc;
