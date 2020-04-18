import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom';
import { Alert, Spinner } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import RegistrationForm from './RegistrationForm';
import EditRegistrationForm from './EditRegistrationForm';
import AdminRegistrationForm from './AdminRegistrationForm';
import Login from './Login';
import { getRegistration, getFormData } from '../actions/registration';

const Registration = () => {
    const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
    const { loading, isRegistered } = useSelector((state) => state.registration);

    const dispatch = useDispatch();

    const { t } = useTranslation();
    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        dispatch(getRegistration());
        dispatch(getFormData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getRegistration());
    }, [dispatch, isAuthenticated]);

    const spinner = <Spinner type="grow" color="secondary" className="m-3" />;

    return (
        <div>
            {loading ? (
                spinner
            ) : (
                <Switch>
                    <Route path={`${match.path}/:registrationId`}>
                        {(!isAuthenticated || !isAdmin) && (
                            <div>
                                <Alert color="info">
                                    {t('Pro upravení přihlášky uživatele se přihlaste jako admin.')}
                                </Alert>
                                <Login history={history} />
                            </div>
                        )}

                        {isAuthenticated && isAdmin && <AdminRegistrationForm />}
                    </Route>
                    <Route path={match.path}>
                        <Fragment>
                            {!isAuthenticated && (
                                <div>
                                    <Alert color="info">{t('Pro vytvoření přihlášky se přihlaste.')}</Alert>
                                    <Login history={history} />
                                </div>
                            )}

                            {isAuthenticated && isRegistered && <EditRegistrationForm edit={false} />}
                            {isAuthenticated && !isRegistered && <RegistrationForm />}
                        </Fragment>
                    </Route>
                </Switch>
            )}
        </div>
    );
};

export default Registration;
