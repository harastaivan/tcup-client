import React, { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import RegistrationFormTemplate from '../components/RegistrationForm';
import Login from './Login';
import Spinner from '../components/Spinner';
import { getOtherRegistration, updateOtherRegistration } from '../actions/registration';
import isEmpty from '../utils/isEmpty';
import { useParams, useHistory } from 'react-router-dom';

const EditRegistrationForm = (props) => {
    const { otherRegistration, formData } = useSelector((state) => state.registration);
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(props.edit);
    const [birthDate, setBirthDate] = useState(otherRegistration.birthDate);
    const [phone, setPhone] = useState(otherRegistration.phone);
    const [aeroclub, setAeroclub] = useState(otherRegistration.aeroclub);
    const [region, setRegion] = useState(otherRegistration.region._id);
    const [gliderType, setGliderType] = useState(otherRegistration.glider.gliderType._id);
    const [registrationNumber, setRegistrationNumber] = useState(otherRegistration.glider.registrationNumber);
    const [startNumber, setStartNumber] = useState(otherRegistration.glider.startNumber);
    const [competitionClass, setCompetitionClass] = useState(otherRegistration.competitionClass._id);
    const [logger, setLogger] = useState(otherRegistration.logger);
    const [accomodationType, setAccomodationType] = useState(otherRegistration.accomodation.accomodationType._id);
    const [quantity, setQuantity] = useState(otherRegistration.accomodation.quantity);
    const [meals, setMeals] = useState(otherRegistration.meals);
    const [note, setNote] = useState(otherRegistration.note);

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
        dispatch(updateOtherRegistration(otherRegistration._id, registration));
        setEdit(!edit);
    };

    const { t } = useTranslation();

    const header = (
        <Fragment>
            <h1>
                {t('Úprava přihlášky')} - {otherRegistration.user.name} {otherRegistration.user.surname}
            </h1>
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
        </Fragment>
    );

    const footer = (
        <Fragment>
            {edit && (
                <Button color="dark" style={{ marginTop: '2rem' }} disabled={!isFormValid()} block>
                    {t('Editovat přihlášku')}
                </Button>
            )}
        </Fragment>
    );

    return (
        <RegistrationFormTemplate
            header={header}
            onSubmit={onSubmit}
            formData={formData}
            disabled={!edit}
            footer={footer}
            name={otherRegistration.user.name}
            surname={otherRegistration.user.surname}
            email={otherRegistration.user.email}
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

const AdminRegistrationForm = (props) => {
    const { registrationId } = useParams();

    const { loading, otherRegistration } = useSelector((state) => state.registration);
    const { isAdmin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { t } = useTranslation();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOtherRegistration(registrationId));
    }, [dispatch, registrationId]);

    const isEmpty = (obj) => {
        if (!obj) {
            return true;
        }
        return Object.keys(obj).length === 0;
    };

    const loginAsAdmin = (
        <div>
            <Alert color="info">{t('Pro upravení přihlášky uživatele se přihlaste jako admin.')}</Alert>
            <Login history={history} />
        </div>
    );

    const registrationIsEmpty = (
        <div>
            <Alert color="info">{t('Taková přihláška neexistuje.')}</Alert>
        </div>
    );

    return (
        <Fragment>
            {loading && <Spinner />}
            {!loading && !isAdmin && loginAsAdmin}
            {!loading && isAdmin && isEmpty(otherRegistration) && registrationIsEmpty}
            {!loading && isAdmin && !isEmpty(otherRegistration) && <EditRegistrationForm edit={props.edit} />}
        </Fragment>
    );
};

EditRegistrationForm.propTypes = {
    edit: PropTypes.bool.isRequired
};

AdminRegistrationForm.propTypes = {
    edit: PropTypes.bool.isRequired
};

export default AdminRegistrationForm;
