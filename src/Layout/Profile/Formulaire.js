import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '31ch',
        },
        formControl: {
            margin: theme.spacing(),
            minWidth: 120,
        },
    },
}))

export default function Formulaire() {
    const classes = useStyles()

    const [niveauEtude, setNiveauEtude] = React.useState('')
    const handleChange = event => {
        setNiveauEtude(event.target.value)
    }

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <FormControl className={classes.formControl}>
                <TextField id='standard-basic' label='Nom' error={false} />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id='standard-basic' label='Prénom' error={false} />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id='standard-basic' label='Age' error={false} type='number' />
            </FormControl>{' '}
            <br />
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Grade</InputLabel>
                <Select labelId='demo-simple-select-label' id='demo-simple-select' value={niveauEtude} error={false} onChange={handleChange}>
                    <MenuItem value='L1'>Doctorant</MenuItem>
                    <MenuItem value='L2'>Docteur</MenuItem>
                    <MenuItem value='L3'>maitre-assistant</MenuItem>
                    <MenuItem value='M1'>Professeur</MenuItem>
                    <MenuItem value='M2'>Prefesseur Chercheur</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id='standard-basic' label='Domaine et spécialité' error={false} />
            </FormControl>
        </form>
    )
}
