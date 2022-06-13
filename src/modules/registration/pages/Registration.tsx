import { Switch, Route } from 'react-router-dom'
import { Alert } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import Spinner from 'components/Spinner'
import { RegistrationFormAsUser, RegistrationFormAsAdmin, useRegistrationPage } from 'modules/registration'
import { LoginPage } from 'modules/auth'

export const RegistrationPage = () => {
    const { loading, path, adminPath, isAdmin, isAuthenticated, user } = useRegistrationPage()
    const { t } = useTranslation()

    return (
        <div>
            <Switch>
                <Route path={adminPath}>
                    {!isAuthenticated && (
                        <div>
                            {/* TODO: Redirect to /login */}
                            <Alert color="info">{t('registration.update.login')}</Alert>
                            <LoginPage />
                        </div>
                    )}
                    {isAuthenticated && !isAdmin && (
                        <div>
                            {/* TODO: Redirect to /login */}
                            <Alert color="danger">{t('registration.admin.login')}</Alert>
                            <LoginPage />
                        </div>
                    )}
                    {isAuthenticated && isAdmin && <RegistrationFormAsAdmin />}
                </Route>
                <Route path={path}>
                    {loading && <Spinner />}
                    {!loading && !isAuthenticated && (
                        <div>
                            {/* TODO: Redirect to /login */}
                            <Alert color="info">{t('registration.create.login')}</Alert>
                            <LoginPage />
                        </div>
                    )}
                    {!loading && isAuthenticated && <RegistrationFormAsUser user={user!} />}
                </Route>
            </Switch>
        </div>
    )
}
