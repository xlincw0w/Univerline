import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import moi from '../moi.png'
import MenuAmi from './MenuAmi'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
}))

export default function InteractiveList() {
    const classes = useStyles()
    const [dense, setDense] = React.useState(false)
    const [secondary, setSecondary] = React.useState(false)

    return (
        <Grid container spacing={1} className={(classes.demo, classes.root)}>
            <Grid item xs={9}>
                <div>
                    <List dense={dense}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt='Remy Sharp' src={moi} className={classes.large} />
                            </ListItemAvatar>
                            <span>
                                <ListItemText primary='Kanté Aboubakar' secondary="professeur- Systeme dch'information " />
                            </span>
                        </ListItem>
                    </List>
                </div>
            </Grid>
            <Grid item xs={3} style={{marginTop: '7px'}}>
                <span >
                    <MenuAmi />
                </span>
            </Grid>
        </Grid>
    )
}
