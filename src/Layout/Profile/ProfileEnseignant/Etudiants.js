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
        gridTemplateColumns: 'repeat(4, 1fr)',
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

export default function Etudiants() {
    const classes = useStyles()

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
                <br />

                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
                <br />

                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
                <br />
                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
                <br />

                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
                <br />
                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
                <br />

                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
                <br />
                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
                <br />
                <Grid item xs={4}>
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
                        />
                    </Card>
                </Grid>
            </Grid>

            <div className={classes.container}></div>
        </div>
    )
}
