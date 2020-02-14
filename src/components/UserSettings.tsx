import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import EditUserSettings from './EditUserSettings';
import Login from './Login';
import { useHistory } from 'react-router-dom';

const UserSettings = (): JSX.Element => {
    // TODO: Fix types
    // @ts-ignore
    // eslint-disable-next-line
    const isAuthenticated = useSelector((state): bool => state.auth.isAuthenticated);
    // TODO: useHistory in Login, don't pass though props
    const history = useHistory();

    return (
        <Fragment>
            {isAuthenticated && <EditUserSettings />}
            {!isAuthenticated && <Login history={history} />}
        </Fragment>
    );
};

export default UserSettings;
