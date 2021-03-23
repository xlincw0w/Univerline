import React from 'react'
import Button from '@material-ui/core/Button'
import { BsPencilSquare } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { RefreshProfile, SetLoader, SetModify, SetPending } from '../../store/profile/profile'
import Axios from 'axios'
import { constants } from '../../constants'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineUserDelete } from 'react-icons/ai'
import { BiMailSend } from 'react-icons/bi'

export default function MenuModif() {
    const dispatch = useDispatch()
    const modify = useSelector((state) => state.ProfileReducer.modify)
    const user_info = useSelector((state) => state.ProfileReducer.user_info)
    const user = useSelector((state) => state.AuthReducer.user)
    const friend = useSelector((state) => state.ProfileReducer.friend)
    const pending = useSelector((state) => state.ProfileReducer.pending)

    const handleUpdate = () => {
        Axios.post(constants.url + '/api/profile/update', { ...user_info })
            .then((res) => {
                dispatch(SetModify(false))
                dispatch(RefreshProfile())
            })
            .catch((err) => {
                dispatch(SetModify(false))
                dispatch(RefreshProfile())
            })
    }

    const handleAdd = () => {
        dispatch(SetLoader(true))
        Axios.all([
            Axios.post(constants.url + '/api/amis/add/amis', {
                id_user: user.id,
                id_ami: user_info.id_user,
                confirm: false,
                receiver: false,
            }),

            Axios.post(constants.url + '/api/amis/add/amis', {
                id_user: user_info.id_user,
                id_ami: user.id,
                confirm: false,
                receiver: true,
            }),
        ])
            .then(
                Axios.spread((res) => {
                    dispatch(SetLoader(false))
                    dispatch(RefreshProfile())
                })
            )
            .catch((err) => {
                console.log(err)
                dispatch(SetLoader(false))
                dispatch(RefreshProfile())
            })
    }

    const handleRemove = () => {
        dispatch(SetLoader(true))
        Axios.all([
            Axios.post(constants.url + '/api/amis/delete/amis', {
                id_user: user.id,
                id_ami: user_info.id_user,
            }),

            Axios.post(constants.url + '/api/amis/delete/amis', {
                id_user: user_info.id_user,
                id_ami: user.id,
            }),
        ])
            .then(
                Axios.spread((...res) => {
                    dispatch(SetLoader(false))
                    dispatch(RefreshProfile())
                    dispatch(SetPending(false))
                })
            )
            .catch((err) => {
                console.log(err)
                dispatch(SetLoader(false))
                dispatch(RefreshProfile())
            })
    }

    const handleAddEns = () => {
        dispatch(SetLoader(true))
        Axios.all([
            Axios.post(constants.url + '/api/collegue/add/collegue', {
                id_user: user.id,
                id_collegue: user_info.id_user,
                confirm: false,
                receiver: false,
            }),

            Axios.post(constants.url + '/api/collegue/add/collegue', {
                id_user: user_info.id_user,
                id_collegue: user.id,
                confirm: false,
                receiver: true,
            }),
        ])
            .then(
                Axios.spread((res) => {
                    dispatch(SetLoader(false))
                    dispatch(RefreshProfile())
                })
            )
            .catch((err) => {
                console.log(err)
                dispatch(SetLoader(false))
                dispatch(RefreshProfile())
            })
    }

    const handleRemoveEns = () => {
        dispatch(SetLoader(true))
        Axios.all([
            Axios.post(constants.url + '/api/collegue/delete/collegue', {
                id_user: user.id,
                id_collegue: user_info.id_user,
            }),
            Axios.post(constants.url + '/api/collegue/delete/collegue', {
                id_user: user_info.id_user,
                id_collegue: user.id,
            }),
        ])
            .then(
                Axios.spread((...res) => {
                    dispatch(SetLoader(false))
                    dispatch(RefreshProfile())
                    dispatch(SetPending(false))
                })
            )
            .catch((err) => {
                console.log(err)
                dispatch(SetLoader(false))
                dispatch(RefreshProfile())
            })
    }

    return (
        <div className='mt-8 ml-3'>
            {user_info.id_user === user.id && (
                <div>
                    {!modify && (
                        <Button
                            onClick={() => {
                                dispatch(SetModify(true))
                            }}
                            variant='outlined'>
                            <div className='w-40'>
                                <p className='inline text-sm text-gray-600'>Modifier profil</p>
                                <BsPencilSquare size={20} className='inline ml-2 mb-1' />
                            </div>
                        </Button>
                    )}
                    {modify && (
                        <div>
                            <div className='inline'>
                                <Button
                                    onClick={() => {
                                        handleUpdate()
                                    }}
                                    variant='outlined'>
                                    <div className='w-40'>
                                        <p className='inline text-sm text-gray-600'>Enregistrer</p>
                                        <BsPencilSquare size={20} className='inline ml-2 mb-1' />
                                    </div>
                                </Button>
                            </div>
                            <div className='ml-3 inline'>
                                <Button
                                    onClick={() => {
                                        dispatch(SetModify(false))
                                        dispatch(RefreshProfile())
                                    }}
                                    variant='contained'
                                    color='secondary'>
                                    <div className='w-32'>
                                        <p className='inline text-sm text-gray-200'>Annuler</p>
                                        <BsTrash size={20} className='inline ml-2 mb-1' />
                                    </div>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            {user_info.id_user !== user.id && user_info.user_type === user.user_type && (
                <div>
                    {user_info.user_type === 'etudiant' && (
                        <div>
                            {friend && (
                                <div>
                                    <div className='inline mr-3'>
                                        <Button
                                            onClick={() => {
                                                // dispatch(SetModify(false))
                                                // dispatch(RefreshProfile())
                                            }}
                                            variant='outlined'
                                            color='default'>
                                            <div className='w-32'>
                                                <p className='inline text-sm text-gray-600'>Contacter</p>
                                                <BiMailSend size={20} className='inline ml-2 mb-1' />
                                            </div>
                                        </Button>
                                    </div>
                                    <div className='inline'>
                                        <Button
                                            onClick={() => {
                                                handleRemove()
                                            }}
                                            variant='contained'
                                            color='secondary'>
                                            <div className='w-32'>
                                                <p className='inline text-sm text-gray-200'>Supprimer</p>
                                                <AiOutlineUserDelete size={20} className='inline ml-2 mb-1' />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            )}
                            {!friend && (
                                <div>
                                    {pending && (
                                        <div className='inline'>
                                            <Button
                                                onClick={() => {
                                                    handleRemove()
                                                }}
                                                variant='outlined'
                                                color='secondary'>
                                                <div className='w-40'>
                                                    <p className='inline text-sm text-gray-600'>Annuler</p>
                                                    <AiOutlineUserDelete size={20} className='inline ml-2 mb-1' />
                                                </div>
                                            </Button>
                                        </div>
                                    )}
                                    {!pending && (
                                        <div className='inline'>
                                            <Button
                                                onClick={() => {
                                                    handleAdd()
                                                }}
                                                variant='contained'
                                                color='secondary'>
                                                <div className='w-32'>
                                                    <p className='inline text-sm text-gray-200'>Ajouter</p>
                                                    <AiOutlineUserAdd size={20} className='inline ml-2 mb-1' />
                                                </div>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                    {user_info.user_type === 'enseignant' && (
                        <div>
                            {friend && (
                                <div>
                                    <div className='inline mr-3'>
                                        <Button
                                            onClick={() => {
                                                // dispatch(SetModify(false))
                                                // dispatch(RefreshProfile())
                                            }}
                                            variant='outlined'
                                            color='default'>
                                            <div className='w-32'>
                                                <p className='inline text-sm text-gray-600'>Contacter</p>
                                                <BiMailSend size={20} className='inline ml-2 mb-1' />
                                            </div>
                                        </Button>
                                    </div>
                                    <div className='inline'>
                                        <Button
                                            onClick={() => {
                                                handleRemoveEns()
                                            }}
                                            variant='contained'
                                            color='secondary'>
                                            <div className='w-32'>
                                                <p className='inline text-sm text-gray-200'>Supprimer</p>
                                                <AiOutlineUserDelete size={20} className='inline ml-2 mb-1' />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            )}
                            {!friend && (
                                <div>
                                    {pending && (
                                        <div className='inline'>
                                            <Button
                                                onClick={() => {
                                                    handleRemoveEns()
                                                }}
                                                variant='outlined'
                                                color='secondary'>
                                                <div className='w-40'>
                                                    <p className='inline text-sm text-gray-600'>Annuler</p>
                                                    <AiOutlineUserDelete size={20} className='inline ml-2 mb-1' />
                                                </div>
                                            </Button>
                                        </div>
                                    )}
                                    {!pending && (
                                        <div className='inline'>
                                            <Button
                                                onClick={() => {
                                                    handleAddEns()
                                                }}
                                                variant='contained'
                                                color='secondary'>
                                                <div className='w-32'>
                                                    <p className='inline text-sm text-gray-200'>Ajouter</p>
                                                    <AiOutlineUserAdd size={20} className='inline ml-2 mb-1' />
                                                </div>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
            {user_info.id_user !== user.id && user_info.user_type !== user.user_type && (
                <div>
                    <div>
                        <div>
                            <div className='inline mr-3'>
                                <Button
                                    onClick={() => {
                                        // dispatch(SetModify(false))
                                        // dispatch(RefreshProfile())
                                    }}
                                    variant='outlined'
                                    color='default'>
                                    <div className='w-32'>
                                        <p className='inline text-sm text-gray-600'>Contacter</p>
                                        <BiMailSend size={20} className='inline ml-2 mb-1' />
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
