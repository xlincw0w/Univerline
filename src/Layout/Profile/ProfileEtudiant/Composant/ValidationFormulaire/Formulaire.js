import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import GererFormulaire from './GererFormulaire'
import ValiderInfo from './ValiderInfo'

const useStyles = makeStyles((theme) => ({
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
    const handleChange = (event) => {
        setNiveauEtude(event.target.value)
    }

    const { handleChanger, values, handleSubmit, errors } = GererFormulaire(ValiderInfo)

    return (
        <form className={classes.root} noValidate onSubmit={handleSubmit}>
            <FormControl className={classes.formControl}>
                <TextField
                    id='standard-basic'
                    label='Nom'
                    required
                    error={errors.ErrorUsername}
                    name='username'
                    defaultValue={values.username}
                    onChange={handleChanger}
                    helperText={errors.username}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id='standard-basic'
                    label='Email'
                    required
                    type='email'
                    error={errors.ErrorEmail}
                    name='email'
                    defaultValue={values.email}
                    onChange={handleChanger}
                    helperText={errors.email}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Niveau Etude</InputLabel>
                <Select labelId='demo-simple-select-label' id='demo-simple-select' value={niveauEtude} error={false} onChange={handleChange}>
                    <MenuItem value='L1'>L1</MenuItem>
                    <MenuItem value='L2'>L2</MenuItem>
                    <MenuItem value='L3'>L1</MenuItem>
                    <MenuItem value='M1'>M1</MenuItem>
                    <MenuItem value='M2'>M2</MenuItem>
                </Select>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
                <TextField id='standard-basic' label='Domaine Etude(Spécialité)' error={false} name='specialite' defaultValue={values.specialite} onChange={handleChanger} />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id='standard-basic' label='Etablissement' error={false} name='etablissement' defaultValue={values.etablissement} onChange={handleChanger} />
            </FormControl>

            <button>valider</button>
        </form>
    )
}
