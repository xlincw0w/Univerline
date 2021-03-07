import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import { useHistory } from 'react-router-dom'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaGooglePlusSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

import { FaFeatherAlt } from 'react-icons/fa'

export default function Auth() {
    const history = useHistory()

    return (
        <div className='w-full lg:w-5/6 h-screen mx-auto shadow rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full rounded-xl'>
                <div className='bg-feather bg-center bg-cover h-full hidden md:block rounded-xl'>
                    <div className='h-full bg-indigo-900 bg-opacity-80 rounded-xl select-none'>
                        <p
                            className='pt-14 text-6xl text-gray-100 text-center cursor-pointer'
                            onClick={() => {
                                history.push('/')
                            }}>
                            UNIVERLINE
                        </p>
                        <p className='pt-10 px-10 lg:px-30 2xl:px-60 text-xl text-gray-300 text-center'>Restez connecté avec vos collègues et vos camarades à tout instant.</p>

                        <div>
                            <p className='pt-40 lg:pt-60 2xl:pt-96 px-10 lg:px-30 2xl:px-60 text-xl text-gray-300 text-center'>Vous ne possedez pas de compte ?</p>
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
                    <p className='text-gray-800 text-4xl text-center mt-16 font-sans font-black'>Connexion</p>
                    <div className='mt-10 xl:mt-20 flex'>
                        <div className='mx-auto'>
                            <FaGooglePlusSquare className='inline mx-5 cursor-pointer duration-300 hover:text-green-700' size={60} />
                            <FaFacebookSquare className='inline mx-5 cursor-pointer duration-300 hover:text-blue-700' size={60} />
                            <FaTwitterSquare className='inline mx-5 cursor-pointer duration-300 hover:text-blue-400' size={60} />
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-10 xl:mt-20 text-center'>
                        <div className='my-5'>
                            <TextField className='w-3/6 shadow' label='E-mail' variant='outlined' />
                        </div>
                        <div className='my-5'>
                            <TextField className='w-3/6 shadow' label='Mot de passe' variant='outlined' />
                        </div>
                    </div>
                    <div className='mx-auto table mt-10'>
                        <Button className='shadow' variant='contained' color='secondary'>
                            Se connecter
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
