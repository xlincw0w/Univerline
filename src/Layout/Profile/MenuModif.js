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
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { SetAlert } from '../../store/alert/alert'

export default function MenuModif() {
    const dispatch = useDispatch()
    const modify = useSelector((state) => state.ProfileReducer.modify)
    const user_info = useSelector((state) => state.ProfileReducer.user_info)
    const user = useSelector((state) => state.AuthReducer.user)
    const friend = useSelector((state) => state.ProfileReducer.friend)
    const pending = useSelector((state) => state.ProfileReducer.pending)
    const history = useHistory()

    const handleUpdate = () => {
        let valid_data = true

        if (user.user_type === 'etudiant') {
            if (!constants.alph_rg.test(user_info.nom) || user_info.nom.length < 3) valid_data = false
            if (!constants.alph_rg.test(user_info.prenom) || user_info.prenom.length < 3) valid_data = false
            if (!constants.alph_rg.test(user_info.niveau_edu) || user_info.niveau_edu.length < 2) valid_data = false
            if (!constants.alph_rg.test(user_info.domaine_edu) || user_info.domaine_edu.length < 3) valid_data = false
            if (!constants.alph_rg.test(user_info.etablissement) || user_info.etablissement.length < 3) valid_data = false
        } else {
            if (!constants.alph_rg.test(user_info.nom) || user_info.nom.length < 3) valid_data = false
            if (!constants.alph_rg.test(user_info.prenom) || user_info.prenom.length < 3) valid_data = false
            if (!constants.alphanum_rg.test(user_info.niveau_ens) || user_info.niveau_ens.length < 2) valid_data = false
            if (!constants.alphanum_rg.test(user_info.domaine_ens) || user_info.domaine_ens.length < 3) valid_data = false
        }

        if (valid_data) {
            Axios.post(constants.url + '/api/profile/update', { ...user_info })
                .then((res) => {
                    SetAlert('success', 'Information', 'Modification du profil réalisé avec succés.', dispatch)
                    dispatch(SetModify(false))
                    dispatch(RefreshProfile())
                })
                .catch((err) => {
                    SetAlert(
                        'error',
                        'Erreur',
                        "Une erreur s'est produite, la modification n'a pas eu lieu vérifiez l'état de votre connexion sinon réessayer plus tard.",
                        dispatch
                    )
                    dispatch(SetModify(false))
                    dispatch(RefreshProfile())
                })
        } else {
            SetAlert('warning', 'Attention', 'Veuillez introduire des informations correctes ! les caractéres autres que les léttres ne sont pas autorisé.', dispatch)
        }
    }

    const handleAdd = () => {
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
                    SetAlert('success', 'Information', 'Ajout du camarade réalisé avec succés.', dispatch)
                    dispatch(RefreshProfile())
                })
            )
            .catch((err) => {
                SetAlert('error', 'Erreur', "Une erreur s'est produite, l'ajout n'a pas eu lieu vérifiez l'état de votre connexion sinon réessayer plus tard.", dispatch)
                dispatch(RefreshProfile())
            })
    }

    const handleRemove = () => {
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
                    SetAlert('info', 'Information', 'Suppression du profil réalisé avec succés.', dispatch)
                    dispatch(RefreshProfile())
                })
            )
            .catch((err) => {
                SetAlert('error', 'Erreur', "Une erreur s'est produite, la suppression n'a pas eu lieu vérifiez l'état de votre connexion sinon réessayer plus tard.", dispatch)
                dispatch(RefreshProfile())
            })
    }

    const handleAddEns = () => {
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
                    SetAlert('success', 'Information', "l'ajout du collégue réalisé avec succés.", dispatch)
                    dispatch(RefreshProfile())
                })
            )
            .catch((err) => {
                SetAlert('error', 'Erreur', "Une erreur s'est produite, l'ajout n'a pas eu lieu vérifiez l'état de votre connexion sinon réessayer plus tard.", dispatch)
                dispatch(RefreshProfile())
            })
    }
    const handleContacter = () => {
        Axios.post(constants.url + '/api/historique/add/historique', {
            id_user: user.id,
            id_contact: user_info.id_user,
        })
            .then(
                Axios.spread((...res) => {
                    dispatch(SetLoader(false))
                    dispatch(RefreshProfile())
                })
            )
            .catch((err) => {
                dispatch(SetLoader(false))
                dispatch(RefreshProfile())
            })
    }

    const handleRemoveEns = () => {
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
                    SetAlert('info', 'Information', 'Suppression du profil réalisé avec succés.', dispatch)
                    dispatch(RefreshProfile())
                })
            )
            .catch((err) => {
                SetAlert('error', 'Erreur', "Une erreur s'est produite, la suppression n'a pas eu lieu vérifiez l'état de votre connexion sinon réessayer plus tard.", dispatch)
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
                        <Grid container spacing={2} className='centrerInformation'>
                            <Grid item xs={2.5} className='rendreInline'>
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
                            </Grid>
                            <Grid item xs={2.5} className='rendreInline'>
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
                            </Grid>
                        </Grid>
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
                                                handleContacter()
                                                history.push('/messagerie')
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
                                        handleContacter()
                                        history.push('/messagerie')
                                        //dispatch(RefreshProfile())
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
