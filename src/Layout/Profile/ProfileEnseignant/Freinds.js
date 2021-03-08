import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import A from './Media/A.jpg'
import B from './Media/B.jpg'
import C from './Media/C.jpg'
import D from './Media/D.jpg'
import RechercherAmis from './RechercherAmis'
import SupprimerAmis from './SupprimerAmis'
import ContacterAmis from './ContacterAmis'
import VisiterProfil from './VisiterProfil'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MenuAmi from './MenuAmi'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}))

export default function Freinds() {
    const classes = useStyles()

    return (
        <div>
            <Typography variant='subtitle1' gutterBottom></Typography>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <Grid item xs={8.5}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={<Avatar src={B} alt='Travis Howard' aria-label='recipe' className={classes.avatar} />}
                                    action={
                                        <IconButton aria-label='settings'>
                                            <MenuAmi />
                                        </IconButton>
                                    }
                                    align='left'
                                    title='John Doe'
                                    subheader=' Professeur —Computer Science_Cyber Security'
                                />
                            </Card>
                        </Grid>
                        <br />

                        <Grid item xs={8.5}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={<Avatar src={A} alt='Travis Howard' aria-label='recipe' className={classes.avatar} />}
                                    action={
                                        <IconButton aria-label='settings'>
                                            <MenuAmi />
                                        </IconButton>
                                    }
                                    align='left'
                                    title='Jane Doe'
                                    subheader=' Doctorante —Mécanique'
                                />
                            </Card>
                        </Grid>
                        <br />

                        <Grid item xs={8.5}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={<Avatar src={C} alt='Travis Howard' aria-label='recipe' className={classes.avatar} />}
                                    action={
                                        <IconButton aria-label='settings'>
                                            <MenuAmi />
                                        </IconButton>
                                    }
                                    align='left'
                                    title='John Doe'
                                    subheader=' maitre assistant —Mécanique'
                                />
                            </Card>
                        </Grid>
                        <br />
                        <Grid item xs={8.5}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={<Avatar src={D} alt='Travis Howard' aria-label='recipe' className={classes.avatar} />}
                                    action={
                                        <IconButton aria-label='settings'>
                                            <MenuAmi />
                                        </IconButton>
                                    }
                                    align='left'
                                    title='John Doe'
                                    subheader='Professeur chercheur  — Histoire et antiquitée'
                                />
                            </Card>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <RechercherAmis />
                    </Paper>
                </Grid>
            </Grid>
            <div className={classes.container}></div>
        </div>
    )
}
