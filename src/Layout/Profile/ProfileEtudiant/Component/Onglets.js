import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ListProfs from './ListProfs'
import SupportCours from './SupportCours'
import Amis from './Amis'

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

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}))

export default function Onglets() {
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
                    <Tab label='SUPPORTS DE COURS' {...a11yProps(0)} className='focus:outline-none' />
                    <Tab label='PROFS' {...a11yProps(1)} className='focus:outline-none' />
                    <Tab label='AMIS' {...a11yProps(2)} className='focus:outline-none' />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <SupportCours />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/**
                 * Importation du component ListProfs
                 */}
                <ListProfs />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Amis />
            </TabPanel>
        </div>
    )
}
