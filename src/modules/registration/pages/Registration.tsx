import { Switch, Route } from 'react-router-dom'
import { Alert } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import Login from '../../../containers/Login'
import Spinner from 'components/Spinner'
import { RegistrationFormAsUser, RegistrationFormAsAdmin, useRegistrationPage } from 'modules/registration'

export const RegistrationPage = () => {
    const { loading, path, adminPath, isAdmin, isAuthenticated, user } = useRegistrationPage()
    const { t } = useTranslation()

    return (
        <div>
            <Switch>
                <Route path={adminPath}>
                    {!isAuthenticated && (
                        <div>
                            <Alert color="info">{t('registration.update.login')}</Alert>
                            <Login />
                        </div>
                    )}
                    {isAuthenticated && !isAdmin && (
                        <div>
                            <Alert color="danger">{t('registration.admin.login')}</Alert>
                            <Login />
                        </div>
                    )}
                    {isAuthenticated && isAdmin && <RegistrationFormAsAdmin />}
                </Route>
                <Route path={path}>
                    {loading && <Spinner />}
                    {!loading && !isAuthenticated && (
                        <div>
                            <Alert color="info">{t('registration.create.login')}</Alert>
                            <Login />
                        </div>
                    )}
                    {!loading && isAuthenticated && <RegistrationFormAsUser user={user!} />}
                </Route>
            </Switch>
        </div>
    )
}
