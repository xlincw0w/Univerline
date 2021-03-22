import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { constants } from '../../constants'
import Axios from 'axios'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { SetLoader } from '../../store/profile/profile'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}))

const PendingUser = ({ elem, RefreshPending }) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const user = useSelector((state) => state.AuthReducer.user)
    const [loader, setLoader] = useState(false)

    const handleAdd = () => {
        setLoader(true)

        if (user.user_type === 'etudiant') {
            Axios.all([
                Axios.post(constants.url + '/api/amis/confirm/amis', {
                    id_user: user.id,
                    id_friend: elem.id_user,
                }),

                Axios.post(constants.url + '/api/amis/confirm/amis', {
                    id_user: elem.id_user,
                    id_friend: user.id,
                }),
            ])
                .then(
                    Axios.spread((...res) => {
                        RefreshPending()
                        setLoader(false)
                    })
                )
                .catch((err) => {
                    RefreshPending()
                    setLoader(false)
                })
        } else {
            Axios.all([
                Axios.post(constants.url + '/api/collegue/confirm/collegue', {
                    id_user: user.id,
                    id_collegue: elem.id_user,
                }),

                Axios.post(constants.url + '/api/collegue/confirm/collegue', {
                    id_user: elem.id_user,
                    id_collegue: user.id,
                }),
            ])
                .then(
                    Axios.spread((...res) => {
                        RefreshPending()
                        setLoader(false)
                    })
                )
                .catch((err) => {
                    console.log(err)
                    RefreshPending()
                    setLoader(false)
                })
        }
    }

    const handleRemove = () => {
        setLoader(true)

        if (user.user_type === 'etudiant') {
            Axios.all([
                Axios.post(constants.url + '/api/amis/delete/amis', {
                    id_user: user.id,
                    id_ami: elem.id_user,
                }),

                Axios.post(constants.url + '/api/amis/delete/amis', {
                    id_user: elem.id_user,
                    id_ami: user.id,
                }),
            ])
                .then(
                    Axios.spread((...res) => {
                        RefreshPending()
                        setLoader(false)
                    })
                )
                .catch((err) => {
                    console.log(err)
                    RefreshPending()
                    setLoader(false)
                })
        } else {
            Axios.all([
                Axios.post(constants.url + '/api/collegue/delete/collegue', {
                    id_user: user.id,
                    id_collegue: elem.id_user,
                }),

                Axios.post(constants.url + '/api/collegue/delete/collegue', {
                    id_user: elem.id_user,
                    id_collegue: user.id,
                }),
            ])
                .then(
                    Axios.spread((...res) => {
                        RefreshPending()
                        setLoader(false)
                    })
                )
                .catch((err) => {
                    console.log(err)
                    RefreshPending()
                    setLoader(false)
                })
        }
    }

    const handleAdh = () => {
        setLoader(true)
        Axios.post(constants.url + '/api/adherent/confirm/adherent/', {
            id_etu: elem.id_etu,
            id_classe: elem.id_classe,
        })
            .then((res) => {
                console.log(res)
                RefreshPending()
                setLoader(false)
            })
            .catch((err) => {
                console.log(err)
                setLoader(false)
            })
    }

    const removeAdh = () => {
        setLoader(true)
        Axios.post(constants.url + '/api/adherent/delete/adherent/', {
            id_etu: elem.id_etu,
            id_classe: elem.id_classe,
        })
            .then((res) => {
                console.log(res)
                RefreshPending()
                setLoader(false)
            })
            .catch((err) => {
                console.log(err)
                setLoader(false)
            })
    }

    return (
        <div id={elem.id_user} className='grid grid-rows grid-flow-col gap-2 shadow-xl w-2/3 mx-auto mt-8'>
            <Backdrop open={loader} style={{ zIndex: 10 }}>
                <CircularProgress color='inherit' />
            </Backdrop>
            <div className='border-2 rounded-xl bg-white shadow-xl'>
                {elem.id_classe && (
                    <div className='w-full mt-2'>
                        <p className='text-gray-600 text-sm text-center'>{elem.libelle_classe.capitalize()}</p>
                    </div>
                )}
                <div className='grid grid-cols-2 gap-2 place-items-end'>
                    <div className='w-24 place-self-start mt-2 ml-3'>
                        <div className={classes.root}>
                            <Avatar alt='Remy Sharp' src={elem.avatar} className={classes.large} />
                            <div className=''>
                                <p
                                    className='mt-2'
                                    style={{
                                        width: 'max-content',
                                    }}>
                                    {elem.nom.capitalize() + ' ' + elem.prenom.capitalize()}
                                </p>
                                {elem.user_type === 'etudiant' && (
                                    <div>
                                        <p className='text-center text-gray-400 text-sm'>{elem.domaine_edu.capitalize()}</p>
                                        <p className='text-gray-400 text-sm text-center'>{elem.etablissement.capitalize()}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='mr-1 mb-3'>
                        {elem.id_classe && (
                            <div>
                                <button onClick={handleAdh} className='bg-blue-500 w-32 mb-1 shadow-lg rounded-xl p-2 active:bg-blue-700 text-white focus:outline-none block'>
                                    Accepter
                                </button>
                                <button onClick={removeAdh} className='bg-gray-200 w-32 mt-1 shadow-lg rounded-xl p-2 active:bg-green-400 focus:outline-none block'>
                                    Supprimer
                                </button>
                            </div>
                        )}
                        {!elem.id_classe && (
                            <div>
                                <button onClick={handleAdd} className='bg-blue-500 w-32 mb-1 shadow-lg rounded-xl p-2 active:bg-blue-700 text-white focus:outline-none block'>
                                    Accepter
                                </button>
                                <button onClick={handleRemove} className='bg-gray-200 w-32 mt-1 shadow-lg rounded-xl p-2 active:bg-green-400 focus:outline-none block'>
                                    Supprimer
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const PendingList = () => {
    const user = useSelector((state) => state.AuthReducer.user)
    const loader = useSelector((state) => state.ProfileReducer.loader)
    const [pending, setPending] = useState([])
    const [adherent, setAdherent] = useState([])

    const [reset, setReset] = useState(0)

    const RefreshPending = () => {
        setReset(reset + 1)
    }

    useEffect(() => {
        if (user.user_type) {
            if (user.user_type === 'etudiant') {
                Axios.get(constants.url + '/api/amis/get/pending/' + user.id)
                    .then((res) => {
                        setPending(res.data)
                    })
                    .catch((err) => {
                        setPending([])
                        console.log(err)
                    })
            } else if (user.user_type === 'enseignant') {
                Axios.all([Axios.get(constants.url + '/api/collegue/get/pending/ens/' + user.id), Axios.get(constants.url + '/api/adherent/get/pending/adh/' + user.id)])
                    .then(
                        Axios.spread((...res) => {
                            setPending(res[0].data)
                            setAdherent(res[1].data)
                        })
                    )
                    .catch((err) => {
                        console.log(err)
                        setPending([])
                        setAdherent([])
                    })
            }
        }
    }, [user.id, reset])

    return (
        <div>
            <div className='bg-gradient-to-r from-green-400 to-purple-700' style={{ minHeight: '100vh', height: 'auto' }}>
                <Backdrop open={loader} style={{ zIndex: 10 }}>
                    <CircularProgress color='inherit' />
                </Backdrop>
                <div className='w-full h-full bg-gray-200 bg-opacity-60' style={{ minHeight: '100vh', height: 'auto' }}>
                    <div className='container bg-gray-100 mx-auto px-34 shadow-2xl border-2 w-3/6' style={{ minHeight: '90vh', height: 'auto' }}>
                        <div>
                            <p className='text-center text-gray-900 text-2xl mt-3'>Demandes d'ajout</p>
                            <p className='text-center text-gray-500'>Confirmez les personnes que vous connaissez ou supprimez les invitations.</p>
                            <hr />
                        </div>
                        <div className=''>
                            {user.user_type === 'enseignant' && (
                                <div>
                                    {adherent.map((elem) => {
                                        return <PendingUser elem={elem} RefreshPending={RefreshPending} />
                                    })}
                                </div>
                            )}
                            {pending.map((elem) => {
                                return <PendingUser elem={elem} RefreshPending={RefreshPending} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingList
