import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';



const firebaseConfig = {
    apiKey: 'AIzaSyC5N26SoG6zSPexR93tgTW9w1rYMEwRhwE',
    authDomain: 'univerline-697e5.firebaseapp.com',
    projectId: 'univerline-697e5',
    storageBucket: 'univerline-697e5.appspot.com',
    messagingSenderId: '1007553314927',
    appId: '1:1007553314927:web:a92f8247b8a081e8f64d9a',
    measurementId: 'G-QX145DYVKD',
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
    <Provider store={store}>

        <App />

    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
