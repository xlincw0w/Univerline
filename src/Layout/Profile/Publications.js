import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { constants } from '../../constants'
import { SetPublications } from '../../store/profile/profile'
import { FaComments } from 'react-icons/fa'
import { HiShare } from 'react-icons/hi'
import Comments from '../Dashboard/Feed/comments'
import Options from '../Dashboard/Feed/options/options'
import Avatar from '@material-ui/core/Avatar'
import moment from 'moment'
import cx from 'classnames'

export default function Publications() {
    const dispatch = useDispatch()
    const user_info = useSelector((state) => state.ProfileReducer.user_info)
    const publications = useSelector((state) => state.ProfileReducer.publications)
    const refresh = useSelector((state) => state.FeedReducer.refresh)
    const user = useSelector((state) => state.AuthReducer.user)

    useEffect(async () => {
        if (user_info.id_user && user.id) {
            const res = await Axios.post(constants.url + '/api/amis/isFriend/', {
                id_user: user.id,
                id_friend: user_info.id_user,
            })

            if (res.data.friend || user_info.id_user === user.id) {
                Axios.get(constants.url + '/api/post/get/post/oneuser/' + user_info.id_user)
                    .then((res) => {
                        dispatch(SetPublications(res.data))
                    })
                    .catch((err) => {
                        dispatch(SetPublications([]))
                    })
            }
        }
    }, [user_info.id_user, user.id, refresh])

    const ProfSkeleton = ({ elem }) => {
        const [loadComment, setLoadComment] = useState(false)

        const [comments, setComments] = useState([])
        const [payload, setPayload] = useState('')
        const [refresh, setRefresh] = useState(0)

        const Reload = () => {
            setRefresh(refresh + 1)
        }

        useEffect(() => {
            if (loadComment) {
                Axios(constants.url + '/api/commentaire/get/comments/' + elem.id_poste)
                    .then((res) => {
                        setComments(res.data)
                    })
                    .catch((err) => {
                        setComments([])
                    })
            }
        }, [loadComment, refresh])

        const handleComment = (e) => {
            e.preventDefault()
            Axios.post(constants.url + '/api/commentaire/add/comments/', {
                id_user: user.id,
                id_poste: elem.id_poste,
                payload,
            })
                .then((res) => {
                    Reload()
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        return (
            <div id={elem.id_poste} className='w-120 2xl:w-144 h-auto bg-gray-100 shadow-2xl mx-auto rounded-lg mb-20'>
                <div className='h-1/4 bg-gradient-to-r from-purple-500 to-purple-700 shadow-xl rounded-xl'>
                    <div className='grid grid-cols-5'>
                        <div className='mx-auto my-3 border-2 border-gray-100 rounded-full shadow-xl'>
                            <Avatar alt='Remy Sharp' src={elem.avatar} style={{ width: '2.5rem', height: '2.5rem' }} />
                        </div>
                        <div className='col-span-4 flex'>
                            <div className='mt-3'>
                                <p className='text-gray-200 text-sm'>{elem.nom.capitalize() + ' ' + elem.prenom.capitalize()}</p>
                                <p className='text-gray-100 text-sm'>Enseignant</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-auto'>
                    <div className='h-auto'>
                        <div className='mt-2 text-center'>
                            <p className='text-gray-500 text-sm'>{moment(elem.date_poste).format('DD - MM - YYYY HH:mm') + ' h'}</p>
                            <p className='text-gray-500 text-sm'>{elem.libelle_classe}</p>
                        </div>
                        <div className='mt-10 mb-10 px-10 text-left'>
                            <p className='text-gray-600 text-base'>{elem.payload}</p>
                        </div>
                    </div>
                    <div className='text-gray-600 border-t-2 border-gray-400'>
                        <div className='mt-4 flex justify-start h-10'>
                            <div
                                onClick={() => {
                                    setLoadComment(!loadComment)
                                }}
                                className='inline-block mx-4 cursor-pointer'>
                                <FaComments className='inline' />
                                <p className='text-gray-500 text-sm inline ml-3'>Commenter</p>
                            </div>
                            <div className='inline-block mx-4 cursor-pointer'>
                                <HiShare className='inline' />
                                <p className='text-gray-500 text-sm inline ml-3'>Partager</p>
                            </div>
                        </div>
                    </div>
                    {loadComment && (
                        <div className='w-full h-auto bg-gray-100 shadow rounded'>
                            <form className='w-full' onSubmit={handleComment}>
                                <input
                                    type='text'
                                    required={true}
                                    onChange={(e) => setPayload(e.target.value)}
                                    className='focus:ring-indigo-500focus:border-indigo-500 block w-full lg:w-2/3 2xl:w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                    placeholder='Ecrivez un commentaire !'
                                />
                                <button type='submit' className='hidden'></button>
                            </form>
                            <div className='h-auto mx-auto mt-2 border-2 border-gray-200 shadow rounded' style={{ width: '95%' }}>
                                <div className='w-full h-auto'>
                                    {comments.map((elem) => {
                                        return <Comments elem={elem} Reload={Reload} />
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    const StudSkeleton = ({ elem }) => {
        const [loadComment, setLoadComment] = useState(false)
        const [comments, setComments] = useState([])
        const [payload, setPayload] = useState('')
        const [refresh, setRefresh] = useState(0)
        const user = useSelector((state) => state.AuthReducer.user)

        const Reload = () => {
            setRefresh(refresh + 1)
        }

        useEffect(() => {
            if (loadComment) {
                Axios(constants.url + '/api/commentaire/get/comments/' + elem.id_poste)
                    .then((res) => {
                        setComments(res.data)
                    })
                    .catch((err) => {
                        setComments([])
                    })
            }
        }, [loadComment, refresh])

        const handleComment = (e) => {
            e.preventDefault()
            Axios.post(constants.url + '/api/commentaire/add/comments/', {
                id_user: user.id,
                id_poste: elem.id_poste,
                payload,
            })
                .then((res) => {
                    Reload()
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        return (
            <div id={elem.id_poste} className='w-120 2xl:w-144 h-auto bg-gray-100 shadow-2xl mx-auto rounded-lg mb-20'>
                <div
                    onClick={() => {
                        console.log('kifach')
                    }}
                    className='h-1/4 shadow-xl rounded-xl cursor-pointer
                        bg-gradient-to-r from-green-600 to-green-400'>
                    <div className='grid grid-cols-5'>
                        <div className='mx-auto my-3 border-2 border-gray-100 rounded-full shadow-xl'>
                            <Avatar alt='Remy Sharp' src={elem.avatar} style={{ width: '2.5rem', height: '2.5rem' }} />
                        </div>
                        <div className='col-span-3 flex'>
                            <div className='mt-3'>
                                <p className='text-gray-200 text-sm'>{elem.nom.capitalize() + ' ' + elem.prenom.capitalize()}</p>
                                <p className='text-gray-100 text-sm'>Etudiant</p>
                            </div>
                        </div>
                        {elem.id_user === user.id && (
                            <div className='flex flex-row-reverse'>
                                <div className='mt-5 mr-4'>
                                    <Options elem={elem} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='h-auto'>
                    <div className='h-auto'>
                        <div className='mt-2 text-center'>
                            <p className='text-gray-500 text-sm'>{moment(elem.date_poste).format('DD - MM - YYYY HH:mm') + ' h'}</p>
                        </div>
                        <div className='mt-10 mb-10 px-10 text-left'>
                            <p className='text-gray-600 text-base'>{elem.payload}</p>
                        </div>
                    </div>
                    <div className='text-gray-600 border-t-2 border-gray-400'>
                        <div className='mt-4 flex justify-start h-10'>
                            <div onClick={() => setLoadComment(!loadComment)} className='inline-block mx-4 cursor-pointer'>
                                <FaComments className='inline' />
                                <p className='text-gray-500 text-sm inline ml-3'>Commenter</p>
                            </div>
                            <div className='inline-block mx-4 cursor-pointer'>
                                <HiShare className='inline' />
                                <p className='text-gray-500 text-sm inline ml-3'>Partager</p>
                            </div>
                        </div>
                    </div>
                    {loadComment && (
                        <div className='w-full h-auto bg-gray-100 shadow rounded'>
                            <form className='w-full' onSubmit={handleComment}>
                                <input
                                    type='text'
                                    required={true}
                                    onChange={(e) => setPayload(e.target.value)}
                                    className='focus:ring-indigo-500focus:border-indigo-500 block w-full lg:w-2/3 2xl:w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                    placeholder='Ecrivez un commentaire !'
                                />
                                <button type='submit' className='hidden'></button>
                            </form>
                            <div className='h-auto mx-auto mt-2 border-2 border-gray-200 shadow rounded' style={{ width: '95%' }}>
                                <div className='w-full h-auto'>
                                    {comments.map((elem) => {
                                        return <Comments elem={elem} Reload={Reload} />
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div>
            {publications.map((elem) => {
                return <StudSkeleton elem={elem} />
            })}
        </div>
    )
}
