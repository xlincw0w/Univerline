import React, { useState } from 'react';
import { BsFillImageFill } from "react-icons/bs"
import { IoSend } from "react-icons/io5"
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

function MessageForm() {

    const [value, setValue] = useState('')
    const handleSubmit = (e) => {

        e.preventDefault()
        const text = value.trim();
        //if (text.length > 0) 
        setValue('')
    }
    const handleChange = (e) => {
        setValue(e.target.value)

    }
    return (
        <>
            <form className="formulaire" onSubmit={handleSubmit}>

                <input className="champEnvoi" onChange={handleChange} onSubmit={handleSubmit}
                    value={value}
                    placeholder='votre message...'
                />
                <IconButton aria-label="delete" style={{ marginLeft: '10px' }}>
                    <BsFillImageFill />
                </IconButton>
                <IconButton aria-label="delete" style={{ marginLeft: '20px' }}>
                    <IoSend />
                </IconButton>

            </form>

        </>
    )

}

export default MessageForm;