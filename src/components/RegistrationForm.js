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
        region: 'Region',
        gliderType: 'Typ kluzáku',
        registrationNumber: '',
        startNumber: '',
        competitionClass: 'Třída',
        logger: '',
        accomodationType: 'Typ ubytování',
        quantity: '',
        meals: '',
        note: ''
    };

    static propTypes = {
        auth: PropTypes.object,
        registration: PropTypes.object,
        getFormData: PropTypes.func,
        submitRegistration: PropTypes.func
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onChangeSelect = e => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.key
        });
    };

    onSubmit = e => {
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
        return !(
            phone &&
            aeroclub &&
            region &&
            gliderType !== 'Typ kluzáku' &&
            registrationNumber &&
            startNumber &&
            competitionClass !== 'Třída' &&
            logger &&
            accomodationType !== 'Typ ubytování'
        );
    };

    componentDidMount() {
        this.props.getFormData();
    }

    render() {
        return (
            <div>
                <h1>Vytvoření přihlášky</h1>
                <Form onSubmit={this.onSubmit} autoComplete={'off'}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='name'>Jméno</Label>
                                <Input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Jméno'
                                    value={this.props.auth.user.name}
                                    onChange={this.onChange}
                                    disabled
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='surname'>Příjmení</Label>
                                <Input
                                    type='text'
                                    name='surname'
                                    id='surname'
                                    placeholder='Příjmení'
                                    value={this.props.auth.user.surname}
                                    onChange={this.onChange}
                                    disabled
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={this.props.auth.user.email}
                            onChange={this.onChange}
                            disabled
                        />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='birthDate'>Datum narození</Label>
                                <Input
                                    type='date'
                                    name='birthDate'
                                    id='birthDate'
                                    placeholder='DD/MM/YYYY'
                                    value={this.state.birthDate}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='phone'>Telefon</Label>
                                <Input
                                    type='text'
                                    name='phone'
                                    id='phone'
                                    placeholder='Telefon'
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='aeroclub'>Aeroklub</Label>
                                <Input
                                    type='text'
                                    name='aeroclub'
                                    id='aeroclub'
                                    placeholder='Aeroklub'
                                    value={this.state.aeroclub}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='region'>Region</Label>
                                <Input
                                    type='select'
                                    name='region'
                                    id='region'
                                    value={this.state.region}
                                    onChange={this.onChange}
                                >
                                    <option value=''>Region</option>
                                    {this.props.registration.formData.regions.map(region => {
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
                                <Label for='gliderType'>Typ kluzáku</Label>
                                <Input
                                    type='select'
                                    name='gliderType'
                                    id='gliderType'
                                    onChange={this.onChange}
                                    value={this.state.gliderType}
                                >
                                    <option value=''>Typ kluzáku</option>
                                    {this.props.registration.formData.gliderTypes.map(gliderType => {
                                        return (
                                            <option key={gliderType._id} value={gliderType._id}>
                                                {gliderType.name}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for='registrationNumber'>Registrace</Label>
                                <Input
                                    type='text'
                                    name='registrationNumber'
                                    id='registrationNumber'
                                    placeholder='Registrace'
                                    value={this.state.registrationNumber}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for='startNumber'>Startovní číslo</Label>
                                <Input
                                    type='text'
                                    name='startNumber'
                                    id='startNumber'
                                    placeholder='Startovní číslo'
                                    value={this.state.startNumber}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='competitionClass'>Třída</Label>
                                <Input
                                    type='select'
                                    name='competitionClass'
                                    id='competitionClass'
                                    value={this.state.competitionClass}
                                    onChange={this.onChange}
                                >
                                    <option value=''>Třída</option>
                                    {this.props.registration.formData.competitionClasses.map(competitionClass => {
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
                                <Label for='logger'>Logger</Label>
                                <Input
                                    type='text'
                                    name='logger'
                                    id='logger'
                                    placeholder='Logger'
                                    value={this.state.logger}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='accomodationType'>Typ ubytování</Label>
                                <Input
                                    type='select'
                                    name='accomodationType'
                                    id='accomodationType'
                                    value={this.state.accomodationType}
                                    onChange={this.onChange}
                                >
                                    <option value=''>Typ ubytování</option>
                                    {this.props.registration.formData.accomodationTypes.map(accomodationType => {
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
                                <Label for='quantity'>Počet osob pro ubytování</Label>
                                <Input
                                    type='number'
                                    name='quantity'
                                    id='quantity'
                                    placeholder='Počet osob'
                                    value={this.state.quantity}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Label for='meals'>Počet osob pro jídlo</Label>
                        <Input
                            type='number'
                            name='meals'
                            id='meals'
                            placeholder='Počet osob'
                            value={this.state.meals}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='note'>Poznámka</Label>
                        <Input
                            type='text'
                            name='note'
                            id='note'
                            placeholder='Poznámka'
                            value={this.state.note}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button color='dark' style={{ marginTop: '2rem' }} disabled={this.dataIsEmpty()} block>
                        Vytvořit přihlášku
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    registration: state.registration
});

const mapDispatchToProps = {
    getFormData,
    submitRegistration
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationForm);
