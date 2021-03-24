import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import PrivateRoute from './componenents/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';





{/*const AppWrapper = () => {
    window.store = store;
    return (
        <Provider store={store}> // Set context
            <App2 /> // Now App has access to context
        </Provider>
    )
    */}


function Messagerie() {
    //const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    {
        /**
         *   useEffect(() => {
        if (!auth.authenticated) {
            console.log("not authenticated")
            dispatch(isLoggedInUser())
        }
    }, []);
         */
    }


    return (
        <div className="App">
            <HomePage />
        </div>
    );
}

export default Messagerie;
