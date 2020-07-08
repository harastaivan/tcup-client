import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import Spinner from '../components/Spinner';
import { getCompetitionDay } from '../utils/getCompetitionDay';
import { getCompetitionDays } from '../actions/competitionDay';
import { formatCompetitionDay } from '../utils/formatCompetitionDay';

const SendIgc = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const competitionDays = useSelector((state) => state.competitionDay.competitionDays);

    const [file, setFile] = useState('');
    const [pilot, setPilot] = useState('');
    const [today, setToday] = useState('');
    const [fileInputKey, setFileInputKey] = useState(Date.now());

    useEffect(() => {
        dispatch(getCompetitionDays());
    }, [dispatch]);

    useEffect(() => {
        const today = getCompetitionDay(competitionDays);
        if (!today) {
            return;
        }
        setToday(today);
    }, [competitionDays]);

    const pilots = [
        {
            _id: 1,
            name: 'Ivan',
            surname: 'Harašta',
            startNumber: 'HI'
        },
        {
            _id: 2,
            name: 'Pavel',
            surname: 'Jiránek',
            startNumber: 'YID'
        }
    ];

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit', file, pilot, today);
        setFile(null);
        setFileInputKey(Date.now());
        setPilot('');
    };

    const submitDisabled = () => {
        return !file || !pilot || !today;
    };

    return (
        <Fragment>
            <h2>{t('Odeslat IGC')}</h2>
            <Row form>
                <Col md={6}>
                    {today && <p>{formatCompetitionDay(today, t)}</p>}
                    {!today && <Spinner />}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for={'pilot'}>{t('Pilot')}</Label>
                            <Input
                                type={'select'}
                                name={'pilot'}
                                id={'pilot'}
                                value={pilot}
                                onChange={(e) => {
                                    setPilot(e.target.value);
                                }}
                                disabled={pilots.length === 0}
                            >
                                <option value="">{t('Vyber pilota')}</option>
                                {pilots.map((pilot) => {
                                    return (
                                        <option key={pilot._id} value={pilot._id}>
                                            {`${pilot.startNumber} - ${pilot.name} ${pilot.surname}`}
                                        </option>
                                    );
                                })}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="file">{t('IGC soubor')}</Label>
                            <Input
                                key={fileInputKey}
                                type="file"
                                name="file"
                                id="file"
                                accept=".igc"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </FormGroup>
                        <Button color="dark" style={{ marginTop: '2rem' }} disabled={submitDisabled()} block>
                            {t('Nahrát')}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SendIgc;
