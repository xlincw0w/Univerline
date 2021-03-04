import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../Header/header'
import Auth from '../Auth/auth'
import Messagerie from '../Messagerie/messagerie'
import Inscription from '../Inscription/inscription'
import Home from '../Home/home'
import Dashbaord from '../Dashboard/dashbaord'
import Erreur from '../Erreur/erreur'
import Footer from '../Footer/footer'
import Profile from '../Profile/IndexProfile'

const Main = () => {
    return (
        <div className='font-openSans'>
            <Router>
                <Header />
                <div style={{ minHeight: '2000px', height: 'auto' }}>
                    <Switch>
                        <Route path='/dashboard'>
                            <Dashbaord />
                        </Route>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path='/messagerie'>
                            <Messagerie />
                        </Route>
                        <Route path='/auth'>
                            <Auth />
                        </Route>
                        <Route path='/inscription'>
                            <Inscription />
                        </Route>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route>
                            <Erreur />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    )
}

export default Main
