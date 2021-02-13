import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../Header/header'
import Auth from '../Auth/auth'
import Messagerie from '../Messagerie/messagerie'
import Inscription from '../Inscription/inscription'
import Home from '../Home/home'
import Dashbaord from '../Dashboard/dashbaord'

const Main = () => {
    return (
        <div className='font-openSans'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/dashboard'>
                        <Dashbaord />
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
                        <p>Erreur page inéxistante</p>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
