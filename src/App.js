import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Alert, Container } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './containers/AppNavbar';
import Home from './containers/Home';
import News from './containers/News';
import Registration from './containers/Registration';
import Login from './containers/Login';
import Statuses from './containers/Statuses';
import StartingList from './containers/StartingList';
import Documents from './containers/Documents';
import Contacts from './containers/Contacts';
import SendIgc from './containers/SendIgc';
import Signup from './containers/Signup';
import Footer from './containers/Footer';
import Logout from './containers/Logout';
import Results from './containers/Results';
import UserSettings from './containers/UserSettings';
import ChangePassword from './containers/ChangePassword';

import { loadUser } from './actions/auth';

import store from './store';
import { useTranslation } from 'react-i18next';

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    const { t } = useTranslation();

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <AppNavbar />
                    <Container className="p-3 min-vh-container transparent-background">
                        {process.env.REACT_APP_TEST_MODE && (
                            <Alert color="warning">
                                {t('Aplikace se právě testuje. Nemusí vše fungovat správně.')}{' '}
                                <a href="https://gitreports.com/issue/harastaivan/tcup-client">
                                    {t('Chyby hlašte zde')}
                                </a>
                                .
                            </Alert>
                        )}
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/news" component={News} />
                            <Route path="/registration" component={Registration} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/statuses" component={Statuses} />
                            <Route path="/starting-list" component={StartingList} />
                            <Route path="/results" component={Results} />
                            <Route path="/documents" component={Documents} />
                            <Route path="/contacts" component={Contacts} />
                            <Route path="/igc" component={SendIgc} />
                            <Route path="/user-profile" component={UserSettings} />
                            <Route path="/change-password" component={ChangePassword} />
                        </Switch>
                    </Container>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
};

export default App;
