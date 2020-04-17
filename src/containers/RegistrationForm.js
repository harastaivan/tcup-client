import React, { useState } from 'react';
import { Form, Row, Col, FormGroup, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ValidatedInput, { TRANSLATED, GLIDER_TYPE } from './ValidatedInput';
import isEmpty from '../utils/isEmpty';
import { submitRegistration } from '../actions/registration';
import GdprConsent from './GdprConsent';

const RegistrationForm = () => {
    const auth = useSelector((state) => state.auth);
    const formData = useSelector((state) => state.registration.formData);

    const dispatch = useDispatch();

    const { t } = useTranslation();

    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [aeroclub, setAeroclub] = useState('');
    const [region, setRegion] = useState('');
    const [gliderType, setGliderType] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [startNumber, setStartNumber] = useState('');
    const [competitionClass, setCompetitionClass] = useState('');
    const [logger, setLogger] = useState('');
    const [accomodationType, setAccomodationType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [meals, setMeals] = useState('');
    const [note, setNote] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const registration = {
            birthDate,
            phone,
            aeroclub,
            region,
            glider: {
                gliderType,
                registrationNumber,
                startNumber
            },
            competitionClass,
            logger,
            accomodation: {
                accomodationType,
                quantity
            },
            meals,
            note
        };
        dispatch(submitRegistration(registration));
    };

    const isFormValid = () => {
        return (
            !isEmpty(phone) &&
            !isEmpty(aeroclub) &&
            !isEmpty(region) &&
            !isEmpty(gliderType) &&
            !isEmpty(registrationNumber) &&
            !isEmpty(startNumber) &&
            !isEmpty(competitionClass) &&
            !isEmpty(logger) &&
            !isEmpty(accomodationType) &&
            !isEmpty(quantity) &&
            !isEmpty(meals)
        );
    };

    return (
        <div>
            <h1>{t('Vytvoření přihlášky')}</h1>
            <Form onSubmit={onSubmit} autoComplete={'off'}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="name"
                                label={t('Jméno')}
                                value={auth.user.name}
                                setValue={() => {}}
                                disabled
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="surname"
                                label={t('Příjmení')}
                                value={auth.user.surname}
                                setValue={() => {}}
                                disabled
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <ValidatedInput
                        type="email"
                        name="email"
                        label={t('Email')}
                        value={auth.user.email}
                        setValue={() => {}}
                        disabled
                    ></ValidatedInput>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="date"
                                name="birthDate"
                                label={t('Datum narození')}
                                value={birthDate}
                                setValue={setBirthDate}
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <FormGroup>
                                <ValidatedInput
                                    type="text"
                                    name="phone"
                                    label={t('Telefon')}
                                    value={phone}
                                    setValue={setPhone}
                                    required
                                ></ValidatedInput>
                            </FormGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="aeroclub"
                                label={t('Aeroklub')}
                                value={aeroclub}
                                setValue={setAeroclub}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="select"
                                name="region"
                                label={t('Region')}
                                value={region}
                                setValue={setRegion}
                                select
                                selectData={formData.regions}
                                selectDataType={TRANSLATED}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <ValidatedInput
                                type="select"
                                name="gliderType"
                                label={t('Typ kluzáku')}
                                value={gliderType}
                                setValue={setGliderType}
                                select
                                selectData={formData.gliderTypes}
                                selectDataType={GLIDER_TYPE}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="registrationNumber"
                                label={t('Imatrikulace')}
                                value={registrationNumber}
                                setValue={setRegistrationNumber}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="startNumber"
                                label={t('Startovní číslo')}
                                value={startNumber}
                                setValue={setStartNumber}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="select"
                                name="competitionClass"
                                label={t('Třída')}
                                value={competitionClass}
                                setValue={setCompetitionClass}
                                select
                                selectData={formData.competitionClasses}
                                selectDataType={TRANSLATED}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="logger"
                                label={t('Logger')}
                                value={logger}
                                setValue={setLogger}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="select"
                                name="accomodationType"
                                label={t('Typ ubytování')}
                                value={accomodationType}
                                setValue={setAccomodationType}
                                select
                                selectData={formData.accomodationTypes}
                                selectDataType={TRANSLATED}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="number"
                                name="quantity"
                                label={t('Počet osob pro ubytování')}
                                placeholder={t('Počet osob')}
                                value={quantity}
                                setValue={setQuantity}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <ValidatedInput
                        type="number"
                        name="meals"
                        label={t('Počet osob pro jídlo')}
                        placeholder={t('Počet osob')}
                        value={meals}
                        setValue={setMeals}
                        required
                    ></ValidatedInput>
                </FormGroup>
                <FormGroup>
                    <ValidatedInput
                        type="text"
                        name="note"
                        label={t('Poznámka')}
                        value={note}
                        setValue={setNote}
                    ></ValidatedInput>
                </FormGroup>
                <GdprConsent action="Vytvořením přihlášky souhlasíte" />
                <Button color="dark" style={{ marginTop: '2rem' }} disabled={!isFormValid()} block>
                    {t('Vytvořit přihlášku')}
                </Button>
            </Form>
        </div>
    );
};

export default RegistrationForm;
