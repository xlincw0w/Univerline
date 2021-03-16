import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Publications from './Publications'
import Freinds from './Freinds'
import Classes from './Classes'
import Support from './Support'
import { useSelector } from 'react-redux'

export default function CustomizedTabs() {
    const user_info = useSelector((state) => state.ProfileReducer.user_info)
    const [value, setValue] = useState(0)

    const AntTabs = withStyles({
        root: {
            borderBottom: '1px solid #e8e8e8',
        },
        indicator: {
            backgroundColor: user_info.user_type === 'etudiant' ? '#21A17A' : '#7D44E8',
        },
    })(Tabs)

    const AntTab = withStyles((theme) => ({
        root: {
            textTransform: 'none',
            minWidth: 72,
            fontWeight: theme.typography.fontWeightRegular,
            marginRight: theme.spacing(4),
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:hover': {
                color: user_info.user_type === 'etudiant' ? '#21A17A' : '#7D44E8',
                opacity: 1,
            },
            '&$selected': {
                color: user_info.user_type === 'etudiant' ? '#21A17A' : '#7D44E8',
                fontWeight: theme.typography.fontWeightMedium,
            },
            '&:focus': {
                color: user_info.user_type === 'etudiant' ? '#21A17A' : '#7D44E8',
            },
        },
        selected: {},
    }))((props) => <Tab disableRipple {...props} />)

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        padding: {
            padding: theme.spacing(3),
        },
        demo1: {
            backgroundColor: theme.palette.background.paper,
        },
        demo2: {
            backgroundColor: '#2e1534',
        },
    }))

    const classes = useStyles()
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div style={{ minHeight: '50vh' }}>
            <div className={classes.root}>
                <div className={classes.demo1}>
                    <AntTabs value={value} onChange={handleChange} aria-label='ant example'>
                        <AntTab label='Publications' />
                        <AntTab label={user_info.user_type === 'etudiant' ? 'Camarades' : 'Collégues'} />
                        <AntTab label='Classes' />
                        {/* <AntTab label='Ressources' /> */}
                    </AntTabs>
                    {value === 0 && (
                        <div className='mt-4'>
                            <Publications />
                        </div>
                    )}
                    {value === 1 && <div className='mt-4'>{user_info.user_type === 'etudiant' && <Freinds />}</div>}
                    {value === 2 && (
                        <div className='mt-4'>
                            <Classes />
                        </div>
                    )}
                    {/* {value === 3 && (
                        <div className='mt-4'>
                            <Support />
                        </div>
                    )} */}
                    <Typography className={classes.padding} />
                </div>
            </div>
        </div>
    )
}
