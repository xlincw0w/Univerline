import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Publications from './Publications'
import PhotoProfil from './PhotoProfil'
import VisiterProfil from './VisiterProfil'
import Support from './Support'
import AjouterModule from './AjouterClasse'
import Classes from './Classes'
import Freinds from './Freinds'
import ProfileNv from './nouveau/ProfileNv'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div role='tabpanel' hidden={value !== index} id={`scrollable-auto-tabpanel-${index}`} aria-labelledby={`scrollable-auto-tab-${index}`} {...other}>
            {value === index && (
                <Box p={3}>
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

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}))

export default function Menu() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <AppBar position='static' color='default'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    variant='scrollable'
                    scrollButtons='auto'
                    aria-label='scrollable auto tabs example'>
                    <Tab label='Publications' {...a11yProps(0)} />
                    <Tab label='Amis' {...a11yProps(1)} />
                    <Tab label='Classes' {...a11yProps(2)} />
                    <Tab label='Support' {...a11yProps(3)} />
                    <Tab label='Profile' {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Publications />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Freinds />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Classes />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Support />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <ProfileNv />
            </TabPanel>
        </div>
    )
}
