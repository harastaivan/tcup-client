import React, { Component } from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormData, updateRegistration } from '../actions/registration';
import { withTranslation } from 'react-i18next';

class EditRegistrationForm extends Component {
    state = {
        edit: this.props.edit,
        birthDate: this.props.registration.registration.birthDate,
        phone: this.props.registration.registration.phone,
        aeroclub: this.props.registration.registration.aeroclub,
        region: this.props.registration.registration.region._id,
        gliderType: this.props.registration.registration.glider.gliderType._id,
        registrationNumber: this.props.registration.registration.glider.registrationNumber,
        startNumber: this.props.registration.registration.glider.startNumber,
        competitionClass: this.props.registration.registration.competitionClass._id,
        logger: this.props.registration.registration.logger,
        accomodationType: this.props.registration.registration.accomodation.accomodationType._id,
        quantity: this.props.registration.registration.accomodation.quantity,
        meals: this.props.registration.registration.meals,
        note: this.props.registration.registration.note,
        birthDateValid: true,
        phoneValid: true,
        aeroclubValid: true,
        regionValid: true,
        gliderTypeValid: true,
        registrationNumberValid: true,
        startNumberValid: true,
        competitionClassValid: true,
        loggerValid: true,
        accomodationTypeValid: true,
        quantityValid: true,
        mealsValid: true,
        noteValid: true,
        birthDateVisited: false,
        phoneVisited: false,
        aeroclubVisited: false,
        regionVisited: false,
        gliderTypeVisited: false,
        registrationNumberVisited: false,
        startNumberVisited: false,
        competitionClassVisited: false,
        loggerVisited: false,
        accomodationTypeVisited: false,
        quantityVisited: false,
        mealsVisited: false,
        noteVisited: false
    };

    static propTypes = {
        getFormData: PropTypes.func.isRequired,
        edit: PropTypes.bool.isRequired,
        updateRegistration: PropTypes.func.isRequired,
        registration: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,
        t: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.validateField(e);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {
            birthDate,
            phone,
            aeroclub,
            region,
            gliderType,
            registrationNumber,
            startNumber,
            competitionClass,
            logger,
            accomodationType,
            quantity,
            meals,
            note
        } = this.state;

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
        this.props.updateRegistration(registration);
        this.toggleEdit();
    };

    dataIsEmpty = () => {
        return (
            !this.state.birthDateValid ||
            !this.state.phoneValid ||
            !this.state.aeroclubValid ||
            !this.state.regionValid ||
            !this.state.gliderTypeValid ||
            !this.state.registrationNumberValid ||
            !this.state.startNumberValid ||
            !this.state.competitionClassValid ||
            !this.state.loggerValid ||
            !this.state.accomodationTypeValid ||
            !this.state.quantityValid ||
            !this.state.mealsValid ||
            !this.state.noteValid
        );
    };

