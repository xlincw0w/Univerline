import { Container, Grid } from '@material-ui/core'
import moment from 'moment'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsAward } from 'react-icons/bs'
import { GiArrowScope } from 'react-icons/gi'
import { BsCalendar } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { useSelector, useDispatch } from 'react-redux'
import { SetUserInfo } from '../../store/profile/profile'
import React from 'react'

export default function Haut() {
    return (
        <div className='mt-1'>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item sm={12}>
                        <Grid container>
                            <Grid item md={12} xs={12} style={{ textAlign: 'center' }}>
                                <p className='text-xl'>zama</p>
                                <p className='text-2xl text-green-600'>Nom de la classe</p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} style={{ marginTop: '15px' }}>
                            <Grid item md={4} xs={4}>
                                <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                    <Grid item md={12} xs={12}>
                                        <div>
                                            <p className='text-green-600 text-sm inline'>Etablissement</p>
                                            <GoLocation className='inline ml-2 mb-1' size={20} />
                                        </div>
                                        <p className='text-gray-600 text-base'>zama UMMTO</p>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <div>
                                            <p className='text-green-600 text-sm inline'>Domaine educatif</p>
                                            <GiArrowScope className='inline ml-2 mb-1' size={20} />
                                        </div>
                                        <p className='text-gray-600 text-base'>zama Info </p>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                <Grid item md={4} xs={4}>
                                    <div>
                                        <p className='text-green-600 text-sm inline'>Niveau educatif</p>
                                        <BsAward className='inline ml-2 mb-1' size={20} />
                                    </div>
                                    <p className='text-gray-600 text-base'>zama L2</p>
                                </Grid>

                                <Grid item md={4} xs={12}>
                                    <div>
                                        <p className='text-green-600 text-sm inline'>Email</p>
                                        <HiOutlineMailOpen className='inline ml-2 mb-1' size={20} />
                                    </div>
                                    <p className='text-gray-600 text-base'>enseignant@gmail.com</p>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} style={{ marginTop: '15px' }}>
                                <Grid item md={4} xs={12}>
                                    <div>
                                        <p className='text-green-600 text-sm inline '>Date de création</p>
                                        <BsCalendar className='inline ml-2 mb-1 ' size={18} />
                                    </div>
                                    <p className='text-gray-600 text-base'>31/02/2031</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
