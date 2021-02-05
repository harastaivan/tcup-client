import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

import RegistrationFormTemplate from '../components/RegistrationForm'
import { updateRegistration } from '../store/registration/actions'
import isEmpty from '../utils/isEmpty'

const EditRegistrationForm = (props) => {
    const auth = useSelector((state) => state.auth)
    const registration = useSelector((state) => state.registration.registration)
    const formData = useSelector((state) => state.registration.formData)

    const dispatch = useDispatch()

    const [edit, setEdit] = useState(props.edit)
    const [birthDate, setBirthDate] = useState(registration.birthDate)
    const [phone, setPhone] = useState(registration.phone)
    const [aeroclub, setAeroclub] = useState(registration.aeroclub)
    const [region, setRegion] = useState(registration.region._id)
    const [gliderType, setGliderType] = useState(registration.glider.gliderType._id)
    const [registrationNumber, setRegistrationNumber] = useState(registration.glider.registrationNumber)
    const [startNumber, setStartNumber] = useState(registration.glider.startNumber)
    const [competitionClass, setCompetitionClass] = useState(registration.competitionClass._id)
    const [logger, setLogger] = useState(registration.logger)
    const [accomodationType, setAccomodationType] = useState(registration.accomodation.accomodationType._id)
    const [quantity, setQuantity] = useState(registration.accomodation.quantity)
    const [meals, setMeals] = useState(registration.meals)
    const [note, setNote] = useState(registration.note)

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
        )
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const registration = {
            birthDate,
            phone,
            aeroclub,
            region,
            glider: {
                gliderType,
                registrationNumber,
                startNumber,
            },
            competitionClass,
            logger,
            accomodation: {
                accomodationType,
                quantity,
            },
            meals,
            note,
        }
        dispatch(updateRegistration(registration))
        setEdit(!edit)
    }

    const { t } = useTranslation()

    const header = (
        <Fragment>
            <h1>{t('Přihláška')}</h1>
            {!edit && (
                <Button
                    color="primary"
                    className="mb-3"
                    onClick={() => {
                        setEdit(!edit)
                    }}>
                    {t('upravit přihlášku')}
                </Button>
            )}
        </Fragment>
    )

    const footer = (
        <Fragment>
            {edit && (
                <Button color="dark" style={{ marginTop: '2rem' }} disabled={!isFormValid()} block>
                    {t('Editovat přihlášku')}
                </Button>
            )}
        </Fragment>
    )

    return (
        <RegistrationFormTemplate
            header={header}
            onSubmit={onSubmit}
            formData={formData}
            disabled={!edit}
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
    )
}

EditRegistrationForm.propTypes = {
    edit: PropTypes.bool.isRequired,
}

export default EditRegistrationForm
