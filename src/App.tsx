import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { Container } from 'reactstrap'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import store from 'store'
import { loadUser } from 'store/auth/actions'
import { getAuth } from 'store/auth/selectors'

import AppNavbar from 'containers/AppNavbar'
import Home from 'containers/Home'
import News from 'containers/News'
import { RegistrationPage } from 'modules/registration'
import Login from 'containers/Login'
import CompetitorStatuses from 'containers/CompetitorStatuses'
import { StartingListPage } from 'modules/startingList'
import Documents from 'containers/Documents'
import Contacts from 'containers/Contacts'
import SendIgc from 'containers/SendIgc'
import Signup from 'containers/Signup'
import { Footer } from 'modules/ui'
import Logout from 'containers/Logout'
import Results from 'containers/Results'
import UserSettings from 'containers/UserSettings'
import ChangePassword from 'containers/ChangePassword'
import CompetitionDays from 'containers/CompetitionDays'
import ResetPassword from 'containers/ResetPassword'
import UsersList from 'containers/UsersList'

import { Archive } from 'components/Archive'
import TestMode from 'components/TestMode'
import { SpinnerFullPage } from 'modules/ui'
import { Toaster } from 'modules/toast'
import { useOnlineStatus, useBackendStatus } from 'hooks'

const App = () => {
    const dispatch = useDispatch()
    const { token, isAdmin } = useSelector(getAuth)
    useOnlineStatus()
    useBackendStatus()

    useEffect(() => {
        if (token === null) return
        dispatch(loadUser())
    }, [dispatch, token])

    const isHomepage = useRouteMatch('/')?.isExact || false
    const isResultsPage = useRouteMatch('/results')?.isExact || false

    const isSpecialPage = isHomepage || isResultsPage

    return (
        <div className="App">
            <Toaster />
            <AppNavbar />
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/" component={Home} exact />
            </Switch>
            <Container className={!isSpecialPage ? 'p-3 min-vh-container transparent-background' : ''}>
                <TestMode hidden={isSpecialPage} />
                <Switch>
                    <Route path="/news" component={News} />
                    <Route path="/registration" component={RegistrationPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/statuses" component={CompetitorStatuses} />
                    <Route path="/starting-list" component={StartingListPage} />
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
