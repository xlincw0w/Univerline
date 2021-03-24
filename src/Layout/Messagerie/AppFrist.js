import React, { useState } from 'react';
import './App.css'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


//import Messagerie from './components/Messagerie'





firebase.initializeApp({

    apiKey: "AIzaSyCWoV3FHNIx3qwsXnd4lPqW0pYvU-iTHno",
    authDomain: "messagerieu.firebaseapp.com",
    projectId: "messagerieu",
    storageBucket: "messagerieu.appspot.com",
    messagingSenderId: "566781973063",
    appId: "1:566781973063:web:07693e996e2b369bb51762"



})

const auth = firebase.auth();
const firestore = firebase.firestore();

function AppFirst() {


    const [user] = useAuthState(auth)
    return (
        <div className="App">
            <header className="App-header">

            </header>

            <section>
                {user ? <Messagerie /> : <SignIn />}
            </section>

        </div>

    )
}
export default AppFirst;

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
    return (
        <button onClick={signInWithGoogle}> SignIn with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.SignOut()}>Sign Out</button>
    )

}
function Messagerie() {


    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)


    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = React.useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.fieldValue.serverTimestamp(),
            uid,
            photoURL

        })
        setFormValue('')
    }

    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage uid={msg.id} message={msg} />)}
            </main>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type="submit"> envoyer</button>
            </form>
        </>
    )

}

function ChatMessage(props) {

    const { text, uid } = props.message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'



    return (
        <>
            <div className={` message ${messageClass}`}>

                <p>{text}</p>
            </div>


        </>


    )





}

