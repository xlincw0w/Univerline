import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MenuAmi from './MenuAmi'

const useStyles = makeStyles((theme) => ({
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
            {/* <Grid container spacing={3}>
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
            <div className={classes.container}></div> */}
        </div>
    )
}
