import React, { useState, Fragment } from 'react';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import isEmpty from '../utils/isEmpty';
import { submitRegistration } from '../actions/registration';
import GdprConsent from './GdprConsent';

import RegistrationFormTemplate from '../components/RegistrationForm';

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

    const header = <h1>{t('Vytvoření přihlášky')}</h1>;

    const footer = (
        <Fragment>
            <GdprConsent action="Vytvořením přihlášky souhlasíte" />
            <Button color="dark" style={{ marginTop: '2rem' }} disabled={!isFormValid()} block>
                {t('Vytvořit přihlášku')}
            </Button>
        </Fragment>
    );

    return (
        <RegistrationFormTemplate
            header={header}
            onSubmit={onSubmit}
            formData={formData}
            disabled={false}
            footer={footer}
            name={auth.user.name}
            surname={auth.user.surname}
            email={auth.user.email}
            birthDate={birthDate}
            phone={phone}
            aeroclub={aeroclub}
            region={region}
            gliderType={gliderType}
            registrationNumber={registrationNumber}
            startNumber={startNumber}
            competitionClass={competitionClass}
            logger={logger}
            accomodationType={accomodationType}
            quantity={quantity}
            meals={meals}
            note={note}
            setBirthDate={setBirthDate}
            setPhone={setPhone}
            setAeroclub={setAeroclub}
            setRegion={setRegion}
            setGliderType={setGliderType}
            setRegistrationNumber={setRegistrationNumber}
            setStartNumber={setStartNumber}
            setCompetitionClass={setCompetitionClass}
            setLogger={setLogger}
            setAccomodationType={setAccomodationType}
            setQuantity={setQuantity}
            setMeals={setMeals}
            setNote={setNote}
        />
    );
};

export default RegistrationForm;
