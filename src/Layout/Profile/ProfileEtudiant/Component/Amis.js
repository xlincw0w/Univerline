import React from 'react'
import Grid from '@material-ui/core/Grid'
import AffichageAmis from './Amis/AffichageAmis'
import { Paper } from '@material-ui/core'

import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.primary,
        marginLeft: '9px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '33ch',
            '&:focus': {
                width: '77ch',
            },
        },
    },
}))

export default function CenteredGrid() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Paper className={classes.paper}>
                    <Grid item sm={12} xs={12}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder='Search…'
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                error
                            />
                        </div>
                    </Grid>
                </Paper>
            </Grid>
            <br />
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <AffichageAmis />
                </Grid>
                <Grid item md={6} xs={12}>
                    <AffichageAmis />
                </Grid>
                <Grid item md={6} xs={12}>
                    <AffichageAmis />
                </Grid>
                <Grid item md={6} xs={12}>
                    <AffichageAmis />
                </Grid>
            </Grid>
        </div>
    )
}
