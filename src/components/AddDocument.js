import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';

import { addDocument } from '../actions/document';

class AddDocument extends React.Component {
    state = {
        file: null
    };

    static propTypes = {
        addDocument: PropTypes.func.isRequired,
        isAdmin: PropTypes.bool
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newDocument = {
            document: this.state.file
        };
        this.props.addDocument(newDocument);
        this.setState({
            file: null
        });
    };

    render() {
        const { isAdmin } = this.props;
        return (
            <Fragment>
                {isAdmin ? (
                    <Fragment>
                        <h2>Nahrát nový soubor</h2>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="file">Soubor</Label>
                                <Input type="file" name="file" id="file" onChange={this.onChange} />
                            </FormGroup>
                            <Button color="dark" style={{ marginTop: '2rem' }} disabled={!this.state.file} block>
                                Nahrát
                            </Button>
                        </Form>
                    </Fragment>
                ) : null}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    document: state.document,
    isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, { addDocument })(AddDocument);
