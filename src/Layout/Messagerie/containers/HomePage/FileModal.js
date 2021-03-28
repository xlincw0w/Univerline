import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { BsCheckCircle } from "react-icons/bs"
import { IoMdRemoveCircleOutline } from "react-icons/io"
import IconButton from '@material-ui/core/IconButton';
//import mime from 'mime-types'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles({
    paper: {
        position: 'absolute',
        maxWidth: 345,

        border: '2px solid #000',


    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});



function FileModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const { modal, closeModal, uploadFile } = props

    const [fileIm, setFile] = useState(null);
    const authorized = ['image/jpeg', 'image/png']

    const addFile = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFile(file)
        }

    }

    const sendFile = () => {
        const file = { fileIm }

        if (file !== null) {
            if (isAuthorized(file.name)) {
                //   const metadata = { contentType: mime.lookup(file.name) }
                //  uploadFile(file, metadata)
                closeModal()
                clearFile()

            }

        }
    }
    const clearFile = () => {
        setFile(null)
    }

    const isAuthorized = (fileName) => {
        // authorized.includes(mime.lookup(fileName))

    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Card className={classes.root}>
                <CardHeader
                    title="Choisissez une image..."
                />
                <CardContent>
                    <input
                        type="file"
                        onChang={addFile}
                    />
                </CardContent>
                <CardActions>
                    <IconButton aria-label="img" >
                        <BsCheckCircle onClick={sendFile} />
                    </IconButton>
                    <IconButton aria-label="img" >
                        <IoMdRemoveCircleOutline onClick={closeModal} />
                    </IconButton>
                </CardActions>

            </Card>
        </div>


    )






    return (
        <Modal open={modal}
            onClose={closeModal}
        >
            {body}

        </Modal>

    )

}
export default FileModal;