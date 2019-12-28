import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Table, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment/locale/cs';

import { getStartingList, setStartingListLoading } from '../actions/startingList';

class StartingList extends Component {
    static propTypes = {
        getStartingList: PropTypes.func.isRequired,
        setStartingListLoading: PropTypes.func.isRequired,
        startingList: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.setStartingListLoading();
        this.props.getStartingList();
    }

    render() {
        const { classes, loading } = this.props.startingList;
        const spinner = <Spinner type="grow" color="secondary" className="m-3" />;
        return (
            <Container>
                <h1>Startovní listina</h1>
                {loading ? spinner : null}
                {classes.map((one) => (
                    <Fragment key={one._id}>
                        <h2>{one.name}</h2>
                        {one.registrations.length ? (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>jméno</th>
                                        <th className="d-none d-md-table-cell">datum narození</th>
                                        <th>aeroklub</th>
                                        <th>startovní číslo</th>
                                        <th>typ</th>
                                        <th>imatrikulace</th>
                                        <th className="d-none d-md-table-cell">zaplaceno</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {one.registrations.map((registration) => (
                                        <tr key={registration._id}>
                                            <td>{registration.fullName}</td>
                                            <td className="d-none d-md-table-cell">
                                                <Moment format={'YYYY'} locale="cs">
                                                    {registration.birthDate}
                                                </Moment>
                                            </td>
                                            <td>{registration.aeroclub}</td>
                                            <td>{registration.startNumber}</td>
                                            <td>{registration.gliderType}</td>
                                            <td>{registration.registrationNumber}</td>
                                            {registration.paid ? (
                                                <td className="d-none d-md-table-cell text-success">ano</td>
                                            ) : (
                                                <td className="d-none d-md-table-cell text-danger">ne</td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ) : (
                            'Nikdo z této třídy nemá podanou přihlášku.'
                        )}
                    </Fragment>
                ))}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    startingList: state.startingList
});

export default connect(mapStateToProps, { getStartingList, setStartingListLoading })(StartingList);
