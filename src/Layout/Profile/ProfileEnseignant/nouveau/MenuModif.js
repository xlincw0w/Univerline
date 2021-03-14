import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutline'
import TodayIcon from '@material-ui/icons/Today'
import ModifierProfil from '../ModifierProfil'

const useStyles = makeStyles(theme => ({
    root: {
        alignItems: 'left',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

export default function MenuModif() {
    const classes = useStyles()

    const handleDelete = () => {
        console.info('You clicked the delete icon.')
    }

    const handleClick = () => {
        console.info('You clicked the Chip.')
    }

    return (
        <div className={classes.root}>
            <p style={{ marginTop: '53px' }}>
                <Button size='large' color='primary' variant='text' style={{ textTransform: 'inherit' }}>
                    {' '}
                    <ModifierProfil />
                </Button>
                <Button size='large' href='/messagerie' color='primary' variant='text' style={{ textTransform: 'inherit' }}>
                    <ChatBubbleOutlineOutlinedIcon />
                    Messagerie
                </Button>
                <Button size='large' href='/auth' color='primary' variant='text' style={{ textTransform: 'inherit' }}>
                    <TodayIcon />
                    Fil d'actualité
                </Button>
            </p>
        </div>
    )
}
