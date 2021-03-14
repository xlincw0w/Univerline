import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: '90%',
        margin: 'auto',
    },
    table: {
        minWidth: 100,
    },
    titre: {
        fontWeight: 'bold',
    },
})

function createData(name, module) {
    return { name, module }
}

const rows = [
    createData('Mr SI Mohamed Malick', 'CPI'),
    createData('Mr SI Mohamed Malick', "Droit de l'Informatique"),
    createData('Mme Fellag', 'Data Mining'),
    createData('Mme AMIROUCHE', "Recherche d'information"),
    createData('Mr Kerbiche', 'Architecture logicielle'),
]

export default function ListsProfs() {
    const classes = useStyles()

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} size='meduim' aria-label='a dense table'>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <span className={classes.titre}> NOM DU PROFESSEUR </span>
                        </TableCell>
                        <TableCell align='right'>
                            <span className={classes.titre}> MODULE DU PROFESSEUR </span>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component='th' scope='row'>
                                <Link to={`/profile/${row.name}/${row.module}`}> {row.name} </Link>
                            </TableCell>
                            <TableCell align='right'>{row.module}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
