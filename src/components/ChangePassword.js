import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { clearErrors } from '../actions/error';
import { changePassword } from '../actions/auth';

class ChangePassword extends Component {
    state = {
        oldPassword: '',
        newPassword: '',
        saved: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        success: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired,
        changePassword: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { oldPassword, newPassword } = this.state;

        this.props.changePassword({ oldPassword, newPassword });

        this.setState({ errorMsg: null, saved: true });
    };

    isDisabled = () => {
        return this.props.success.msg || !this.state.oldPassword || !this.state.newPassword;
    };

    render() {
        return (
            <Fragment>
                {this.props.error.msg ? <Alert color="danger">{this.props.error.msg}</Alert> : null}
                {this.props.success.msg ? <Alert color="success">{this.props.success.msg}</Alert> : null}
                <h1>Změnit heslo</h1>
                <Form onSubmit={this.onSubmit} autoComplete={'off'}>
                    <FormGroup>
                        <Label for="oldPassword">Staré heslo</Label>
                        <Input
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                            placeholder="Staré heslo"
                            value={this.state.oldPassword}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="newPassword">Nové heslo</Label>
                        <Input
                            type="password"
                            name="newPassword"
                            id="newPassword"
                            placeholder="Nové heslo"
                            value={this.state.newPassword}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button color="dark" style={{ marginTop: '2rem' }} disabled={this.isDisabled()} block>
                        Změnit
                    </Button>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    success: state.success
});

export default connect(mapStateToProps, { clearErrors, changePassword })(ChangePassword);
