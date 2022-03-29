import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { Alert, Container } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import type { TKey } from 'translations'

import store from 'store'
import { loadUser } from 'store/auth/actions'
import { getAuth } from 'store/auth/selectors'
import { getError } from 'store/error/selectors'

import AppNavbar from 'containers/AppNavbar'
import Home from 'containers/Home'
import News from 'containers/News'
import Registration from 'containers/Registration'
import Login from 'containers/Login'
import CompetitorStatuses from 'containers/CompetitorStatuses'
import StartingList from 'containers/StartingList'
import Documents from 'containers/Documents'
import Contacts from 'containers/Contacts'
import SendIgc from 'containers/SendIgc'
import Signup from 'containers/Signup'
import Footer from 'containers/Footer'
import Logout from 'containers/Logout'
import Results from 'containers/Results'
import UserSettings from 'containers/UserSettings'
import ChangePassword from 'containers/ChangePassword'
import CompetitionDays from 'containers/CompetitionDays'
import ResetPassword from 'containers/ResetPassword'
import UsersList from 'containers/UsersList'

import Archive from 'components/Archive'
import TestMode from 'components/TestMode'
import Offline from 'components/Offline'
import SpinnerFullPage from 'components/SpinnerFullPage'

const App = () => {
    const error = useSelector(getError)
    const dispatch = useDispatch()
    const { token, isAdmin } = useSelector(getAuth)

    useEffect(() => {
        if (token === null) return
        dispatch(loadUser())
    }, [dispatch, token])

    const { t } = useTranslation()

    const isHomepage = useRouteMatch('/')?.isExact || false
    const isResultsPage = useRouteMatch('/results')?.isExact || false

    const isSpecialPage = isHomepage || isResultsPage

    return (
        <div className="App">
            <AppNavbar />
            <Offline />
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/" component={Home} exact />
            </Switch>
            <Container className={!isSpecialPage ? 'p-3 min-vh-container transparent-background' : ''}>
                <TestMode hidden={isSpecialPage} />
                {error.msg && <Alert color="danger">{t(error.msg as TKey)}</Alert>}
                <Switch>
                    <Route path="/news" component={News} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/statuses" component={CompetitorStatuses} />
                    <Route path="/starting-list" component={StartingList} />
                    <Route path="/documents" component={Documents} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/igc" component={SendIgc} />
                    <Route path="/user-profile" component={UserSettings} />
                    <Route path="/change-password" component={ChangePassword} />
                    <Route path="/archive" component={Archive} />
                    <Route path="/competition-days" component={CompetitionDays} />
                    <Route path="/password-reset" component={ResetPassword} />
                    {isAdmin && <Route path="/users" component={UsersList} />}
                </Switch>
            </Container>
            {!isSpecialPage && <Footer />}
            <SpinnerFullPage />
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
