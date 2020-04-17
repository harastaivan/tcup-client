import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Row, Col, FormGroup, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import ValidatedInput, { TRANSLATED, GLIDER_TYPE } from './ValidatedInput';
import { updateRegistration } from '../actions/registration';
import isEmpty from '../utils/isEmpty';

const EditRegistrationForm = (props) => {
    const auth = useSelector((state) => state.auth);
    const registration = useSelector((state) => state.registration.registration);
    const formData = useSelector((state) => state.registration.formData);

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(props.edit);
    const [birthDate, setBirthDate] = useState(registration.birthDate);
    const [phone, setPhone] = useState(registration.phone);
    const [aeroclub, setAeroclub] = useState(registration.aeroclub);
    const [region, setRegion] = useState(registration.region._id);
    const [gliderType, setGliderType] = useState(registration.glider.gliderType._id);
    const [registrationNumber, setRegistrationNumber] = useState(registration.glider.registrationNumber);
    const [startNumber, setStartNumber] = useState(registration.glider.startNumber);
    const [competitionClass, setCompetitionClass] = useState(registration.competitionClass._id);
    const [logger, setLogger] = useState(registration.logger);
    const [accomodationType, setAccomodationType] = useState(registration.accomodation.accomodationType._id);
    const [quantity, setQuantity] = useState(registration.accomodation.quantity);
    const [meals, setMeals] = useState(registration.meals);
    const [note, setNote] = useState(registration.note);

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
        dispatch(updateRegistration(registration));
        setEdit(!edit);
    };

    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('Přihláška')}</h1>
            {!edit && (
                <Button
                    color="primary"
                    className="mb-3"
                    onClick={() => {
                        setEdit(!edit);
                    }}
                >
                    {t('upravit přihlášku')}
                </Button>
            )}

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
                <Row form>
                    <Col md={12}>
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
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="date"
                                name="birthDate"
                                label={t('Datum narození')}
                                value={birthDate}
                                setValue={setBirthDate}
                                disabled={!edit}
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="phone"
                                label={t('Telefon')}
                                value={phone}
                                setValue={setPhone}
                                disabled={!edit}
                                required
                            ></ValidatedInput>
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
                                disabled={!edit}
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
                                disabled={!edit}
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
                                disabled={!edit}
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
                                disabled={!edit}
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
                                disabled={!edit}
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
                                disabled={!edit}
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
                                disabled={!edit}
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
                                disabled={!edit}
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
                                disabled={!edit}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <ValidatedInput
                                type="number"
                                name="meals"
                                label={t('Počet osob pro jídlo')}
                                placeholder={t('Počet osob')}
                                value={meals}
                                setValue={setMeals}
                                disabled={!edit}
                                required
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="note"
                                label={t('Poznámka')}
                                value={note}
                                setValue={setNote}
                                disabled={!edit}
                            ></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                {edit && (
                    <Button color="dark" style={{ marginTop: '2rem' }} disabled={!isFormValid()} block>
                        {t('Editovat přihlášku')}
                    </Button>
                )}
            </Form>
        </div>
    );
};

EditRegistrationForm.propTypes = {
    edit: PropTypes.bool.isRequired
};

export default EditRegistrationForm;
