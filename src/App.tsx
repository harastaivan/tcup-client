import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Alert, Container } from 'reactstrap';
import { Provider } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import News from './components/News';
import Registration from './components/Registration';
import Login from './components/Login';
import Statuses from './components/Statuses';
import StartingList from './components/StartingList';
import Documents from './components/Documents';
import Contacts from './components/Contacts';
import SendIgc from './components/SendIgc';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Logout from './components/Logout';
import Results from './components/Results';
import UserSettings from './components/UserSettings';
import ChangePassword from './components/ChangePassword';

import { loadUser } from './actions/auth';
import store from './store';

const App = (): JSX.Element => {
    useEffect((): void => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <AppNavbar />
                    <Container className="p-3 min-vh-container transparent-background">
                        {process.env.REACT_APP_TEST_MODE && (
                            <Alert color="warning">
                                Aplikace se právě testuje. Nemusí vše fungovat správně.{' '}
                                <a href="https://gitreports.com/issue/harastaivan/tcup-client">Chyby hlašte zde</a>.
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
