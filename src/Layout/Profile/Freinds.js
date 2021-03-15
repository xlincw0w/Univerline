import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import RechercherAmis from './RechercherAmis'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
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
    const friends = useSelector((state) => state.AuthReducer.friends)
    const user = useSelector((state) => state.AuthReducer.user)

    useEffect(() => {})

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <RechercherAmis />
                        </Paper>
                    </Grid>
                    <br />

                    {/* <Grid item xs={8.5}>
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
                    </Grid> */}
                </Grid>
            </Grid>
            <div className={classes.container}></div>
        </div>
    )
}
