import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
import { SetFriend, SetLoader, SetPending, SetUserInfo } from '../../store/profile/profile'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Loader from 'react-loader-spinner'
import './style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: '',
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
        dispatch(SetLoader(true))
        Axios.get(constants.url + '/api/profile/' + routeParams.id)
            .then((res) => {
                dispatch(SetUserInfo(res.data))
            })
            .catch((err) => {
                dispatch(SetUserInfo([]))
            })

        if (user.id !== routeParams.id) {
            if (user.user_type === 'etudiant') {
                Axios.post(constants.url + '/api/amis/isFriend', {
                    id_user: user.id,
                    id_friend: routeParams.id,
                })
                    .then((res) => {
                        dispatch(SetLoader(false))
                        dispatch(SetFriend(res.data.friend))
                        if (res.data.pending) dispatch(SetPending(res.data.pending))
                        else {
                            dispatch(SetPending(false))
                        }
                    })
                    .catch((err) => {
                        dispatch(SetFriend(false))
                        dispatch(SetLoader(false))
                    })
            } else {
                Axios.post(constants.url + '/api/collegue/isFriend/ens', {
                    id_user: user.id,
                    id_collegue: routeParams.id,
                })
                    .then((res) => {
                        dispatch(SetFriend(res.data.friend))
                        if (res.data.pending) dispatch(SetPending(res.data.pending))
                        else {
                            dispatch(SetPending(false))
                        }
                        dispatch(SetLoader(false))
                    })
                    .catch((err) => {
                        dispatch(SetFriend(false))
                        dispatch(SetLoader(false))
                    })
            }
        } else {
            dispatch(SetLoader(false))
        }
    }, [reset, user, routeParams.id])

    return (
        <div className='bg-gradient-to-r from-green-400 to-purple-700'>
            <div className='bg-gray-200 bg-opacity-60'>
                <div className='' style={{ minHeight: '100vh' }}>
                    <Backdrop open={loader} style={{ zIndex: 10 }}>
                        <div className='w-screen h-screen bg-gray-800 flex justify-center items-center'>
                            <Loader type='Circles' color='#00BFFF' height={120} width={120} />
                        </div>
                    </Backdrop>
                    <div className='containeur'>
                        {user.id === profile.id_user && (
                            <Grid container spacing={3}>
                                <Grid item sm={12}>
                                    <Paper className=''>
                                        <Grid container>
                                            <Grid item lg={2} md={2.5} xs={12} style={{ textAlign: 'center' }}>
                                                <span style={{ display: 'inline-block' }}>
                                                    <PhotoSquare avatar={profile.avatar} />
                                                </span>
                                            </Grid>
                                            <Grid item lg={10} md={10.5} xs={12}>
                                                <CarteHaut profile={profile} user={user} />
                                                <MenuModif />
                                            </Grid>
                                        </Grid>
                                    </Paper>

                                    <Paper className=''>
                                        <MenuNv />
                                    </Paper>
                                </Grid>
                            </Grid>
                        )}
                        {user.id !== profile.id_user && (
                            <Grid container spacing={3}>
                                <Grid item sm={12}>
                                    <Paper className=''>
                                        <Grid container>
                                            <Grid item lg={2} md={2.5} xs={12} style={{ textAlign: 'center' }}>
                                                <span style={{ display: 'inline-block' }}>
                                                    <PhotoSquare avatar={profile.avatar} />
                                                </span>
                                            </Grid>
                                            <Grid item lg={10} md={10.5} xs={12}>
                                                <CarteHaut profile={profile} user={user} />
                                                <MenuModif />
                                            </Grid>
                                        </Grid>
                                    </Paper>

                                    <Paper className=''>
                                        <MenuNv />
                                    </Paper>
                                </Grid>
                            </Grid>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
