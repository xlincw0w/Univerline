import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(1),
    },
    absolute: {
        position: 'absolute',
        right: '-50% ',
        width: '2ch',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}))

export default function AjouterCours() {
    const classes = useStyles()

    return (
        <div>
            <Tooltip title='Ajouter cours'>
                <IconButton aria-label='ajouter cours' className={classes.absolute}>
                    <NoteAddIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}
