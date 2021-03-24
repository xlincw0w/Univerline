import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from '@react-firebase/auth'
import plume1 from '../../Assets/Images/plume1.jpg'
import Dropdown from './Popover/popover'
import Axios from 'axios'
import { constants } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { SetUser } from '../../store/auth/auth'

export default function Header() {
    const dispatch = useDispatch()
    const history = useHistory()

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
                                            <img src={plume1} className='w-14 h-12' />
                                        </p>
                                        <p className='text-gray-500 invisible lg:visible text-base flex justify-center items-center ml-4'>Univerline</p>
                                    </div>

                                    <div className='flex flex-row-reverse'>
                                        <div className='mr-10 mt-3 flex flex-cols'>
                                            <div className='mr-8 flex justify-center hidden md:block '>
                                                <Dropdown item='profilesearch' />
                                            </div>
                                            <div className='mr-2'>
                                                <Dropdown item='pendinglist' />
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
                        </React.Fragment>
                    )
                } else {
                    return (
                        <React.Fragment>
                            <div className='w-screen h-16 bg-gray-50 shadow-lg select-none fixed' style={{ zIndex: 100 }}>
                                <div className='grid grid-cols-4 h-full'>
                                    <div className='flex'>
                                        <p
                                            onClick={() => {
                                                history.push('/')
                                            }}
                                            className='text-lg text-gray-700 my-auto ml-5 cursor-pointer'>
                                            Reseau Social
                                        </p>
                                    </div>
                                    <div className=''>
                                        <p></p>
                                    </div>
                                    <div className=''>
                                        <p></p>
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
                        </React.Fragment>
                    )
                }
            }}
        </FirebaseAuthConsumer>
    )
}
