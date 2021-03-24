import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { constants } from '../../constants'
import { SetProfileFriends } from '../../store/profile/profile'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { useHistory } from 'react-router-dom'
import { filter } from 'lodash'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}))

export default function Freinds() {
    const history = useHistory()
    const dispatch = useDispatch()
    const classes = useStyles()
    const friends = useSelector((state) => state.AuthReducer.friends)
    const user = useSelector((state) => state.AuthReducer.user)
    const user_info = useSelector((state) => state.ProfileReducer.user_info)
    const profile_friends = useSelector((state) => state.ProfileReducer.friends)

    const [filterWord, updateFilter] = useState('')

    useEffect(async () => {
        if (user_info.user_type === 'etudiant') {
            if (user_info.id_user === user.id) {
                Axios.get(constants.url + '/api/amis/get/amis/' + user_info.id_user)
                    .then((res) => {
                        dispatch(SetProfileFriends(res.data))
                    })
                    .catch((err) => {
                        console.log(err)
                        dispatch(SetProfileFriends([]))
                    })
            } else {
                const res = await Axios.post(constants.url + '/api/amis/isFriend/', {
                    id_user: user.id,
                    id_friend: user_info.id_user,
                })

                if (res.data.friend) {
                    Axios.get(constants.url + '/api/amis/get/amis/' + user_info.id_user)
                        .then((res) => {
                            dispatch(SetProfileFriends(res.data))
                        })
                        .catch((err) => {
                            console.log(err)
                            dispatch(SetProfileFriends([]))
                        })
                } else {
                    dispatch(SetProfileFriends([]))
                }
            }
        } else {
            if (user_info.id_user === user.id) {
                Axios.get(constants.url + '/api/collegue/get/collegue/ens/' + user_info.id_user)
                    .then((res) => {
                        dispatch(SetProfileFriends(res.data))
                    })
                    .catch((err) => {
                        console.log(err)
                        dispatch(SetProfileFriends([]))
                    })
            } else {
                const res = await Axios.post(constants.url + '/api/collegue/isFriend/ens', {
                    id_user: user.id,
                    id_collegue: user_info.id_user,
                })

                if (res.data.friend) {
                    Axios.get(constants.url + '/api/collegue/get/collegue/ens/' + user_info.id_user)
                        .then((res) => {
                            dispatch(SetProfileFriends(res.data))
                        })
                        .catch((err) => {
                            console.log(err)
                            dispatch(SetProfileFriends([]))
                        })
                } else {
                    dispatch(SetProfileFriends([]))
                }
            }
        }
    }, [user_info.id_user, user.id])

    return (
        <div>
            <div className='mx-auto'>
                <div>
                    {user_info.user_type === 'etudiant' && (
                        <Grid container xs={12}>
                            <div className='mx-auto w-144'>
                                <Grid item xs={12}>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <input
                                                type='text'
                                                required={true}
                                                onChange={(e) => updateFilter(e.target.value)}
                                                className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                                placeholder='Rechercher parmis les camarades .'
                                            />
                                        </Paper>
                                    </Grid>

                                    {filter(profile_friends, (o) => {
                                        let searchIn = o.nom + ' ' + o.prenom + ' ' + o.nom
                                        return searchIn.includes(filterWord)
                                    }).map((elem) => {
                                        return (
                                            <Grid item xs={12}>
                                                <div
                                                    className='cursor-pointer'
                                                    onClick={() => {
                                                        history.push('/profile/' + elem.id_user)
                                                    }}>
                                                    <Card className={classes.root}>
                                                        <CardHeader
                                                            avatar={<Avatar src={elem.avatar} alt='Travis Howard' aria-label='recipe' className={classes.avatar} />}
                                                            align='left'
                                                            title={elem.nom + ' ' + elem.prenom}
                                                            subheader={elem.niveau_edu + ' ' + elem.domaine_edu}
                                                        />
                                                    </Card>
                                                </div>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </div>
                        </Grid>
                    )}
                    {user_info.user_type === 'enseignant' && (
                        <Grid container xs={12}>
                            <div className='mx-auto w-144'>
                                <Grid item xs={12}>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <input
                                                type='text'
                                                required={true}
                                                onChange={(e) => updateFilter(e.target.value)}
                                                className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                                placeholder={`Rechercher parmis les ${user.user_type === 'etudiant' ? 'camarades' : 'collégues'}.`}
                                            />
                                        </Paper>
                                    </Grid>

                                    {filter(profile_friends, (o) => {
                                        let searchIn = o.nom + ' ' + o.prenom + ' ' + o.nom
                                        return searchIn.includes(filterWord)
                                    }).map((elem) => {
                                        return (
                                            <Grid item xs={12}>
                                                <div
                                                    className='cursor-pointer'
                                                    onClick={() => {
                                                        history.push('/profile/' + elem.id_user)
                                                    }}>
                                                    <Card className={classes.root}>
                                                        <CardHeader
                                                            avatar={<Avatar src={elem.avatar} alt='Travis Howard' aria-label='recipe' className={classes.avatar} />}
                                                            align='left'
                                                            title={elem.nom + ' ' + elem.prenom}
                                                            subheader={elem.niveau_ens + ' ' + elem.domaine_ens}
                                                        />
                                                    </Card>
                                                </div>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </div>
                        </Grid>
                    )}
                </div>
            </div>
        </div>
    )
}