    validateField = (e) => {
        const valid = e.target.name + 'Valid';
        const visited = e.target.name + 'Visited';
        this.setState({
            [valid]: !e.target.required || e.target.value,
            [visited]: true
        });
    };

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        });
    };

    render() {
        const t = this.props.t;
        return (
            <div>
                <h1>{t('Přihláška')}</h1>
                {!this.state.edit && (
                    <Button color="primary" className="mb-3" onClick={this.toggleEdit}>
                        {t('upravit přihlášku')}
                    </Button>
                )}

                <Form onSubmit={this.onSubmit} autoComplete={'off'}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">{t('Jméno')}</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder={t('Jméno')}
                                    value={this.props.auth.user.name}
                                    onChange={this.onChange}
                                    disabled
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="surname">{t('Příjmení')}</Label>
                                <Input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    placeholder={t('Příjmení')}
                                    value={this.props.auth.user.surname}
                                    onChange={this.onChange}
                                    disabled
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="email">{t('Email')}</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t('Email')}
                            value={this.props.auth.user.email}
                            onChange={this.onChange}
                            disabled
                        />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="birthDate">{t('Datum narození')}</Label>
                                <Input
                                    type="date"
                                    name="birthDate"
                                    id="birthDate"
                                    value={this.state.birthDate}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    onBlur={this.validateField}
                                    valid={this.state.birthDateValid && this.state.birthDateVisited}
                                    invalid={!this.state.birthDateValid && this.state.birthDateVisited}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="phone">{t('Telefon')}</Label>
                                <Input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder={t('Telefon')}
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.phoneValid && this.state.phoneVisited}
                                    invalid={!this.state.phoneValid && this.state.phoneVisited}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="aeroclub">{t('Aeroklub')}</Label>
                                <Input
                                    type="text"
                                    name="aeroclub"
                                    id="aeroclub"
                                    placeholder={t('Aeroklub')}
                                    value={this.state.aeroclub}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.aeroclubValid && this.state.aeroclubVisited}
                                    invalid={!this.state.aeroclubValid && this.state.aeroclubVisited}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="region">{t('Region')}</Label>
                                <Input
                                    type="select"
                                    name="region"
                                    id="region"
                                    value={this.state.region}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.regionValid && this.state.regionVisited}
                                    invalid={!this.state.regionValid && this.state.regionVisited}
                                >
                                    <option value="">{t('Region')}</option>
                                    {this.props.registration.formData.regions.map((region) => {
                                        return (
                                            <option key={region._id} value={region._id}>
                                                {t(region.name)}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="gliderType">{t('Typ kluzáku')}</Label>
                                <Input
                                    type="select"
                                    name="gliderType"
                                    id="gliderType"
                                    onChange={this.onChange}
                                    value={this.state.gliderType}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.gliderTypeValid && this.state.gliderTypeVisited}
                                    invalid={!this.state.gliderTypeValid && this.state.gliderTypeVisited}
                                >
                                    <option value="">{t('Typ kluzáku')}</option>
                                    {this.props.registration.formData.gliderTypes.map((gliderType) => {
                                        return (
                                            <option key={gliderType._id} value={gliderType._id}>
                                                {gliderType.name} ({gliderType.index})
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="registrationNumber">{t('Imatrikulace')}</Label>
                                <Input
                                    type="text"
                                    name="registrationNumber"
                                    id="registrationNumber"
                                    placeholder={'OK-1234'}
                                    value={this.state.registrationNumber}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.registrationNumberValid && this.state.registrationNumberVisited}
                                    invalid={
                                        !this.state.registrationNumberValid && this.state.registrationNumberVisited
                                    }
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="startNumber">{t('Startovní číslo')}</Label>
                                <Input
                                    type="text"
                                    name="startNumber"
                                    id="startNumber"
                                    placeholder={'HI'}
                                    value={this.state.startNumber}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.startNumberValid && this.state.startNumberVisited}
                                    invalid={!this.state.startNumberValid && this.state.startNumberVisited}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="competitionClass">{t('Třída')}</Label>
                                <Input
                                    type="select"
                                    name="competitionClass"
                                    id="competitionClass"
                                    value={this.state.competitionClass}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.competitionClassValid && this.state.competitionClassVisited}
                                    invalid={!this.state.competitionClassValid && this.state.competitionClassVisited}
                                >
                                    <option value="">{t('Třída')}</option>
                                    {this.props.registration.formData.competitionClasses.map((competitionClass) => {
                                        return (
                                            <option key={competitionClass._id} value={competitionClass._id}>
                                                {competitionClass.name}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="logger">{t('Logger')}</Label>
                                <Input
                                    type="text"
                                    name="logger"
                                    id="logger"
                                    placeholder={t('Logger')}
                                    value={this.state.logger}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.loggerValid && this.state.loggerVisited}
                                    invalid={!this.state.loggerValid && this.state.loggerVisited}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="accomodationType">{t('Typ ubytování')}</Label>
                                <Input
                                    type="select"
                                    name="accomodationType"
                                    id="accomodationType"
                                    value={this.state.accomodationType}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.accomodationTypeValid && this.state.accomodationTypeVisited}
                                    invalid={!this.state.accomodationTypeValid && this.state.accomodationTypeVisited}
                                >
                                    <option value="">{t('Typ ubytování')}</option>
                                    {this.props.registration.formData.accomodationTypes.map((accomodationType) => {
                                        return (
                                            <option key={accomodationType._id} value={accomodationType._id}>
                                                {t(accomodationType.name)}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="quantity">{t('Počet osob pro ubytování')}</Label>
                                <Input
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    placeholder={t('Počet osob')}
                                    value={this.state.quantity}
                                    onChange={this.onChange}
                                    disabled={!this.state.edit}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.quantityValid && this.state.quantityVisited}
                                    invalid={!this.state.quantityValid && this.state.quantityVisited}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Label for="meals">{t('Počet osob pro jídlo')}</Label>
                        <Input
                            type="number"
                            name="meals"
                            id="meals"
                            placeholder={t('Počet osob')}
                            value={this.state.meals}
                            onChange={this.onChange}
                            disabled={!this.state.edit}
                            required
                            onBlur={this.validateField}
                            valid={this.state.mealsValid && this.state.mealsVisited}
                            invalid={!this.state.mealsValid && this.state.mealsVisited}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="note">{t('Poznámka')}</Label>
                        <Input
                            type="text"
                            name="note"
                            id="note"
                            placeholder={t('Poznámka')}
                            value={this.state.note}
                            onChange={this.onChange}
                            disabled={!this.state.edit}
                            onBlur={this.validateField}
                            valid={this.state.noteValid && this.state.noteVisited}
                            invalid={!this.state.noteValid && this.state.noteVisited}
                        />
                    </FormGroup>
                    {this.state.edit && (
                        <Button color="dark" style={{ marginTop: '2rem' }} disabled={this.dataIsEmpty()} block>
                            {t('Editovat přihlášku')}
                        </Button>
                    )}
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    registration: state.registration
});

const mapDispatchToProps = {
    getFormData,
    updateRegistration
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(EditRegistrationForm));
