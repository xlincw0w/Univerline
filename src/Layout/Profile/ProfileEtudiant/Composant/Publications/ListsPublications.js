import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import moi from '../../Media/moi.png'
import ModifierSupprimerPublication from './Composant/ModifierSupprimerPublication'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        margin: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '%', // 16:9
    },
    small: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
}))

export default function ListsPublications() {
    const classes = useStyles()

    const publications = [
        {
            id: 0,
            nom: 'Diabate Cheick Oumar',
            date: '14 mars 2021',
            message: 'Nous sommes en congés',
        },
        {
            id: 1,
            nom: 'Diabate Cheick Oumar',
            date: '10 mars 2021',
            message: 'Demain, il aura cours',
        },
        {
            id: 0,
            nom: 'Diabate Cheick Oumar',
            date: '15 avril 2016',
            message:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
    ]

    return (
        <Grid container spacing={2}>
            {publications.map((publication) => (
                <Grid item xs={12}>
                    <Card className={classes.root} elevation={2} key={publication.id}>
                        <CardHeader
                            avatar={<Avatar src={moi} className={classes.small} />}
                            action={
                                <IconButton aria-label='settings'>
                                    {/**
                                     * Ajout du bouton pour supprimer ou modifier la publication
                                     */}
                                    <ModifierSupprimerPublication />
                                </IconButton>
                            }
                            title={publication.nom}
                            subheader={publication.date}
                        />
                        <CardMedia className={classes.media} image={moi} title='Paella dish' />
                        <CardContent>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                {publication.message}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
