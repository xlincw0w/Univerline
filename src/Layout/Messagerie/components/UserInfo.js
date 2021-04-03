import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AvatarUserInfo from './AvatarUserInfo'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AccordionFiles from './AccordionFiles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

import { CgCloseR } from "react-icons/cg"
const useStyles = makeStyles((theme) => ({
    h1: {
        color: 'red',
    },

    input: {
        display: 'none',
    },

    xxlarge: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
}))


function UserInfo(props) {

    const classes = useStyles()
    const id = props.id
    const user = props.user
    const avatar = props.userAvatar
    const history = useHistory()

    console.log("user info", user)
    return (
        <>
            <Grid container direction="column" justify="center">
                <Grid item>

                    <Grid container justify="center" direction="column">
                        <Grid item >
                            <div className="centrer" >
                                <AvatarUserInfo avatar={avatar} />
                            </div>

                        </Grid>
                        <Grid item>
                            <div className="chat-title-container" >
                                <div className="chat-title">
                                    {user}
                                </div>

                            </div>
                        </Grid>

                    </Grid>

                    <Divider />


                </Grid>
                <Grid item>
                    <AccordionFiles />

                </Grid>
                <Grid item justify="center" style={{ height: "100%" }}>
                    <Button variant="contained" color="default" onClick={() => history.push('/profile/' + id)} style={{ marginTop: '10px', marginLeft: '5%', width: "90%" }} fullWidth className='w-11/11 mt-8 mb-16'>
                        Voir profil
                                                    </Button>
                    <Button variant="contained" color="default" style={{ marginTop: '10px', marginLeft: '5%', width: "90%" }} fullWidth startIcon={<DeleteIcon />}>
                        Supprimer discussion
                                                    </Button>
                    <Button variant="contained" color="default" style={{ marginTop: '10px', marginLeft: '5%', width: "90%" }} fullWidth startIcon={<CgCloseR />}>
                        Bloquer
                                                    </Button>

                </Grid>
            </Grid>
        </>
    )

}

export default UserInfo