import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'

import ChatMessage from './ChatMessage'



const auth = firebase.auth();
const firestore = firebase.firestore();

function Messagerie(props) {


    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)


    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.fieldValue.server

        })
        setFormValue('')
    }

    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
            </main>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type="submit"> envoyer</button>
            </form>
        </>
    )

}

export default Messagerie