import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FiUsers } from 'react-icons/fi'
import Button from '@material-ui/core/Button'
import Axios from 'axios'
import { constants } from '../../constants'
import { SetClasses } from '../../store/auth/auth'
import { BsBookmarksFill } from 'react-icons/bs'

export default function Feature1() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.AuthReducer.user)
    const classes = useSelector((state) => state.AuthReducer.classes)

    useEffect(() => {
        if (user.user_type === 'enseignant') {
            Axios.get(constants.url + '/api/classe/get/classe/' + user.id)
                .then((res) => {
                    dispatch(SetClasses(res.data))
                })
                .catch((err) => {
                    dispatch(SetClasses([]))
                })
        } else if (user.user_type === 'etudiant') {
            Axios.get(constants.url + '/api/classe/get/classe/etu/' + user.id)
                .then((res) => {
                    dispatch(SetClasses(res.data))
                })
                .catch((err) => {
                    dispatch(SetClasses([]))
                })
        }
    }, [user.id])

    return (
        <div className='bg-white rounded-2xl h-2/6 w-5/6  mt-3 shadow-lg overflow-y-scroll md:visible '>
            <div className='text-gray-700 text-base'>
                <div className='inline-block ml-4 mt-4'>
                    <BsBookmarksFill className='inline-block text-green-400 ' size={22} />
                    <p className='inline ml-3'>Vos classes</p>
                </div>
            </div>

            <div className='border-b-2 mt-3 border-green-400 w-full'></div>
            <div className='mt-2 ml-4'>
                {classes.map((elem) => {
                    return (
                        <div key={elem.id_classe} className='my-2'>
                            <div className='text-sm text-gray-600 pt-2 font-openSans border-b'>{elem.libelle_classe}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
