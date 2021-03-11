import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../Header/header'
import Auth from '../Auth/auth'
import Messagerie from '../Messagerie/messagerie'
import Inscription from '../Inscription/inscription'
import Home from '../Home/home'
import Dashboard from '../Dashboard/dashboard'
import Erreur from '../Erreur/erreur'
import Footer from '../Footer/footer'
import Profile from '../Profile/IndexProfile'
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from '@react-firebase/auth'

const Main = () => {
    return (
        <div className='font-openSans overflow-x-hidden'>
            <Router>
                <div style={{ height: 'auto' }}>
                    <Switch>
                        <FirebaseAuthConsumer>
                            {({ isSignedIn, user, providerId }) => {
                                let emailVerified = false

                                if (user !== null) {
                                    emailVerified = user.emailVerified
                                }

                                if (isSignedIn && !emailVerified) {
                                    return (
                                        <React.Fragment>
                                            <Route path='/*'>
                                                <Header />
                                                <Inscription step={'confirmemail'} />
                                            </Route>
                                        </React.Fragment>
                                    )
                                } else if (isSignedIn && emailVerified) {
                                    return (
                                        <React.Fragment>
                                            <Route path='/profile'>
                                                <Header />
                                                <Profile />
                                            </Route>
                                            <Route path='/messagerie'>
                                                <Header />
                                                <Messagerie />
                                            </Route>
                                            <Route path='/inscription'>
                                                <Header />
                                                <Inscription />
                                            </Route>
                                            <Route exact path='/'>
                                                <Header />
                                                <Dashboard />
                                                {/* <Footer /> */}
                                            </Route>
                                        </React.Fragment>
                                    )
                                } else {
                                    return (
                                        <React.Fragment>
                                            <Route path='/auth'>
                                                <Header />
                                                <Auth />
                                            </Route>
                                            <Route path='/inscription'>
                                                <Header />
                                                <Inscription />
                                            </Route>
                                            <Route path='/profile'>
                                                <Profile />
                                            </Route>
                                            <Route path='/messagerie'>
                                                <Header />
                                                <Messagerie />
                                            </Route>
                                            <Route exact path='/'>
                                                <Home />
                                            </Route>
                                            {/* <Route>
                                                <Erreur />
                                            </Route> */}
                                        </React.Fragment>
                                    )
                                }
                            }}
                        </FirebaseAuthConsumer>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Main
