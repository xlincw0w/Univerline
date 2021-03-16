import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../Header/header'
import Auth from '../Auth/auth'
import Messagerie from '../Messagerie/messagerie'
import Inscription from '../Inscription/inscription'
import Home from '../Home/home'
import Dashboard from '../Dashboard/dashboard'
// import Erreur from '../Erreur/erreur'
// import Footer from '../Footer/footer'
import Profile from '../Profile/IndexProfile'

import firebase from 'firebase/app'

import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from '@react-firebase/auth'
import Axios from 'axios'
import { constants } from '../../constants'
import PendingList from '../Profile/PendingList'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

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
                                    setInterval(() => {
                                        Axios.post(constants.url + '/api/online/update', {
                                            uid: user.uid,
                                        })
                                            .then((res) => {})
                                            .catch((err) => {})
                                    }, 60000)
                                    return (
                                        <React.Fragment>
                                            <Route path='/profile/:id'>
                                                <Header />
                                                <Profile />
                                            </Route>
                                            <Route path='/pending'>
                                                <Header />
                                                <PendingList />
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
                                } else if (providerId === 'none') {
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
                                } else {
                                    return (
                                        <Backdrop open={true} style={{ zIndex: 10 }}>
                                            <CircularProgress color='inherit' />
                                        </Backdrop>
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
