import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import InfoPerso from './infoPerso'
import FormulaireClasse from './FormulaireClasse'

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant='h6'>{children}</Typography>
            {onClose ? (
                <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions)

export default function AjouterClasse() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant='outlined' color='primary' onClick={handleClickOpen}>
                Ajouter une classe
            </Button>
            <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
                <DialogTitle id='customized-dialog-title' onClose={handleClose}>
                    ajouter une classe
                </DialogTitle>
                <DialogContent dividers>
                    <FormulaireClasse />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color='primary'>
                        enregistrer
                    </Button>
                    <Button autoFocus onClick={handleClose} color='primary'>
                        annuler
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
