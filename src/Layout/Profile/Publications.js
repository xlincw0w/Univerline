import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { constants } from '../../constants'
import { SetPublications } from '../../store/profile/profile'

export default function Publications() {
    const dispatch = useDispatch()
    const user_info = useSelector((state) => state.ProfileReducer.user_info)
    const publications = useSelector((state) => state.ProfileReducer.publications)

    useEffect(() => {
        if (user_info.id_user) {
            Axios.get(constants.url + '/api/post/get/post/oneuser/' + user_info.id_user)
                .then((res) => {
                    dispatch(SetPublications(res.data))
                })
                .catch((err) => {
                    dispatch(SetPublications([]))
                })
        }
    }, [user_info.id_user])

    return (
        <div>
            {publications.map((elem) => {
                return <StudSkeleton elem={elem} />
            })}
        </div>
    )
}
