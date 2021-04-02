import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import Dropdown from './Popover/popover'
import Axios from 'axios'
import { constants } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { SetUser, SetFriends, Uncomplete } from '../../store/auth/auth'
import univerlineLoge from './univerlineLoge.png'
import Backdrop from '@material-ui/core/Backdrop'
import { Alert, AlertTitle } from '@material-ui/lab'

export default function Header() {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.AuthReducer.user)
    const alert = useSelector((state) => state.AlertReducer.alert)

    const [numpen, SetPendingUsers] = useState(0)

    const disconnect = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                history.push('/')
            })
            .catch((error) => {
                history.push('/')
            })
    }

    useEffect(() => {
        const user = firebase.auth().currentUser

        if (user) {
            Axios.get(constants.url + '/api/profile/' + user.uid)
                .then((res) => {
                    if (res.data && !res.data.id_user) dispatch(Uncomplete(true))
                    dispatch(
                        SetUser({
                            id: res.data.id_user,
                            nom: res.data.nom,
                            prenom: res.data.prenom,
                            email: res.data.email,
                            user_type: res.data.user_type,
                            niveau_ens: res.data.niveau_ens,
                            domaine_ens: res.data.domaine_ens,
                            niveau_edu: res.data.niveau_edu,
                            domaine_edu: res.data.domaine_edu,
                            etablissement: res.data.etablissement,
                            avatar: res.data.avatar,
                        })
                    )
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    useEffect(() => {
        if (user.user_type === 'etudiant') {
            Axios.get(constants.url + '/api/amis/get/amis/' + user.id)
                .then((res) => {
                    dispatch(SetFriends(res.data))
                })
                .catch((err) => {
                    dispatch(SetFriends([]))
                })
        } else if (user.user_type === 'enseignant') {
            Axios.get(constants.url + '/api/collegue/get/collegue/ens/' + user.id)
                .then((res) => {
                    dispatch(SetFriends(res.data))
                })
                .catch((err) => {
                    dispatch(SetFriends([]))
                })
        }

        if (user.user_type) {
            if (user.user_type === 'etudiant') {
                Axios.get(constants.url + '/api/amis/get/pending/' + user.id)
                    .then((res) => {
                        SetPendingUsers(res.data.length)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else if (user.user_type === 'enseignant') {
                Axios.all([Axios.get(constants.url + '/api/collegue/get/pending/ens/' + user.id), Axios.get(constants.url + '/api/adherent/get/pending/adh/' + user.id)])
                    .then(
                        Axios.spread((...res) => {
                            SetPendingUsers(res[0].data.length + res[1].data.length)
                        })
                    )
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }, [user.id])

    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
                if (isSignedIn) {
                    return (
                        <React.Fragment>
                            <div className='w-screen h-16 bg-white shadow-lg select-none fixed' style={{ zIndex: 100 }}>
                                <div className='grid grid-cols-2 h-full'>
                                    <div className='flex'>
                                        <p
                                            onClick={() => {
                                                history.push('/')
                                            }}
                                            className='text-lg text-gray-700 my-auto ml-5 cursor-pointer'>
                                            <img src={univerlineLoge} className='w-14 h-12' />
                                        </p>
                                        <p className='text-gray-500 invisible lg:visible text-base flex justify-center items-center ml-2'>Univerline</p>
                                    </div>

                                    <div className='flex flex-row-reverse'>
                                        <div className='mr-10 mt-3 flex flex-cols'>
                                            <div className='mr-5 flex justify-center hidden md:block '>
                                                <Dropdown item='profilesearch' />
                                            </div>
                                            <div className='mr-3'>
                                                <Dropdown numpen={numpen} item='pendinglist' />
                                            </div>
                                            <div className='mr-2 cursor-pointer'>
                                                <Dropdown item='messagerie' />
                                            </div>
                                            <div className='mr-5 cursor-pointer'>
                                                <Dropdown item='notification' />
                                            </div>
                                            <div>
                                                <Dropdown item='userprofile' disconnect={disconnect} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-screen h-16'></div>
                            <Backdrop open={alert.pop} style={{ display: 'contents', zIndex: 200 }}>
                                <div className='absolute z-50'>
                                    <div className='mt-5 ml-3 flex justify-center mx-auto'>
                                        <div className='w-120 shadow-xl'>
                                            <Alert variant='filled' severity={alert.severity}>
                                                <AlertTitle>{alert.type.capitalize()}</AlertTitle>
                                                <p>{alert.message}</p>
                                            </Alert>
                                        </div>
                                    </div>
                                </div>
                            </Backdrop>
                        </React.Fragment>
                    )
                } else {
                    return (
                        <React.Fragment>
                            <div className='w-screen h-16 bg-gray-50 shadow-lg select-none fixed' style={{ zIndex: 100 }}>
                                <div className='grid grid-cols-2 h-full'>
                                    <div className='flex'>
                                        <p
                                            onClick={() => {
                                                history.push('/')
                                            }}
                                            className='text-lg text-gray-700 my-auto ml-5 cursor-pointer'>
                                            <img src={univerlineLoge} className='w-14 h-12' />
                                        </p>
                                        <p className='text-gray-500 invisible lg:visible text-base inline flex justify-center items-center ml-3'>Univerline</p>
                                    </div>

                                    <div className='flex flex-row-reverse'>
                                        <p
                                            onClick={() => {
                                                history.push('/auth')
                                            }}
                                            className='text-md text-gray-500 my-auto mr-8 cursor-pointer'>
                                            Se connecter
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-screen h-16'></div>
                            <Backdrop open={alert.pop} style={{ display: 'contents', zIndex: 200 }}>
                                <div className='absolute'>
                                    <div className='mt-5 ml-3 flex justify-center mx-auto'>
                                        <div className='w-120 shadow-xl'>
                                            <Alert variant='filled' severity={alert.severity}>
                                                <AlertTitle>{alert.type.capitalize()}</AlertTitle>
                                                <p>{alert.message}</p>
                                            </Alert>
                                        </div>
                                    </div>
                                </div>
                            </Backdrop>
                        </React.Fragment>
                    )
                }
            }}
        </FirebaseAuthConsumer>
    )
}
