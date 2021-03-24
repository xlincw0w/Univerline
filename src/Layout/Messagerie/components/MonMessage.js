import React from 'react';

function MonMessage(props) {
    const message = props.msg


    return (

        <>



            <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#2a3eb1' }}>
                {message}
            </div>

        </>
    )

}

export default MonMessage;