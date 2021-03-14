import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Avatar, Box, Button, Container, Divider, Grid, List, ListItem, ListItemText, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import EditIcon from '@material-ui/icons/Edit'
import TodayIcon from '@material-ui/icons/Today'
import PersonIcon from '@material-ui/icons/Person'
import me from './Media/moi.png'
import Amis from './Composant/Amis/Amis'
import ListsProfs from './Composant/ListsProfs/ListsProfs'
import ListsPublications from './Composant/Publications/ListsPublications'
import SupportsCours from './Composant/SupportsCours/SupportsCours'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div role='tabpanel' hidden={value !== index} id={`scrollable-auto-tabpanel-${index}`} aria-labelledby={`scrollable-auto-tab-${index}`} {...other}>
            {value === index && (
                <Box p={4}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    rootOnglet: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(28),
        height: theme.spacing(28),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '15px',
    },
    paper1: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
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
    input: {
        display: 'none',
    },
    positionEnBas: {
        position: 'fixed',
        bottom: 15,
        right: 90,
    },
    positionFixed: {
        position: 'fixed',
        zIndex: 1,
        top: 85,
        left: 90,
        right: 0,
    },
    centrerMilieu: {
        marginLeft: '24%',
    },
}))

export default function ProfileEtudiant() {
    const classes = useStyles()

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const infos = {
        nom: 'Diabate Cheick Oumar',
        email: 'cheickoumar@gmail.com',
        niveau_etude: 'M2',
        domaine_etude: 'ISI',
        etablissement: 'UMMTO',
    }

    return (
        <Container maxWidth='lg' style={{ overflow: 'hidden' }}>
            <Grid container spacing={2}>
                <Grid item xs={3} className={classes.positionFixed}>
                    <Grid container spacing={2} style={{ width: '85%' }}>
                        <Paper className={classes.paper1} style={{ width: '94%', textAlign: 'center', marginLeft: '10px' }} elevation={2}>
                            <Grid item xs={12}>
                                <span style={{ display: 'inline-block' }}>
                                    <Avatar alt='Photo de cheick oumar diabate' src={me} className={classes.large} variant='square' />
                                </span>
                                <br />
                                <span>
                                    <input accept='image/*' className={classes.input} id='contained-button-file' multiple type='file' />
                                    <label htmlFor='contained-button-file'>
                                        <Button variant='contained' color='primary' component='span' size='small'>
                                            Modifier
                                        </Button>
                                    </label>
                                </span>
                            </Grid>
                        </Paper>
                        <Grid item xs={12}>
                            <span>
                                <PersonIcon /> Information personnelle
                            </span>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={2}>
                                <List className={classes.couleur} aria-label='mailbox folders'>
                                    <ListItem button>
                                        <ListItemText>
                                            <span className={classes.gras}>Nom : </span> {infos.nom}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText>
                                            <span className={classes.gras}>Email : </span> {infos.email}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText>
                                            <span className={classes.gras}>Niveau Etude : </span> {infos.niveau_etude}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText>
                                            <span className={classes.gras}>Domaine Etude : </span> {infos.domaine_etude}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText>
                                            <span className={classes.gras}>Etablissemnt : </span> {infos.etablissement}
                                        </ListItemText>
                                        <ListItemText></ListItemText>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={7} className={classes.centrerMilieu}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper1} elevation={3}>
                                <Typography variant='h4' display='block' style={{ fontWeight: 'bold' }}>
                                    {infos.nom}
                                </Typography>
                                <Typography variant='h6' display='block' style={{ fontWeight: 'bold', textDecoration: 'underLine', marginTop: '5px' }}>
                                    Description
                                </Typography>
                                <>{infos.nom} est un etudiant de {infos.niveau_etude} qui étudie {infos.domaine_etude} à {infos.etablissement}.</>
                                <p style={{ marginTop: '53px' }}>
                                    <Button size='large' color='primary' variant='text' style={{ textTransform: 'inherit' }}>
                                        <EditIcon />
                                        Modifier le profile
                                    </Button>
                                    <Button size='large' href='/messagerie' color='primary' variant='text' style={{ textTransform: 'inherit' }}>
                                        <ChatBubbleOutlineOutlinedIcon />
                                        Messagerie
                                    </Button>
                                    <Button size='large' href='/auth' color='primary' variant='text' style={{ textTransform: 'inherit' }}>
                                        <TodayIcon />
                                        Fil d'actualité
                                    </Button>
                                </p>
                            </Paper>
                            <br />
                            <Divider />
                        </Grid>

                        <Grid item xs={12}>
                            <Paper elevation={3}>
                                <div className={classes.rootOnglet}>
                                    <AppBar position='static' color='transparent'>
                                        <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            indicatorColor='primary'
                                            textColor='primary'
                                            variant='scrollable'
                                            scrollButtons='auto'
                                            aria-label='scrollable auto tabs example'>
                                            <Tab label='Publications' {...a11yProps(0)} />
                                            <Tab label='Supports Cours' {...a11yProps(1)} />
                                            <Tab label='Professeurs' {...a11yProps(2)} />
                                            <Tab label='Amis' {...a11yProps(3)} />
                                        </Tabs>
                                    </AppBar>
                                    <TabPanel value={value} index={0}>
                                        <ListsPublications />
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <SupportsCours />
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <ListsProfs />
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                        <Amis />
                                    </TabPanel>
                                </div>
                            </Paper>
                            <Divider />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2} className={classes.positionEnBas}>
                    <Paper className={classes.paper1} elevation={3}>
                        <Typography variant='h6' display='block' style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', fontWeight: 'bold' }}>
                            Informations connexion
                        </Typography>
                        <Typography variant='body1' display='block' style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>
                            Premier accès au site
                        </Typography>
                        <Typography variant='body1' display='block' style={{ fontWeight: 'lighter', fontSize: '12px' }}>
                            mardi 29 septembre 2015
                        </Typography>
                        <Divider />
                        <Typography variant='body1' display='block' style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>
                            Dernier accès au site
                        </Typography>
                        <Typography variant='body1' display='block' style={{ fontWeight: 'lighter', fontSize: '12px' }}>
                            Vendredi 25 mars 2016
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
