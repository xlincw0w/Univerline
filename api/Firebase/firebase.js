const firebase = require('firebase/app')
const firebaseConfig = require('./firebaseConfig')

require('firebase/auth')
require('firebase/firestore')

firebase.initializeApp(firebaseConfig)
firebase.auth().languageCode = 'fr'

module.exports = firebase
