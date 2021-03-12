import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import moi from '../moi.png'
import MenuAmi from './MenuAmi'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}))

export default function RecipeReviewCard() {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt="Photo de cheick oumar diabate" src={moi} className={classes.large}/>
                }
                action={
                    <IconButton aria-label='menuAmi'>
                        <MenuAmi />
                    </IconButton>
                }
                title='Kante Aboubakar'
                subheader='Etudiant'
            />
        </Card>
    )
}
