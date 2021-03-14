import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import PhotoSquare from './Photosquare'
import MenuNv from './MenuNv'
import CarteHaut from './CarteHaut'
import MenuModif from './MenuModif'
import Axios from 'axios'
import { constants } from '../../constants'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { SetFriend, SetPending, SetUserInfo } from '../../store/profile/profile'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}))

export default function ProfileNv() {
    const dispatch = useDispatch()
    const routeParams = useParams()
    const user = useSelector((state) => state.AuthReducer.user)
    const profile = useSelector((state) => state.ProfileReducer.user_info)
    const reset = useSelector((state) => state.ProfileReducer.reset)
    const loader = useSelector((state) => state.ProfileReducer.loader)
    const classes = useStyles()

    useEffect(() => {
        Axios.get(constants.url + '/api/profile/' + routeParams.id)
            .then((res) => {
                dispatch(SetUserInfo(res.data))
            })
            .catch((err) => {
                dispatch(SetUserInfo([]))
            })

        Axios.post(constants.url + '/api/amis/isFriend', {
            id_user: user.id,
            id_friend: routeParams.id,
        })
            .then((res) => {
                dispatch(SetFriend(res.data.friend))
                if (res.data.pending) dispatch(SetPending(res.data.pending))
            })
            .catch((err) => {
                dispatch(SetFriend(false))
            })
    }, [reset, user])

    return (
        <div className='mt-4'>
            <Backdrop open={loader} style={{ zIndex: 10 }}>
                <CircularProgress color='inherit' />
            </Backdrop>
            <Container maxWidth='Lg' className={classes.root}>
                {user.id === profile.id_user && (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className='mt-5'>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <Paper className={classes.paper}>
                                            <Paper className={classes.paper}>
                                                <PhotoSquare avatar={profile.avatar} />
                                            </Paper>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <CarteHaut profile={profile} user={user} />
                                        <MenuModif />
                                    </Grid>
                                </Grid>
                                <Paper className={classes.paper}>
                                    <br />
                                    <br />
                                    <MenuNv />
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                )}
                {user.id !== profile.id_user && (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className='mt-5'>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <Paper className={classes.paper}>
                                            <Paper className={classes.paper}>
                                                <PhotoSquare avatar={profile.avatar} />
                                            </Paper>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <CarteHaut profile={profile} user={user} />
                                        <MenuModif profile={profile} user={user} />
                                    </Grid>
                                </Grid>
                                <Paper className={classes.paper}>
                                    <br />
                                    <br />
                                    <MenuNv profile={profile} user={user} />
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </div>
    )
}