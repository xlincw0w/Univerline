import React from 'react'
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

export default function MesClasses() {
    const classes = useStyles()
    const [age, setAge] = React.useState('')

    const handleChange = event => {
        setAge(event.target.value)
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Mes Classes</InputLabel>
                <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} onChange={handleChange}>
                    <MenuItem value={10}>Initiation aux bases de données_L2</MenuItem>
                    <MenuItem value={20}>Administration de bases de données_L3</MenuItem>
                    <MenuItem value={30}>Bases de données distribuées_M1</MenuItem>
                    <MenuItem value={40}>Recherche d'informations</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
