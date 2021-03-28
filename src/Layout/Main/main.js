import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../Header/header'
import Auth from '../Auth/auth'
import Messagerie from '../Messagerie/messagerie'
import Inscription from '../Inscription/inscription'
import Home from '../Home/home'
import Dashboard from '../Dashboard/dashboard'
import Profile from '../Profile/IndexProfile'

import { FirebaseAuthConsumer } from '@react-firebase/auth'
import Axios from 'axios'
import { constants } from '../../constants'
import PendingList from '../Profile/PendingList'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Loader from 'react-loader-spinner'

String.prototype.capitalize = function () {
    try {
        return this.charAt(0).toUpperCase() + this.slice(1)
    } catch (err) {
        return ''
    }
}

const Main = () => {
    return (
        <div className='font-openSans overflow-x-hidden overflow-y-hidden'>
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
                                    }, 300000)
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
                                        </React.Fragment>
                                    )
                                } else {
                                    return (
                                        <Backdrop open={true} style={{ zIndex: 10 }} className='bg-gray-800'>
                                            <div className='w-screen h-screen bg-gray-800 flex justify-center items-center'>
                                                <Loader type='Circles' color='#00BFFF' height={120} width={120} />
                                            </div>
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
