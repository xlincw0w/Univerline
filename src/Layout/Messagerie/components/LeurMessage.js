import React from 'react';
import AvatarUsers from './AvatarUsers'

function LeurMessage(props) {

    const message = props.msg

    return (
        <>

            <div className="message-row">

                <div className="message" style={{ float: 'left', backgroundColor: '#455a64', color: 'white', marginLeft: '20px' }}>
                    {message}
                </div>
            </div>
        </>
    )

}

export default LeurMessage;