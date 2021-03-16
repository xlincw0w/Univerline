import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { constants } from '../../constants'
import { SetProfileClasses, SetProfileFriends } from '../../store/profile/profile'
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
    const user = useSelector((state) => state.AuthReducer.user)
    const user_info = useSelector((state) => state.ProfileReducer.user_info)
    const profile_classes = useSelector((state) => state.ProfileReducer.classes)

    const [filterWord, updateFilter] = useState('')

    useEffect(async () => {
        if (user_info.user_type === 'etudiant') {
            if (user_info.id_user === user.id) {
                Axios.get(constants.url + '/api/classe/get/classe/etu/' + user_info.id_user)
                    .then((res) => {
                        dispatch(SetProfileClasses(res.data))
                    })
                    .catch((err) => {
                        console.log(err)
                        dispatch(SetProfileClasses([]))
                    })
            } else {
                const res = await Axios.post(constants.url + '/api/amis/isFriend/', {
                    id_user: user.id,
                    id_friend: user_info.id_user,
                })

                if (res.data.friend) {
                    Axios.get(constants.url + '/api/classe/get/classe/etu/' + user_info.id_user)
                        .then((res) => {
                            dispatch(SetProfileClasses(res.data))
                        })
                        .catch((err) => {
                            console.log(err)
                            dispatch(SetProfileClasses([]))
                        })
                } else {
                    dispatch(SetProfileClasses([]))
                }
            }
        } else {
            dispatch(SetProfileClasses([]))
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
                                                placeholder='Rechercher parmis les classes.'
                                            />
                                        </Paper>
                                    </Grid>

                                    {filter(profile_classes, (o) => {
                                        let searchIn = o.libelle_classe
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
                                                            subheader={elem.libelle_classe}
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
