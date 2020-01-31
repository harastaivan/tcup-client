import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import { clearErrors } from '../actions/error';

class UserSettings extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
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
        const { name, surname, email } = this.state;

        const newUser = {
            name,
            surname,
            email
        };
        this.props.register(newUser);
    };

    render() {
        return (
            <div>
                {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                <h1>Změnit mé údaje</h1>
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
                    <Button
                        color="dark"
                        style={{ marginTop: '2rem' }}
                        disabled={!this.state.name || !this.state.surname || !this.state.email}
                        block
                    >
                        Změnit
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(UserSettings);
