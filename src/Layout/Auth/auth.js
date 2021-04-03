import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaGooglePlusSquare } from 'react-icons/fa'
import Backdrop from '@material-ui/core/Backdrop'
import { useSelector, useDispatch } from 'react-redux'
import { SetLoader, SetFailedAuth } from '../../store/auth/auth'
import cx from 'classnames'
import Loader from 'react-loader-spinner'
import { SetAlert } from '../../store/alert/alert'
import { constants } from '../../constants'

export default function Auth() {
    const history = useHistory()
    const dispatch = useDispatch()
    const loader = useSelector((state) => state.AuthReducer.loader)
    const failedAuth = useSelector((state) => state.AuthReducer.failedAuth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [resetemail, setResetEmail] = useState(false)
    const [toreset, setToReset] = useState(false)

    const handleAuth = (e) => {
        e.preventDefault()
        dispatch(SetLoader(true))

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCred) => {
                dispatch(SetLoader(false))
                history.push('/')
            })
            .catch((err) => {
                dispatch(SetLoader(false))
                if (err.code === 'auth/too-many-requests') {
                    SetAlert('warning', 'Authentification echouée.', 'Vous avez epuisé le nombre de tentative autorisé, Veuillez réessayer plus tard.', dispatch)
                } else {
                    SetAlert('warning', 'Authentification echouée.', 'Combinaison email et mot de passe incorrecte.', dispatch)
                }
            })
    }

    const handlePasswordReset = () => {
        let valid_data = true

        if (!constants.email_rg.test(toreset)) valid_data = false

        if (valid_data) {
            firebase
                .auth()
                .sendPasswordResetEmail(toreset)
                .then(function () {
                    SetAlert('info', 'Information', 'Un mail vous a été envoyer avec succés veuillez vérifier votre boite.', dispatch)
                    setResetEmail(false)
                })
                .catch(function (error) {
                    SetAlert('error', 'Erreur', "Une erreur s'est produite, vérifiez l'état de votre connexion sinon réessayer plus tard.", dispatch)
                })
        } else {
            SetAlert('warning', 'Attention', 'Veuillez introduire une adresse email valide.', dispatch)
        }
    }

    return (
        <div className='w-full lg:w-5/6  mx-auto shadow rounded-xl mt-2 h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full rounded-xl'>
                <div className='bg-feather bg-center bg-cover h-full hidden md:block rounded-xl'>
                    <div className='h-full bg-indigo-900 bg-opacity-80 rounded-xl select-none'>
                        <p
                            className='pt-8 text-6xl text-gray-100 text-center cursor-pointer'
                            onClick={() => {
                                history.push('/')
                            }}>
                            UNIVERLINE
                        </p>
                        <p className='pt-8 px-10 lg:px-30 2xl:px-60 text-xl text-gray-300 text-center'>Restez connecté avec vos collègues et vos camarades à tout instant.</p>

                        <div>
                            <p className='pt-36 lg:pt-60 2xl:pt-96 px-10 lg:px-30 2xl:px-60 text-xl text-gray-300 text-center'>Vous ne possedez pas de compte ?</p>
                            <div className='mx-auto table mt-5'>
                                <Button
                                    onClick={() => {
                                        history.push('/inscription')
                                    }}
                                    variant='contained'
                                    color='secondary'>
                                    S'inscrire
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-50 h-full rounded-xl'>
                    <Backdrop open={loader} style={{ zIndex: 10 }}>
                        <div className='w-screen h-screen bg-gray-800 flex justify-center items-center'>
                            <Loader
                                type='Circles'
                                color='#00BFFF'
                                height={120}
                                width={120}
                                timeout={3000} //3 secs
                            />
                        </div>
                    </Backdrop>
                    <Backdrop open={resetemail} style={{ zIndex: 11 }}>
                        <div className='w-full lg:w-5/6 xl:w-4/6 2xl:3/6 h-40 bg-gray-100'>
                            <div className='text-center mt-3'>
                                <p className='text-gray-500 text-lg'>Récupération de mot de passe.</p>
                            </div>
                            <div className='mt-4'>
                                <div>
                                    <input
                                        type='text'
                                        required={true}
                                        onChange={(e) => setToReset(e.target.value)}
                                        // value={newClasse}
                                        className='block w-5/6 lg:w-4/6 xl:w-3/6 2xl:w-2/6 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                        placeholder='Tapez votre adresse email.'
                                    />
                                </div>
                                <div className='w-full flex justify-center mt-3'>
                                    <div className='mx-1'>
                                        <Button
                                            onClick={() => {
                                                handlePasswordReset()
                                            }}
                                            variant='contained'
                                            color='primary'>
                                            Envoyer
                                        </Button>
                                    </div>
                                    <div className='mx-1'>
                                        <Button
                                            onClick={() => {
                                                setResetEmail(false)
                                            }}
                                            variant='contained'
                                            color='secondary'>
                                            Annuler
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Backdrop>
                    <p className='text-gray-800 text-4xl text-center mt-12 font-sans font-black'>Authentifiez-vous</p>
                    <div className='mt-10 2xl:mt-16 flex'>
                        <div className='mx-auto'>
                            <FaGooglePlusSquare
                                onClick={() => {
                                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                                    firebase
                                        .auth()
                                        .signInWithPopup(googleAuthProvider)
                                        .then((userCred) => {
                                            history.push('/')
                                        })
                                        .catch((err) => {})
                                }}
                                className='inline mx-5 cursor-pointer duration-300 hover:text-green-700'
                                size={50}
                            />
                            <FaFacebookSquare
                                onClick={() => {
                                    dispatch(SetLoader(true))
                                    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
                                    firebase
                                        .auth()
                                        .signInWithPopup(facebookAuthProvider)
                                        .then((userCred) => {
                                            history.push('/')
                                        })
                                        .catch((err) => {})
                                }}
                                className='inline mx-5 cursor-pointer duration-300 hover:text-blue-700'
                                size={50}
                            />
                        </div>
                    </div>
                    <form className='w-full' onSubmit={handleAuth}>
                        <div className='mt-8 2xl:mt-10 text-center'>
                            <div className='my-5'>
                                <TextField
                                    required
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    type='email'
                                    className='w-3/6 shadow'
                                    label='E-mail'
                                    variant='outlined'
                                />
                            </div>
                            <div className='my-5'>
                                <TextField
                                    required
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    className='w-3/6 shadow'
                                    type='password'
                                    label='Mot de passe'
                                    variant='outlined'
                                />
                            </div>
                            <div>
                                <p className={cx('text-red-400 text-xl', { hidden: !failedAuth })}>Authentification echouée</p>
                            </div>
                        </div>
                        <div onClick={() => setResetEmail(true)} className='text-center duration-300 text-gray-800 cursor-pointer hover:text-yellow-500'>
                            <p className=''>Mot de passe oublié ?</p>
                        </div>
                        <div className='mx-auto table mt-5 2xl:mt-10'>
                            <Button type='submit' className='shadow' variant='contained' color='secondary'>
                                Se connecter
                            </Button>
                        </div>
                        <div className='text-center text-gray-800 cursor-pointer mt-5 md:hidden'>
                            <p
                                onClick={() => {
                                    history.push('/inscription')
                                }}>
                                S'inscrire
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
