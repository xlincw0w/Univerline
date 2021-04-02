import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

export default function CustomizedTabs() {
    const [value, setValue] = useState(0)

    const AntTabs = withStyles({
        root: {
            borderBottom: '1px solid #e8e8e8',
        },
        indicator: {
            backgroundColor: '#21A17A',
        },
    })(Tabs)

    const AntTab = withStyles(theme => ({
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
                color: '#21A17A',
                opacity: 1,
            },
            '&$selected': {
                color: '#21A17A',
                fontWeight: theme.typography.fontWeightMedium,
            },
            '&:focus': {
                color: '#21A17A',
            },
        },
        selected: {},
    }))(props => <Tab disableRipple {...props} />)

    const useStyles = makeStyles(theme => ({
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
                    <div>
                        <AntTabs value={value} onChange={handleChange} aria-label='ant example'>
                            <AntTab label='Publications' />
                            <AntTab label='membres' />
                            <AntTab label='Support' />
                        </AntTabs>
                        {value === 0 && <div className='mt-4'></div>}
                        {value === 1 && <div className='mt-4'> </div>}
                        {value === 2 && <div className='mt-4'></div>}
                        <Typography className={classes.padding} />
                    </div>
                </div>
            </div>
        </div>
    )
}
