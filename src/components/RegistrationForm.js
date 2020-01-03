import React, { Component } from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormData, submitRegistration } from '../actions/registration';

class RegistrationForm extends Component {
    state = {
        birthDate: '',
        phone: '',
        aeroclub: '',
        region: '',
        gliderType: '',
        registrationNumber: '',
        startNumber: '',
        competitionClass: '',
        logger: '',
        accomodationType: '',
        quantity: '',
        meals: '',
        note: '',
        birthDateValid: true,
        phoneValid: false,
        aeroclubValid: false,
        regionValid: false,
        gliderTypeValid: false,
        registrationNumberValid: false,
        startNumberValid: false,
        competitionClassValid: false,
        loggerValid: false,
        accomodationTypeValid: false,
        quantityValid: false,
        mealsValid: false,
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
        getFormData: PropTypes.func,
        submitRegistration: PropTypes.func,
        auth: PropTypes.object,
        registration: PropTypes.object
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
        this.props.submitRegistration(registration);
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

    render() {
        return (
            <div>
                <h1>Vytvoření přihlášky</h1>
                <Form onSubmit={this.onSubmit} autoComplete={'off'}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">Jméno</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Jméno"
                                    value={this.props.auth.user.name}
                                    onChange={this.onChange}
                                    disabled
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="surname">Příjmení</Label>
                                <Input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    placeholder="Příjmení"
                                    value={this.props.auth.user.surname}
                                    onChange={this.onChange}
                                    disabled
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={this.props.auth.user.email}
                            onChange={this.onChange}
                            disabled
                        />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="birthDate">Datum narození</Label>
                                <Input
                                    type="date"
                                    name="birthDate"
                                    id="birthDate"
                                    value={this.state.birthDate}
                                    onChange={this.onChange}
                                    onBlur={this.validateField}
                                    valid={this.state.birthDateValid && this.state.birthDateVisited}
                                    invalid={!this.state.birthDateValid && this.state.birthDateVisited}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="phone">Telefon</Label>
                                <Input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Telefon"
                                    value={this.state.phone}
                                    onChange={this.onChange}
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
                                <Label for="aeroclub">Aeroklub</Label>
                                <Input
                                    type="text"
                                    name="aeroclub"
                                    id="aeroclub"
                                    placeholder="Aeroklub"
                                    value={this.state.aeroclub}
                                    onChange={this.onChange}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.aeroclubValid && this.state.aeroclubVisited}
                                    invalid={!this.state.aeroclubValid && this.state.aeroclubVisited}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="region">Region</Label>
                                <Input
                                    type="select"
                                    name="region"
                                    id="region"
                                    value={this.state.region}
                                    onChange={this.onChange}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.regionValid && this.state.regionVisited}
                                    invalid={!this.state.regionValid && this.state.regionVisited}
                                >
                                    <option value="">Region</option>
                                    {this.props.registration.formData.regions.map((region) => {
                                        return (
                                            <option key={region._id} value={region._id}>
                                                {region.name}
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
                                <Label for="gliderType">Typ kluzáku</Label>
                                <Input
                                    type="select"
                                    name="gliderType"
                                    id="gliderType"
                                    onChange={this.onChange}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.gliderTypeValid && this.state.gliderTypeVisited}
                                    invalid={!this.state.gliderTypeValid && this.state.gliderTypeVisited}
                                    value={this.state.gliderType}
                                >
                                    <option value="">Typ kluzáku</option>
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
                                <Label for="registrationNumber">Registrace</Label>
                                <Input
                                    type="text"
                                    name="registrationNumber"
                                    id="registrationNumber"
                                    placeholder="Registrace"
                                    value={this.state.registrationNumber}
                                    onChange={this.onChange}
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
                                <Label for="startNumber">Startovní číslo</Label>
                                <Input
                                    type="text"
                                    name="startNumber"
                                    id="startNumber"
                                    placeholder="Startovní číslo"
                                    value={this.state.startNumber}
                                    onChange={this.onChange}
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
                                <Label for="competitionClass">Třída</Label>
                                <Input
                                    type="select"
                                    name="competitionClass"
                                    id="competitionClass"
                                    value={this.state.competitionClass}
                                    onChange={this.onChange}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.competitionClassValid && this.state.competitionClassVisited}
                                    invalid={!this.state.competitionClassValid && this.state.competitionClassVisited}
                                >
                                    <option value="">Třída</option>
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
                                <Label for="logger">Logger</Label>
                                <Input
                                    type="text"
                                    name="logger"
                                    id="logger"
                                    placeholder="Logger"
                                    value={this.state.logger}
                                    onChange={this.onChange}
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
                                <Label for="accomodationType">Typ ubytování</Label>
                                <Input
                                    type="select"
                                    name="accomodationType"
                                    id="accomodationType"
                                    value={this.state.accomodationType}
                                    onChange={this.onChange}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.accomodationTypeValid && this.state.accomodationTypeVisited}
                                    invalid={!this.state.accomodationTypeValid && this.state.accomodationTypeVisited}
                                >
                                    <option value="">Typ ubytování</option>
                                    {this.props.registration.formData.accomodationTypes.map((accomodationType) => {
                                        return (
                                            <option key={accomodationType._id} value={accomodationType._id}>
                                                {accomodationType.name}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="quantity">Počet osob pro ubytování</Label>
                                <Input
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    placeholder="Počet osob"
                                    value={this.state.quantity}
                                    onChange={this.onChange}
                                    required
                                    onBlur={this.validateField}
                                    valid={this.state.quantityValid && this.state.quantityVisited}
                                    invalid={!this.state.quantityValid && this.state.quantityVisited}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Label for="meals">Počet osob pro jídlo</Label>
                        <Input
                            type="number"
                            name="meals"
                            id="meals"
                            placeholder="Počet osob"
                            value={this.state.meals}
                            onChange={this.onChange}
                            required
                            onBlur={this.validateField}
                            valid={this.state.mealsValid && this.state.mealsVisited}
                            invalid={!this.state.mealsValid && this.state.mealsVisited}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="note">Poznámka</Label>
                        <Input
                            type="text"
                            name="note"
                            id="note"
                            placeholder="Poznámka"
                            value={this.state.note}
                            onChange={this.onChange}
                            onBlur={this.validateField}
                            valid={this.state.noteValid && this.state.noteVisited}
                            invalid={!this.state.noteValid && this.state.noteVisited}
                        />
                    </FormGroup>
                    <Button color="dark" style={{ marginTop: '2rem' }} disabled={this.dataIsEmpty()} block>
                        Vytvořit přihlášku
                    </Button>
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
    submitRegistration
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
