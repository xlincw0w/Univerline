import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

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

export default function FormulaireClasse() {
    const classes = useStyles()

    const [niveauEtude, setNiveauEtude] = React.useState('')
    const handleChange = (event) => {
        setNiveauEtude(event.target.value)
    }

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <FormControl className={classes.formControl}>
                <TextField id='standard-basic' label='Nom de la classe' error={false} />
            </FormControl>

            <br />
        </form>
    )
}
