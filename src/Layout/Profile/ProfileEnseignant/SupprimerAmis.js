import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    absolute: {
        Align: 'center',
        right: '-70% ',
        width: '2ch',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}))

export default function SupprimerAmis() {
    const classes = useStyles()

    return (
        <div>
            <Tooltip title='Delete'>
                <IconButton aria-label='delete' className={classes.absolute}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}
