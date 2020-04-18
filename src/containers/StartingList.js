import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Table, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { withTranslation } from 'react-i18next';
import 'moment/locale/cs';

import { getStartingList, setStartingListLoading, markPaid, exportRegistrations } from '../actions/startingList';

class StartingList extends Component {
    static propTypes = {
        getStartingList: PropTypes.func.isRequired,
        setStartingListLoading: PropTypes.func.isRequired,
        startingList: PropTypes.object.isRequired,
        markPaid: PropTypes.func.isRequired,
        exportRegistrations: PropTypes.func.isRequired,
        isAdmin: PropTypes.bool,
        t: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.setStartingListLoading();
        this.props.getStartingList();
    }

    markPaid = (registrationId, nowPaid) => {
        const paid = !nowPaid;
        this.props.markPaid(registrationId, paid);
    };

    exportStartingList = () => {
        this.props.exportRegistrations();
    };

    render() {
        const { classes, loading } = this.props.startingList;
        const { isAdmin, t } = this.props;
        const spinner = <Spinner type="grow" color="secondary" className="m-3" />;
        return (
            <Container>
                <h1>{t('Startovní listina')}</h1>
                {loading ? spinner : null}
                {isAdmin && (
                    <Button color="primary" className="mb-3" onClick={this.exportStartingList}>
                        {t('export přihlášek')}
                    </Button>
                )}
                {classes.map((one) => (
                    <Fragment key={one._id}>
                        <h2>
                            {t(one.name)} {one.registrations.length ? `(${one.registrations.length})` : null}
                        </h2>
                        {one.registrations.length ? (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>{t('jméno')}</th>
                                        <th className="d-none d-md-table-cell">{t('datum narození')}</th>
                                        <th>{t('aeroklub')}</th>
                                        <th>{t('startovní číslo')}</th>
                                        <th>{t('typ')}</th>
                                        <th>{t('imatrikulace')}</th>
                                        <th className="d-none d-md-table-cell">{t('zaplaceno')}</th>
                                        <th className="d-none d-md-table-cell"> </th>
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
                                                <td className="d-none d-md-table-cell text-success">{t('ano')}</td>
                                            ) : (
                                                <td className="d-none d-md-table-cell text-danger">{t('ne')}</td>
                                            )}
                                            <td className="d-none d-md-table-cell">
                                                {isAdmin && (
                                                    <Button
                                                        color={registration.paid ? 'danger' : 'success'}
                                                        className="mb-1"
                                                        onClick={this.markPaid.bind(
                                                            this,
                                                            registration._id,
                                                            registration.paid
                                                        )}
                                                        size="sm"
                                                    >
                                                        {registration.paid
                                                            ? t('označit jako nezaplacené')
                                                            : t('označit jako zaplacené')}
                                                    </Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ) : (
                            t('Nikdo z této třídy nemá podanou přihlášku.')
                        )}
                    </Fragment>
                ))}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    startingList: state.startingList,
    isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, { getStartingList, setStartingListLoading, markPaid, exportRegistrations })(
    withTranslation()(StartingList)
);