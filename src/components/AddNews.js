import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormGroup, Button, Input } from 'reactstrap';

import { addNews } from '../actions/news';

class AddNews extends React.Component {
    state = {
        title: '',
        body: ''
    };

    static propTypes = {
        addNews: PropTypes.func.isRequired,
        isAdmin: PropTypes.bool
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newNews = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.addNews(newNews);
    };

    render() {
        return (
            <Fragment>
                {this.props.isAdmin ? (
                    <Fragment>
                        <h2>Přidat novinku</h2>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Nadpis"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="textarea"
                                    name="body"
                                    id="body"
                                    placeholder="Novinka"
                                    onChange={this.onChange}
                                    style={{ height: '150px' }}
                                />
                            </FormGroup>
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                disabled={!this.state.title || !this.state.body}
                                block
                            >
                                Přidat novinku
                            </Button>
                        </Form>
                    </Fragment>
                ) : null}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news,
    isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, { addNews })(AddNews);
