import React from 'react'
import { Form, Row, Col, FormGroup } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import ValidatedInput, { TRANSLATED, GLIDER_TYPE } from '../containers/ValidatedInput'
import Checkbox from '../containers/Checkbox'

const RegistrationForm = (props) => {
    const { t } = useTranslation()

    return (
        <div>
            {props.header}

            <Form onSubmit={props.onSubmit} autoComplete={'off'}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="name"
                                label={t('Jméno')}
                                value={props.name}
                                setValue={() => {}}
                                disabled></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="surname"
                                label={t('Příjmení')}
                                value={props.surname}
                                setValue={() => {}}
                                disabled></ValidatedInput>
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
                                value={props.email}
                                setValue={() => {}}
                                disabled></ValidatedInput>
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
                                value={props.birthDate}
                                setValue={props.setBirthDate}
                                disabled={props.disabled}></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="phone"
                                label={t('Telefon')}
                                value={props.phone}
                                setValue={props.setPhone}
                                disabled={props.disabled}
                                required></ValidatedInput>
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
                                value={props.aeroclub}
                                setValue={props.setAeroclub}
                                disabled={props.disabled}
                                required></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="select"
                                name="region"
                                label={t('Region')}
                                value={props.region}
                                setValue={props.setRegion}
                                select
                                selectData={props.formData.regions}
                                selectDataType={TRANSLATED}
                                disabled={props.disabled}
                                required></ValidatedInput>
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
                                value={props.gliderType}
                                setValue={props.setGliderType}
                                select
                                selectData={props.formData.gliderTypes}
                                selectDataType={GLIDER_TYPE}
                                disabled={props.disabled}
                                required></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="registrationNumber"
                                label={t('Imatrikulace')}
                                value={props.registrationNumber}
                                setValue={props.setRegistrationNumber}
                                disabled={props.disabled}
                                required></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="startNumber"
                                label={t('Startovní číslo')}
                                value={props.startNumber}
                                setValue={props.setStartNumber}
                                disabled={props.disabled}
                                required></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form style={{ paddingBottom: '2em' }}>
                    <Col md={6}>
                        <FormGroup check>
                            <Checkbox
                                id="hasEngine"
                                value={props.hasEngine}
                                setValue={props.setHasEngine}
                                label={t('Má motor')}
                                disabled={props.disabled}
                            />
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
                                value={props.competitionClass}
                                setValue={props.setCompetitionClass}
                                select
                                selectData={props.formData.competitionClasses}
                                selectDataType={TRANSLATED}
                                disabled={props.disabled}
                                required></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="text"
                                name="logger"
                                label={t('Logger')}
                                value={props.logger}
                                setValue={props.setLogger}
                                disabled={props.disabled}
                                required></ValidatedInput>
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
                                value={props.accomodationType}
                                setValue={props.setAccomodationType}
                                select
                                selectData={props.formData.accomodationTypes}
                                selectDataType={TRANSLATED}
                                disabled={props.disabled}
                                required></ValidatedInput>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ValidatedInput
                                type="number"
                                name="quantity"
                                label={t('Počet osob pro ubytování')}
                                placeholder={t('Počet osob')}
                                value={props.quantity}
                                setValue={props.setQuantity}
                                disabled={props.disabled}
                                required></ValidatedInput>
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
                                value={props.meals}
                                setValue={props.setMeals}
                                disabled={props.disabled}
                                required></ValidatedInput>
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
                                value={props.note}
                                setValue={props.setNote}
                                disabled={props.disabled}></ValidatedInput>
                        </FormGroup>
                    </Col>
                </Row>
                {props.igcId !== undefined && (
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <ValidatedInput
                                    type="text"
                                    name="igcId"
                                    label={t('IGC ID')}
                                    value={props.igcId}
                                    setValue={props.setIgcId}
                                    disabled={props.disabled}></ValidatedInput>
                            </FormGroup>
                        </Col>
                    </Row>
                )}
                {props.registrationCompleted !== undefined && (
                    <Row form style={{ paddingBottom: '2em' }}>
                        <Col md={6}>
                            <FormGroup check>
                                <Checkbox
                                    id="registrationCompleted"
                                    value={props.registrationCompleted}
                                    setValue={props.setRegistrationCompleted}
                                    label={t('Registrace dokončena')}
                                    disabled={props.disabled}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                )}
                {props.footer}
            </Form>
        </div>
    )
}

RegistrationForm.propTypes = {
    header: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
    footer: PropTypes.object.isRequired,
    name: PropTypes.any.isRequired,
    surname: PropTypes.any.isRequired,
    email: PropTypes.any.isRequired,
    birthDate: PropTypes.any.isRequired,
    phone: PropTypes.any.isRequired,
    aeroclub: PropTypes.any.isRequired,
    region: PropTypes.any.isRequired,
    gliderType: PropTypes.any.isRequired,
    registrationNumber: PropTypes.any.isRequired,
    startNumber: PropTypes.any.isRequired,
    hasEngine: PropTypes.any.isRequired,
    competitionClass: PropTypes.any.isRequired,
    logger: PropTypes.any.isRequired,
    accomodationType: PropTypes.any.isRequired,
    quantity: PropTypes.any.isRequired,
    meals: PropTypes.any.isRequired,
    note: PropTypes.any.isRequired,
    setBirthDate: PropTypes.func.isRequired,
    setPhone: PropTypes.func.isRequired,
    setAeroclub: PropTypes.func.isRequired,
    setRegion: PropTypes.func.isRequired,
    setGliderType: PropTypes.func.isRequired,
    setRegistrationNumber: PropTypes.func.isRequired,
    setStartNumber: PropTypes.func.isRequired,
    setHasEngine: PropTypes.func.isRequired,
    setCompetitionClass: PropTypes.func.isRequired,
    setLogger: PropTypes.func.isRequired,
    setAccomodationType: PropTypes.func.isRequired,
    setQuantity: PropTypes.func.isRequired,
    setMeals: PropTypes.func.isRequired,
    setNote: PropTypes.func.isRequired,
}

export default RegistrationForm
