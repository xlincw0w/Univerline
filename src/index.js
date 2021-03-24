import React from 'react'
import reactDOM from 'react-dom'
import Main from './Layout/Main/main'
import firebase from 'firebase/app'
import thunk from "redux-thunk"
import 'firebase/auth'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import firebaseConfig from './firebaseConfig'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import rootReducer from './store/rootReducer'
import './Tailwind/index.css'

const store = createStore(rootReducer, applyMiddleware(thunk))

reactDOM.render(
    <Provider store={store}>
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            <Main />
        </FirebaseAuthProvider>
    </Provider>,
    document.getElementById('root')
)
