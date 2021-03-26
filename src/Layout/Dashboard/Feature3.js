import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HiStatusOnline } from 'react-icons/hi'
import { SetFriends } from '../../store/auth/auth'
import OnlineSm from './Online/onlineSm'
import Axios from 'axios'
import { constants } from '../../constants'

export default function Feature3() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.AuthReducer.user)
    const friends = useSelector((state) => state.AuthReducer.friends)

    return (
        <div className='overflow-x-scroll md:visible'>
        <div className='flex flex-row space-x-6'>
            {user.user_type === 'etudiant' &&
                friends.map((elem) => {
                    return <OnlineSm key={elem.id_user} id={elem.id_user} nom={elem.nom} prenom={elem.prenom} avatar={elem.avatar} user_type={elem.user_type} />
                })}
            {user.user_type === 'enseignant' &&
                friends.map((elem) => {
                    return <OnlineSm key={elem.id_user} id={elem.id_user} nom={elem.nom} prenom={elem.prenom} avatar={elem.avatar} user_type={elem.user_type} />
                })}
        </div>
    </div>
    )
}
