import React, { Fragment } from 'react'

import { List, ListItem, ListItemText, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
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

export default function Infos() {
    const classes = useStyles()

    return (
        <Paper elevation={0}>
            <List className={classes.couleur} aria-label='mailbox folders'>
                <ListItem button>
                    <ListItemText>
                        <span className={classes.gras}>Email : </span> janedoe@gmail.com
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <span className={classes.gras}>Niveau Etude : </span> Universitaire
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <span className={classes.gras}>Domaine : </span>Informatique
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <span className={classes.gras}>Etablissemnt : </span> UMMTO
                    </ListItemText>
                </ListItem>
            </List>
        </Paper>
    )
}
