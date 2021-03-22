import React, { Fragment } from 'react'

import { List, ListItem, ListItemText, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    couleur: {
        color: theme.palette.text.secondary,
    },
    centrerInfo: {
        width: '90%',
        margin: 'auto',
        // height: '33vh',
    },
    gras: {
        color: 'blue',
    },
}))

export default function Infos({ user, profile }) {
    const classes = useStyles()

    return (
        <Paper elevation={0}>
            <List className={classes.couleur} aria-label='mailbox folders'>
                <div>
                    <p className='inline text-sm text-green-700 ml-3 '>{profile.email}</p>
                </div>
                <div>
                    <p className='inline text-sm text-green-700 ml-3'>{profile.niveau_edu}</p>
                </div>
                <div>
                    <p className='inline text-sm text-green-700 ml-3'>{profile.domaine_edu}</p>
                </div>
            </List>
        </Paper>
    )
}
