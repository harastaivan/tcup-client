import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import RegistrationForm from './RegistrationForm';
import EditRegistrationForm from './EditRegistrationForm';
import AdminRegistrationForm from './AdminRegistrationForm';
import Login from './Login';
import { getRegistration, getFormData } from '../actions/registration';
import Spinner from '../components/Spinner';

const Registration = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
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

    const loginAsUser = (
        <div>
            <Alert color="info">{t('Pro vytvoření přihlášky se přihlaste.')}</Alert>
            <Login history={history} />
        </div>
    );

    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:registrationId`}>
                    <AdminRegistrationForm edit={false} />
                </Route>
                <Route path={match.path}>
                    {loading && <Spinner />}
                    {!loading && !isAuthenticated && loginAsUser}
                    {!loading && isAuthenticated && !isRegistered && <RegistrationForm />}
                    {!loading && isAuthenticated && isRegistered && <EditRegistrationForm edit={false} />}
                </Route>
            </Switch>
        </div>
    );
};

export default Registration;
