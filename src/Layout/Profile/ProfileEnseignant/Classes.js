import React from 'react'
import { Grid } from '@material-ui/core'
import AjouterClasse from './AjouterClasse'
import MesClasses from './MesClasses'
import Etudiants from './Etudiants'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: 250,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

export default function Classes() {
    const classes = useStyles()
    const [age, setAge] = React.useState('')

    const handleChange = event => {
        setAge(event.target.value)
   
    } 

    const choixFait = age === 'BD' ? (
        <Etudiants />
    ) : ('')
    return (
        <div>
            <Grid container>
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id='demo-simple-select-label'>Mes Classes</InputLabel>
                            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} onChange={handleChange}>
                                <MenuItem value='BD'>Initiation aux bases de données_L2</MenuItem>
                                <MenuItem value='Bda'>Administration de bases de données_L3</MenuItem>
                                <MenuItem value='RI'>Bases de données distribuées_M1</MenuItem>
                                <MenuItem value='ABD'>Recherche d'informations</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <AjouterClasse />
                </Grid>

                <Grid item xs={12}>
                    {choixFait}
                </Grid>
            </Grid>
        </div>
    )
}
