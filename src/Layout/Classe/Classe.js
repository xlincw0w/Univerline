import React from 'react'
import Haut from './Haut'
import Menu from './Menu'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import useEffect from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ex from './ex.jpg'
import Avatar from '@material-ui/core/Avatar'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: '',
        color: theme.palette.text.secondary,
    },
    taille: {
        /*color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],*/
        width: theme.spacing(27),
        height: theme.spacing(27),
    },
}))

export default function Classe() {
    const dispatch = useDispatch()
    const routeParams = useParams()
    const user = useSelector(state => state.AuthReducer.user)
    const profile = useSelector(state => state.ProfileReducer.user_info)
    const reset = useSelector(state => state.ProfileReducer.reset)
    const loader = useSelector(state => state.ProfileReducer.loader)
    const classes = useStyles()
    return (
        <div className='h-auto bg-gradient-to-r from-green-400 to-purple-700'>
            <div className='w-full h-full bg-gray-200 bg-opacity-60'>
                <div className='' style={{ minHeight: '100vh' }}>
                    <Backdrop open={loader} style={{ zIndex: 10 }}>
                        <CircularProgress color='inherit' />
                    </Backdrop>
                    <Container maxWidth='lg' className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item sm={12}>
                                <Paper style={{ width: '100%' }} className={classes.paper}>
                                    <Grid container>
                                        <Grid item lg={12} md={12} xs={12} style={{ textAlign: 'center' }}>
                                            <span style={{ display: 'inline-block' }}>
                                                <Avatar variant='circle' src={ex} className={classes.taille}></Avatar>
                                            </span>
                                        </Grid>
                                        <Grid item lg={12} md={12} xs={12}>
                                            <Haut />
                                        </Grid>
                                    </Grid>
                                </Paper>

                                <Paper className={classes.paper}>
                                    <Menu />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    )
}
