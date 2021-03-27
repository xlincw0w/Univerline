import React from 'react'
import moment from 'moment'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsAward } from 'react-icons/bs'
import { GiArrowScope } from 'react-icons/gi'
import { BsCalendar } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { useSelector, useDispatch } from 'react-redux'
import { SetUserInfo } from '../../store/profile/profile'
import { Container, Grid } from '@material-ui/core'

export default function CarteHaut({ profile }) {
    const dispatch = useDispatch()
    const modify = useSelector(state => state.ProfileReducer.modify)

    return (
        <div className='mt-6'>
            {profile.user_type === 'etudiant' && (
                <div>
                    {!modify && (
                        <Container maxWidth='lg'>
                            <Grid container>
                                <Grid item sm={12}>
                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <p className='text-xl'>{profile.nom && profile.prenom ? profile.nom.capitalize() + ' ' + profile.prenom.capitalize() : ''}</p>
                                            <p className='text-2xl text-green-600'>{profile.user_type ? profile.user_type.capitalize() : ''}</p>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                        <Grid item md={4} xs={4}>
                                            <div>
                                                <p className='text-green-600 text-sm inline'>Etablissement</p>
                                                <GoLocation className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{profile.etablissement ? profile.etablissement.capitalize() : ''}</p>
                                        </Grid>
                                        <Grid item md={4} xs={4}>
                                            <div>
                                                <p className='text-green-600 text-sm inline'>Niveau educatif</p>
                                                <BsAward className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{profile.niveau_edu ? profile.niveau_edu.capitalize() : ''}</p>
                                        </Grid>
                                        <Grid item md={4} xs={4}>
                                            <div>
                                                <p className='text-green-600 text-sm inline'>Domaine educatif</p>
                                                <GiArrowScope className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{profile.domaine_edu ? profile.domaine_edu.capitalize() : ''}</p>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                        <Grid item lg={4} md={5} xs={12}>
                                            <div>
                                                <p className='text-green-600 text-sm inline'>Email</p>
                                                <HiOutlineMailOpen className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{profile.email}</p>
                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <p className='text-green-600 text-sm inline '>Date de création</p>
                                                <BsCalendar className='inline ml-2 mb-1 ' size={18} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{moment(profile.date_inscription).format('DD - MM - YYYY')}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    )}
                    {modify && (
                        <Container maxWidth='lg' className='centrerInformation'>
                            <Grid container>
                                <Grid item sm={12} className='rendreInline'>
                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <input
                                                type='text'
                                                className='block pl-3 pr-12 w-32 sm:text-sm border-gray-300 rounded-md inline'
                                                value={profile.nom}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            nom: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                            <input
                                                type='text'
                                                className='block pl-3 pr-12 w-32 sm:text-sm border-gray-300 rounded-md inline ml-2'
                                                value={profile.prenom}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            prenom: e.target.value,
                                                        })
                                                    )
                                                }
                                            />

                                            <p className='text-2xl text-green-600'>{profile.user_type.capitalize()}</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <p className='text-green-600 text-sm inline'>Etablissement</p>
                                                <GoLocation className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <input
                                                type='text'
                                                className='sm:text-sm border-gray-300 rounded-md'
                                                value={profile.etablissement}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            etablissement: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <p className='text-green-600 text-sm inline'>Niveau educatif</p>
                                                <BsAward className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <input
                                                type='text'
                                                className='sm:text-sm border-gray-300 rounded-md'
                                                value={profile.niveau_edu}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            niveau_edu: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <p className='text-green-600 text-sm inline'>Domaine educatif</p>
                                                <GiArrowScope className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <input
                                                type='text'
                                                className='sm:text-sm border-gray-300 rounded-md'
                                                value={profile.domaine_edu}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            domaine_edu: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <p className='text-green-600 text-sm inline'>Email</p>
                                                <HiOutlineMailOpen className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <input
                                                type='text'
                                                className='sm:text-sm border-gray-300 rounded-md'
                                                value={profile.email}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            email: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <div className='mt-5'>
                                                <div>
                                                    <p className='text-green-600 text-sm inline'>Date de création</p>
                                                    <BsCalendar className='inline ml-2 mb-1' size={18} />
                                                </div>
                                                <p className='text-gray-600 text-base'>{moment(profile.date_inscription).format('DD - MM - YYYY')}</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    )}
                </div>
            )}
            {profile.user_type === 'enseignant' && (
                <div>
                    {!modify && (
                        <Container maxWidth='lg'>
                            <Grid container>
                                <Grid item sm={12}>
                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <p className='text-xl'>{profile.nom && profile.prenom ? profile.nom.capitalize() + ' ' + profile.prenom.capitalize() : ''}</p>
                                            <p className='text-2xl text-purple-700'>{profile.user_type ? profile.user_type.capitalize() : ''}</p>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                        <Grid item lg={4} md={4} xs={6}>
                                            <div>
                                                <p className='text-purple-700 text-sm inline'>Domaine enseignement</p>
                                                <GiArrowScope className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{profile.domaine_ens ? profile.domaine_ens.capitalize() : ''}</p>
                                        </Grid>
                                        <Grid item lg={4} md={4} xs={6}>
                                            <div>
                                                <p className='text-purple-700 text-sm inline'>Niveau enseignement</p>
                                                <BsAward className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{profile.niveau_ens ? profile.niveau_ens.capitalize() : ''}</p>
                                        </Grid>
                                        <Grid item lg={4} md={4} xs={6}>
                                            <div>
                                                <p className='text-purple-700 text-sm inline'>Email</p>
                                                <HiOutlineMailOpen className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{profile.email}</p>
                                        </Grid>
                                        <Grid item lg={4} md={4} xs={7}>
                                            <div>
                                                <p className='text-purple-700 text-sm inline'>Date de création</p>
                                                <BsCalendar className='inline ml-2 mb-1' size={18} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{moment(profile.date_inscription).format('DD - MM - YYYY')}</p>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={3} style={{ marginTop: '15px' }}></Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    )}
                    {modify && (
                        <Container maxWidth='lg' className='centrerInformation'>
                            <Grid container>
                                <Grid item sm={12} className='rendreInline'>
                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <input
                                                type='text'
                                                className='pl-3 pr-12 w-32 sm:text-sm border-gray-300 rounded-md inline'
                                                value={profile.nom}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            nom: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                            <input
                                                type='text'
                                                className='pl-3 pr-12 w-32 sm:text-sm border-gray-300 rounded-md inline ml-2'
                                                value={profile.prenom}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            prenom: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                            <p className='text-2xl text-purple-700'>{profile.user_type.capitalize()}</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <p className='text-purple-700 text-sm inline'>Domaine enseignement</p>
                                                <GiArrowScope className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <input
                                                type='text'
                                                className='sm:text-sm border-gray-300 rounded-md'
                                                value={profile.domaine_ens}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            domaine_ens: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                        </Grid>

                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <p className='text-purple-700 text-sm inline'>Niveau enseignement</p>
                                                <BsAward className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <input
                                                type='text'
                                                className='block pl-3 pr-12 w-62 sm:text-sm border-gray-300 rounded-md'
                                                value={profile.niveau_ens}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            niveau_ens: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                        </Grid>

                                        <Grid item md={4} xs={12}>
                                            <div>
                                                <p className='text-purple-700 text-sm inline'>Email</p>
                                                <HiOutlineMailOpen className='inline ml-2 mb-1' size={20} />
                                            </div>
                                            <input
                                                type='text'
                                                className='block pl-3 pr-12 w-62 sm:text-sm border-gray-300 rounded-md'
                                                value={profile.email}
                                                onChange={e =>
                                                    dispatch(
                                                        SetUserInfo({
                                                            ...profile,
                                                            email: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item md={4} xs={12}>
                                        <div className='mt-5'>
                                            <div>
                                                <p className='text-purple-700 text-sm inline'>Date de création</p>
                                                <BsCalendar className='inline ml-2 mb-1' size={18} />
                                            </div>
                                            <p className='text-gray-600 text-base'>{moment(profile.date_inscription).format('DD - MM - YYYY')}</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    )}
                </div>
            )}
        </div>
    )
}
