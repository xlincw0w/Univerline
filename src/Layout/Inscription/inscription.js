import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import { useHistory } from 'react-router-dom'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaGooglePlusSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

import { FaFeatherAlt } from 'react-icons/fa'

const Inscription = () => {
    const history = useHistory()
    const NIVEAU_ENSEIGNEMENT = [
        {
            id: 0,
            libelle: 'Collége',
        },
        {
            id: 1,
            libelle: 'Lycée',
        },
        {
            id: 2,
            libelle: 'Université',
        },
    ]
    const [step, setStep] = React.useState('auth')

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
                        {step === 'auth' && (
                            <div>
                                <p className='pt-40 lg:pt-60 2xl:pt-96 px-10 lg:px-30 2xl:px-60 text-xl text-gray-300 text-center'>Vous possedez déja un compte ?</p>
                                <div className='mx-auto table mt-5'>
                                    <Button variant='contained' color='secondary'>
                                        Se connecter
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {step === 'auth' && (
                    <div className='bg-gray-50 h-full rounded-xl'>
                        <p className='text-gray-800 text-4xl text-center mt-16 font-sans font-black'>Créer un compte.</p>
                        <div className='mt-10 xl:mt-20 flex'>
                            <div className='mx-auto'>
                                <FaGooglePlusSquare className='inline mx-5 cursor-pointer duration-300 hover:text-green-700' size={60} />
                                <FaFacebookSquare className='inline mx-5 cursor-pointer duration-300 hover:text-blue-700' size={60} />
                                <FaTwitterSquare className='inline mx-5 cursor-pointer duration-300 hover:text-blue-400' size={60} />
                            </div>
                        </div>
                        <div className='mt-4 lg:mt-10 xl:mt-20 text-center'>
                            <div className='my-4'>
                                <TextField className='w-3/6 shadow' label='Nom complet' variant='outlined' />
                            </div>
                            <div className='my-5'>
                                <TextField className='w-3/6 shadow' label='E-mail' variant='outlined' />
                            </div>
                            <div className='my-5'>
                                <TextField className='w-3/6 shadow' label='Mot de passe' variant='outlined' />
                            </div>
                            <div className='my-5'>
                                <TextField className='w-3/6 shadow' label='Confirmer mot de passe' variant='outlined' />
                            </div>
                        </div>
                        <div className='mx-auto table mt-10'>
                            <Button
                                onClick={() => {
                                    setStep('whoyouare')
                                }}
                                className='shadow'
                                variant='contained'
                                color='secondary'>
                                Suivant
                            </Button>
                        </div>
                    </div>
                )}
                {step === 'whoyouare' && (
                    <div className='bg-gray-50 h-full rounded-xl'>
                        <p className='text-gray-800 text-4xl text-center mt-16 font-sans font-black'>
                            Etes vous <span className='text-purple-800'>Enseignant</span> ou <span className='text-green-600'>Etudiant </span>?
                        </p>
                        <div className='mt-40 text-center h-40'>
                            <div className='mx-10 my-5 inline-block'>
                                <Button
                                    className='h-12 w-48 shadow'
                                    onClick={() => {
                                        setStep('formEns')
                                    }}
                                    variant='contained'
                                    color='secondary'>
                                    Enseignant
                                </Button>
                            </div>
                            <div className='mx-10 my-5 inline-block'>
                                <Button
                                    className='h-12 w-48 shadow'
                                    onClick={() => {
                                        setStep('formEtu')
                                    }}
                                    variant='contained'
                                    color='secondary'>
                                    Etudiant
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
                {step === 'formEns' && (
                    <div className='bg-gray-50 h-full rounded-xl'>
                        <p className='text-gray-800 text-4xl text-center mt-16 font-sans font-black'>
                            Bienvenue cher <span className='text-purple-800'>Enseignant</span>!
                        </p>
                        <div className='mt-32 text-center'>
                            <div className='my-5'>
                                <Autocomplete
                                    id='combo-box-demo'
                                    className='w-3/6 mx-auto shadow'
                                    options={NIVEAU_ENSEIGNEMENT}
                                    getOptionLabel={(option) => option.libelle}
                                    renderInput={(params) => <TextField {...params} label="Niveau d'enseignement" variant='outlined' />}
                                />
                            </div>
                            <div className='my-5'>
                                <TextField className='w-3/6 shadow' label="Domaine d'enseignement" variant='outlined' />
                            </div>
                        </div>
                        <div className='mx-auto table mt-10'>
                            <div className='mx-5 inline-block'>
                                <Button
                                    onClick={() => {
                                        setStep('whoyouare')
                                    }}
                                    className='shadow'
                                    variant='contained'
                                    color='primary'>
                                    Précédent
                                </Button>
                            </div>
                            <div className='mx-5 inline-block'>
                                <Button
                                    onClick={() => {
                                        setStep('ending')
                                    }}
                                    className='shadow'
                                    variant='contained'
                                    color='secondary'>
                                    Finaliser
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
                {step === 'formEtu' && (
                    <div className='bg-gray-50 h-full rounded-xl'>
                        <p className='text-gray-800 text-4xl text-center mt-16 font-sans font-black'>
                            Bienvenue cher <span className='text-green-600'>Etudiant</span> !
                        </p>
                        <div className='mt-32 text-center'>
                            <div className='my-5'>
                                <TextField className='w-3/6 shadow' label="Etablissement d'etude" variant='outlined' />
                            </div>
                            <div className='my-5'>
                                <Autocomplete
                                    id='combo-box-demo'
                                    className='w-3/6 mx-auto shadow'
                                    options={NIVEAU_ENSEIGNEMENT}
                                    getOptionLabel={(option) => option.libelle}
                                    renderInput={(params) => <TextField {...params} label='Niveau educatif' variant='outlined' />}
                                />
                            </div>
                            <div className='my-5'>
                                <TextField className='w-3/6 shadow' label='Domaine educatif' variant='outlined' />
                            </div>
                        </div>
                        <div className='mx-auto table mt-10'>
                            <div className='mx-5 inline-block'>
                                <Button
                                    onClick={() => {
                                        setStep('whoyouare')
                                    }}
                                    className='shadow'
                                    variant='contained'
                                    color='primary'>
                                    Précédent
                                </Button>
                            </div>
                            <div className='mx-5 inline-block'>
                                <Button
                                    onClick={() => {
                                        setStep('ending')
                                    }}
                                    className='shadow'
                                    variant='contained'
                                    color='secondary'>
                                    Finaliser
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
                {step === 'ending' && (
                    <div className='bg-gray-50 h-full rounded-xl'>
                        <p className='text-gray-800 text-4xl text-center mt-16 font-sans font-black'>
                            <div className='text-gray-900 flex justify-center'>
                                <FaFeatherAlt size={200} />
                            </div>
                            <div className='mt-12'>
                                <span className='text-purple-800'>Féliciation </span>votre compte a été créé avec succés.
                            </div>
                        </p>
                        <div className='mx-auto table mt-60'>
                            <Button
                                onClick={() => {
                                    console.log('oulach')
                                }}
                                className='shadow'
                                variant='contained'
                                color='secondary'>
                                Se connecter
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Inscription
