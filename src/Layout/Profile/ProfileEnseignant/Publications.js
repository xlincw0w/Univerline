import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import m from './Media/m.jpg'
import MenuPublication from './MenuPublication'

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    image: {
        height: 40,
        width: 40,
    },
}))

export default function Publications() {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={m} alt='Travis Howard' aria-label='recipe' className={classes.avatar} />}
                action={
                    <IconButton aria-label='settings'>
                        <MenuPublication />
                    </IconButton>
                }
                align='left'
                title='John Doe'
                subheader='September 17, 2021'
            />

            <CardContent>
                <Typography Align='left' variant='body2' color='textSecondary' component='p'>
                    Celle ci est une publication test, qui vas etre publiée par l'esnseignant John Doe le 17/09/2021. John Doe vas pouvoir supprimer,ou modifier sa publication.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label='share'>
                    <ShareIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit></Collapse>
        </Card>
    )
}
