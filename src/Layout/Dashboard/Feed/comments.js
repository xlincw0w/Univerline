import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import moment from 'moment'
import { HiOutlineTrash } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { constants } from '../../../constants'

const Comments = ({ elem, Reload }) => {
    const user = useSelector((state) => state.AuthReducer.user)

    const deleteComment = () => {
        if (elem.id_user === user.id) {
            Axios.delete(constants.url + '/api/commentaire/delete/commentaire/' + elem.id_commentaire)
                .then((res) => {
                    Reload()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div id={elem.id_commentaire}>
            <div className='text-left text-xs text-gray-400 bg-gray-200 shadow rounded-lg mx-auto my-1' style={{ width: '98%' }}>
                <div className='py-1 grid grid-cols-6 w-full'>
                    <div className='col-span-5 flex'>
                        <Avatar alt='Remy Sharp' src={elem.avatar} style={{ width: '2rem', height: '2rem' }} className='ml-2 shadow' />
                        <div className='inline'>
                            <p className='ml-2 text-gray-500'>{elem.nom + ' ' + elem.prenom}</p>
                            <p className='ml-2'>{moment(elem.date_commentaire).format('DD - MM - YYYY HH:mm') + ' h'}</p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse mr-2 mt-2'>
                        {elem.id_user === user.id && <HiOutlineTrash onClick={deleteComment} className='cursor-pointer duration-300 hover:text-red-500' size={20} />}
                    </div>
                </div>
                <div className='block ml-2 pb-1 text-gray-500'>
                    <p>{elem.payload}</p>
                </div>
            </div>
        </div>
    )
}

export default Comments
