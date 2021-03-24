import React from 'react'
import ChatMessage from './ChatMessage'
import MessageForm from './MessageForm'
import MonMessage from './MonMessage'
import LeurMessage from './LeurMessage'
import { keys } from '@material-ui/core/styles/createBreakpoints'
import Divider from '@material-ui/core/Divider';
import AvatarUsers from './AvatarUsers'
import Grid from '@material-ui/core/Grid';

function ChatFeed() {

    const [messages, setMessage] = React.useState([{ text: 1 }, { text: 1 }, { text: 1 }, { text: 1 }, { text: 1 }, { text: 1 }, { text: 1 }, { text: 1 }, { text: 1 }, { text: 1 },])
    const [uid, setUid] = React.useState('me')
    const [senderUid, setSenderUid] = React.useState('you')
    const [CurrentUserId, setCurrentUserId] = React.useState('mes')



    const RenderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index == 0 ? null : keys[index - 1];
            const isMyMessage = uid == CurrentUserId
            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage ?
                                <MonMessage message={message} />
                                : <LeurMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '3px', marginLeft: isMyMessage ? '3px' : '68px' }}>
                        read
                    </div>

                </div>
            )

        })
    }

    RenderMessages()
    if (!messages) return 'loading...'
    return (
        <>
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <div className="chat-feed">
                        <div className="chat-title-container" >
                            <Grid container justify="center" spacing={1}>
                                <Grid item>
                                    <AvatarUsers />

                                </Grid>
                                <Grid item>
                                    <div className="chat-title">
                                        Chérif Kadri
                                     </div>
                                    <div className="chat-subtitle">
                                        en ligne
                                     </div>

                                </Grid>

                            </Grid>

                        </div>
                        <Divider style={{ marginBottom: '15px' }} />
                        <div className="msgscroll">
                            {RenderMessages()}
                        </div>


                        <div style={{ height: '100px' }} />

                    </div>
                </Grid>

                <Grid item>

                    <div className="message-form-container">
                        <Divider />
                        <MessageForm />

                    </div>
                </Grid>
            </Grid>


        </>
    )

}

export default ChatFeed;