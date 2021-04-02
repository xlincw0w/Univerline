import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { HiOutlineTrash } from 'react-icons/hi'
import Axios from 'axios'
import { constants } from '../../../../constants'
import { useDispatch } from 'react-redux'
import { RefreshFeed } from '../../../../store/feed/feed'
import firebase from 'firebase'
import { SetAlert } from '../../../../store/alert/alert'

export default function Options({ elem }) {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const storageRef = firebase.storage().ref()

    const handleClick = (e) => {
        Axios.delete(constants.url + '/api/post/delete/post/' + elem.id_poste)
            .then((res) => {
                if (res.data.delete) {
                    SetAlert('info', 'Information', 'Publication supprimée avec succées.', dispatch)
                    dispatch(RefreshFeed())

                    if (elem.file) {
                        storageRef.child(elem.file).delete()
                    }

                    if (elem.image) {
                        storageRef.child(elem.image).delete()
                    }
                }
            })
            .catch((err) => {
                SetAlert('error', 'Erreur', "Une erreur s'est produite, vérifiez l'état de votre connexion sinon réessayer plus tard.", dispatch)
            })
    }

    return (
        <div>
            <HiOutlineTrash className='text-gray-200 cursor-pointer duration-300 hover:text-red-500' size={30} onClick={(e) => handleClick(e)} />
        </div>
    )
}
