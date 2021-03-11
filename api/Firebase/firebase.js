const firebase = require('firebase/app')
const firebaseConfig = require('./firebaseConfig')

require('firebase/auth')
require('firebase/firestore')

firebase.initializeApp(firebaseConfig)
firebase.auth().languageCode = 'fr'

module.exports = firebase

// const provider = new firebase.auth.GoogleAuthProvider()
// firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((res) => {
//         console.log('pop')
//     })
//     .catch((err) => console.log(err))

// firebase
//     .auth()
//     .createUserWithEmailAndPassword('khaled.khazem@yahoo.com', 'Azerty123')
//     .then((userCred) => {
//         console.log(userCred)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// firebase
//     .auth()
//     .signInWithEmailAndPassword('khaled.khazem@yahoo.com', 'Azerty123')
//     .then((userCred) => {
//         console.log(userCred)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log('connected')
//     } else {
//         console.log('disconnected')
//     }
// })
