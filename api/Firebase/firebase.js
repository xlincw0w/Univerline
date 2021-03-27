const firebase = require('firebase/app')
const firebaseConfig = require('./firebaseConfig')

require('firebase/auth')
require('firebase/firestore')

firebase.initializeApp(firebaseConfig)
firebase.auth().languageCode = 'fr'

firebase.auth().signInWithEmailAndPassword('admin@univerline.com', 'D9z"cLtunyqE:^XF%wb}?P=T~.a9}E_m')

module.exports = firebase
