import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import SupprimerAmis from './SupprimerAmis'
import ContacterAmis from './ContacterAmis'
import A from './Media/A.jpg'
import B from './Media/B.jpg'
import C from './Media/C.jpg'
import D from './Media/D.jpg'
import VisiterProfil from './VisiterProfil'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '36ch',

        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}))

export default function Amis() {
    const classes = useStyles()

    return (
        <List className={classes.root}>

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Remy Sharp' src={A} />
                </ListItemAvatar>
                <ListItemText
                    primary='John Doe'
                    secondary={
                        <React.Fragment>
                            <Typography component='span' variant='body2' className={classes.inline} color='textPrimary'>
                                Professeur
                            </Typography>
                            {' —  Computer Science_Cyber Security'}
                            <hr />
                            <VisiterProfil />
                            <SupprimerAmis />
                            <ContacterAmis />
                        </React.Fragment>
                    }
                />
            </ListItem>
            
            <Divider variant='inset' component='li' />
            
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Travis Howard' src={B} />
                </ListItemAvatar>
                <ListItemText
                    primary='Jane Doe'
                    secondary={
                        <React.Fragment>
                            <Typography component='span' variant='body2' className={classes.inline} color='textPrimary'>
                                Doctorante
                            </Typography>
                            {' —  Mécanique'}
                            <br />
                            <VisiterProfil />
                            <SupprimerAmis />
                            <ContacterAmis />
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Cindy Baker' src={C} />
                </ListItemAvatar>
                <ListItemText
                    primary='Another Doe'
                    secondary={
                        <React.Fragment>
                            <Typography component='span' variant='body2' className={classes.inline} color='textPrimary'>
                                maitre assistant
                            </Typography>
                            {' —  Mécanique'}
                            <br />
                            <VisiterProfil />
                            <SupprimerAmis />
                            <ContacterAmis />
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Travis Howard' src={D} />
                </ListItemAvatar>
                <ListItemText
                    primary='Last Doe'
                    secondary={
                        <React.Fragment>
                            <Typography component='span' variant='body2' className={classes.inline} color='textPrimary'>
                                Professeur chercheur
                            </Typography>
                            {' — Histoire et antiquitée'}
                            <br />
                            <VisiterProfil />
                            <SupprimerAmis />
                            <ContacterAmis />
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    )
}
