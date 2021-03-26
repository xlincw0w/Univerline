import React, { Component } from 'react';

function ChatMessage(props) {
    const messageClass = props.sender ? 'sent' : 'received'

    return (
        <>
            <div className={` message ${messageClass}`}>

                <p>{props.message}</p>
            </div>


        </>
    )

}

export default ChatMessage