import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
})

function createData(name, values) {
    return { name, values }
}

const rows = [
    createData('Nom :', 'John'),
    createData('Prénom :', 'Doe'),
    createData('Age :', 25),
    createData('Grade :', 'maitre assistant'),
    createData('Domaine:', 'Informatique_Bases de données'),
    createData('Adresse e-mail:', 'johndoe@gmail.com'),
]

export default function InfoPerso() {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table' size='medium'>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>

                            <TableCell align='left'>{row.values}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
