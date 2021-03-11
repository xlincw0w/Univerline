import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from '@react-firebase/auth'
import plume1 from '../../Assets/Images/plume1.jpg'
import Dropdown from './Popover/popover'
import Online from '../Dashboard/Online/online'

export default function Header() {
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

    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
                if (isSignedIn) {
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
                                            <img src={plume1} className='w-12 h-12' />
                                        </p>
                                        <p className='text-gray-500 text-base inline flex justify-center items-center ml-2'>Univerline</p>
                                    </div>
                                    <div className=''>
                                        <p></p>
                                    </div>
                                    <div className=''>
                                        <p></p>
                                    </div>
                                    <div className='flex flex-row-reverse'>
                                        <div className='mr-10 mt-3 flex flex-cols'>
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
