import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AjouterCours from './AjouterCours'
import Cours from './Cours'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}))

export default function Support() {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
                    <Typography className={classes.heading}>Initiation aux bases de données</Typography>
                    <Typography className={classes.secondaryHeading}>
                        __L2
                        <AccordionDetails></AccordionDetails>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <br />
                    <AjouterCours />
                    <br />
                    <Typography>
                        <Cours />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2bh-content' id='panel2bh-header'>
                    <Typography className={classes.heading}>Administration de Bases de données</Typography>
                    <Typography className={classes.secondaryHeading}>__L3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <br />
                    <AjouterCours />
                    <br />
                    <Typography>
                        <Cours />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel3bh-content' id='panel3bh-header'>
                    <Typography className={classes.heading}>Bases de données distribuées</Typography>
                    <Typography className={classes.secondaryHeading}>__M1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <br />
                    <AjouterCours />
                    <br />
                    <Typography>
                        <Cours />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel4bh-content' id='panel4bh-header'>
                    <Typography className={classes.heading}>Recherche d'informations</Typography>
                </AccordionSummary>
                <br />
                <AjouterCours />
                <br />

                <AccordionDetails>
                    <Typography>
                        <Cours />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
