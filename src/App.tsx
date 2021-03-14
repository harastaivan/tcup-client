import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { Alert, Container } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store'
import { loadUser } from './store/auth/actions'
import { getError } from './store/error/selectors'

import AppNavbar from './containers/AppNavbar'
import Home from './containers/Home'
import News from './containers/News'
import Registration from './containers/Registration'
import Login from './containers/Login'
import CompetitorStatuses from './containers/CompetitorStatuses'
import StartingList from './containers/StartingList'
import Documents from './containers/Documents'
import Contacts from './containers/Contacts'
import SendIgc from './containers/SendIgc'
import Signup from './containers/Signup'
import Footer from './containers/Footer'
import Logout from './containers/Logout'
import Results from './containers/Results'
import UserSettings from './containers/UserSettings'
import ChangePassword from './containers/ChangePassword'
import Archive from './components/Archive'
import CompetitionDays from './containers/CompetitionDays'
import ResetPassword from './containers/ResetPassword'
import UsersList from './containers/UsersList'

const App = () => {
    const error = useSelector(getError)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    const { t } = useTranslation()

    const match = useRouteMatch('/')
    const isHomepage = match && match.isExact

    return (
        <div className="App">
            <AppNavbar />
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
            <Container className={!isHomepage ? 'p-3 min-vh-container transparent-background' : ''}>
                {process.env.REACT_APP_TEST_MODE === 'true' && !isHomepage && (
                    <Alert color="warning">
                        {t('Aplikace se právě testuje. Nemusí vše fungovat správně.')}{' '}
                        <a href="https://gitreports.com/issue/harastaivan/tcup-client">{t('Chyby hlašte zde')}</a>.
                    </Alert>
                )}
                {error.msg && <Alert color="danger">{t(error.msg)}</Alert>}
                <Switch>
                    <Route path="/news" component={News} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/statuses" component={CompetitorStatuses} />
                    <Route path="/starting-list" component={StartingList} />
                    <Route path="/results" component={Results} />
                    <Route path="/documents" component={Documents} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/igc" component={SendIgc} />
                    <Route path="/user-profile" component={UserSettings} />
                    <Route path="/users" component={UsersList} />
                    <Route path="/change-password" component={ChangePassword} />
                    <Route path="/archive" component={Archive} />
                    <Route path="/competition-days" component={CompetitionDays} />
                    <Route path="/password-reset" component={ResetPassword} />
                </Switch>
            </Container>
            {!isHomepage && <Footer />}
        </div>
    )
}

const WrappedApp = () => {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}

export default WrappedApp
