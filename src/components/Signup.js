import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/auth';
import { clearErrors } from '../actions/error';

class Signup extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, surname, email, password } = this.state;

        const newUser = {
            name,
            surname,
            email,
            password
        };
        this.props.register(newUser);
        this.setState({
            password: ''
        });
    };

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            this.props.clearErrors();
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                {this.props.error.msg ? <Alert color="danger">{this.props.error.msg}</Alert> : null}
                <h1>Registrovat se</h1>
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
                                    value={this.state.name}
                                    onChange={this.onChange}
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
                                    value={this.state.surname}
                                    onChange={this.onChange}
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
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Heslo</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Heslo"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button
                        color="dark"
                        style={{ marginTop: '2rem' }}
                        disabled={!this.state.name || !this.state.surname || !this.state.email || !this.state.password}
                        block
                    >
                        Registrovat se
                    </Button>
                </Form>
                <Alert color="light" style={{ marginTop: '2rem' }}>
                    Již máte účet? <Link to="/login">Přihlaste se.</Link>
                </Alert>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(Signup);
