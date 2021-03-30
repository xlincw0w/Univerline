import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { constants } from '../../constants'
import { SetPublications } from '../../store/profile/profile'
import { FaComments } from 'react-icons/fa'
import { HiShare } from 'react-icons/hi'
import Comments from '../Dashboard/Feed/comments'
import { useHistory } from 'react-router-dom'
import Options from '../Dashboard/Feed/options/options'
import Avatar from '@material-ui/core/Avatar'
import moment from 'moment'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useParams } from 'react-router-dom'
import firebase from 'firebase'
import { BsFileEarmarkCheck } from 'react-icons/bs'
import { Container, Grid } from '@material-ui/core'

export default function Publications() {
    const dispatch = useDispatch()
    const user_info = useSelector((state) => state.ProfileReducer.user_info)
    const publications = useSelector((state) => state.ProfileReducer.publications)
    const refresh = useSelector((state) => state.FeedReducer.refresh)
    const user = useSelector((state) => state.AuthReducer.user)

    const storageRef = firebase.storage().ref()

    useEffect(async () => {
        if (user_info.id_user && user.id) {
            if (user_info.user_type === 'etudiant') {
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
                } else {
                    dispatch(SetPublications([]))
                }
            } else if (user_info.user_type === 'enseignant') {
                const res = await Axios.post(constants.url + '/api/collegue/isFriend/ens', {
                    id_user: user.id,
                    id_collegue: user_info.id_user,
                })

                if (res.data.friend || user_info.id_user === user.id) {
                    Axios.get(constants.url + '/api/post/get/post_collegue/' + user_info.id_user)
                        .then((res) => {
                            dispatch(SetPublications(res.data))
                        })
                        .catch((err) => {
                            dispatch(SetPublications([]))
                        })
                } else {
                    dispatch(SetPublications([]))
                }
            } else {
                dispatch(SetPublications([]))
            }
        }
    }, [user_info.id_user, user.id, refresh])

    const ProfSkeleton = ({ elem }) => {
        const [loadComment, setLoadComment] = useState(false)

        const [comments, setComments] = useState([])
        const [payload, setPayload] = useState('')
        const [refresh, setRefresh] = useState(0)
        const [backdrop, setBackdrop] = useState(false)

        const [image, setImage] = useState(null)
        const [file, setFile] = useState(null)

        const Reload = () => {
            setRefresh(refresh + 1)
        }

        useEffect(() => {
            if (elem.image) {
                storageRef
                    .child(elem.image)
                    .getDownloadURL()
                    .then((url) => setImage(url))
                    .catch((err) => {
                        console.log(err)
                    })
            }
            if (elem.file) {
                storageRef
                    .child(elem.file)
                    .getDownloadURL()
                    .then((url) => setFile(url))
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }, [])

        useEffect(() => {
            setBackdrop(true)
            if (loadComment) {
                Axios(constants.url + '/api/commentaire/get/comments/' + elem.id_poste)
                    .then((res) => {
                        setComments(res.data)
                        setBackdrop(false)
                    })
                    .catch((err) => {
                        setComments([])
                        setBackdrop(false)
                    })
            } else {
                setBackdrop(false)
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
                    setBackdrop(false)
                })
                .catch((err) => {
                    setBackdrop(false)
                    console.log(err)
                })
        }

        return (
            <div key={elem.id_poste} className='bg-gray-100 shadow-2xl rounded-lg mb-20'>
                <div className='bg-gradient-to-r from-purple-500 to-purple-700 shadow-xl rounded-xl'>
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
                <div>
                    <div>
                        <div className='mt-2 text-center'>
                            <p className='text-gray-500 text-sm'>{moment(elem.date_poste).format('DD - MM - YYYY HH:mm') + ' h'}</p>
                            <p className='text-gray-500 text-sm'>{elem.libelle_classe || 'Collégues'}</p>
                        </div>
                        <div className='mt-10 mb-10 px-10 text-left'>
                            <p className='text-gray-600 text-base break-words'>{elem.payload}</p>
                            {image && (
                                <div className='my-2'>
                                    <img className='w-62 h-62 mx-auto' src={image} />
                                </div>
                            )}
                            {file && (
                                <div className='mb-2 mt-4'>
                                    <div className='ml-2 my-1 text-center'>
                                        <a href={file} target='_blank' download>
                                            <BsFileEarmarkCheck size={30} className='text-gray-800 inline cursor-pointer duration-300 hover:text-green-500' />
                                            <p className='text-gray-500 inline ml-3'>.{file.split('?alt')[0].split('.')[5]}</p>
                                        </a>
                                    </div>
                                </div>
                            )}
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
                        <div className=' bg-gray-100 shadow rounded'>
                            <form className='w-full' onSubmit={handleComment}>
                                <input
                                    type='text'
                                    required={true}
                                    onChange={(e) => setPayload(e.target.value)}
                                    className='block w-full lg:w-2/3 2xl:w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                    placeholder='Ecrivez un commentaire !'
                                />
                                <button type='submit' className='hidden'></button>
                            </form>
                            <div className=' mx-auto mt-2 border-2 border-gray-200 shadow rounded' style={{ width: '95%' }}>
                                <Backdrop open={backdrop} style={{ display: 'contents' }}>
                                    {backdrop && (
                                        <div className='h-32 flex justify-center'>
                                            <div className='mt-10'>
                                                <CircularProgress color='inherit' />
                                            </div>
                                        </div>
                                    )}
                                </Backdrop>
                                <div>
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
        const [backdrop, setBackdrop] = useState(false)
        const user = useSelector((state) => state.AuthReducer.user)

        const [image, setImage] = useState(null)
        const [file, setFile] = useState(null)

        const Reload = () => {
            setRefresh(refresh + 1)
        }

        useEffect(() => {
            if (elem.image) {
                storageRef
                    .child(elem.image)
                    .getDownloadURL()
                    .then((url) => setImage(url))
                    .catch((err) => {
                        console.log(err)
                    })
            }
            if (elem.file) {
                storageRef
                    .child(elem.file)
                    .getDownloadURL()
                    .then((url) => setFile(url))
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }, [])

        useEffect(() => {
            setBackdrop(true)
            if (loadComment) {
                Axios(constants.url + '/api/commentaire/get/comments/' + elem.id_poste)
                    .then((res) => {
                        setBackdrop(false)
                        setComments(res.data)
                    })
                    .catch((err) => {
                        setBackdrop(true)
                        setComments([])
                    })
            }
        }, [loadComment, refresh])

        const handleComment = (e) => {
            e.preventDefault()
            setBackdrop(true)
            Axios.post(constants.url + '/api/commentaire/add/comments/', {
                id_user: user.id,
                id_poste: elem.id_poste,
                payload,
            })
                .then((res) => {
                    Reload()
                    setBackdrop(false)
                })
                .catch((err) => {
                    console.log(err)
                    setBackdrop(false)
                })
        }

        return (
<<<<<<< HEAD
            <div key={elem.id_poste} className='w-100 2xl:w-144 h-auto bg-gray-100 shadow-2xl mx-auto rounded-lg mb-20'>
=======
            <div key={elem.id_poste} className='bg-gray-100 shadow-2xl rounded-lg mb-20'>
>>>>>>> FETCH_HEAD
                <div
                    className='shadow-xl rounded-xl cursor-pointer
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
                                <div className='mt-5'>
                                    <Options elem={elem} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div>
                        <div className='mt-2 text-center'>
                            <p className='text-gray-500 text-sm'>{moment(elem.date_poste).format('DD - MM - YYYY HH:mm') + ' h'}</p>
                        </div>
                        <div className='mt-10 mb-10 px-10 text-left'>
                            <p className='text-gray-600 text-base break-words'>{elem.payload}</p>
                            {image && (
                                <div className='my-2'>
                                    <img className='w-62 h-62 mx-auto' src={image} />
                                </div>
                            )}
                            {file && (
                                <div className='mb-2 mt-4'>
                                    <div className='ml-2 my-1 text-center'>
                                        <a href={file} target='_blank' download>
                                            <BsFileEarmarkCheck size={30} className='text-gray-800 inline cursor-pointer duration-300 hover:text-green-500' />
                                            <p className='text-gray-500 inline ml-3'>.{file.split('?alt')[0].split('.')[5]}</p>
                                        </a>
                                    </div>
                                </div>
                            )}
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
                        <div className=' bg-gray-100 shadow rounded'>
                            <form className='w-full' onSubmit={handleComment}>
                                <input
                                    type='text'
                                    required={true}
                                    onChange={(e) => setPayload(e.target.value)}
                                    className='block w-full lg:w-2/3 2xl:w-1/2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                                    placeholder='Ecrivez un commentaire !'
                                />
                                <button type='submit' className='hidden'></button>
                            </form>
                            <div className=' mx-auto mt-2 border-2 border-gray-200 shadow rounded' style={{ width: '95%' }}>
                                <Backdrop open={backdrop} style={{ display: 'contents' }}>
                                    {backdrop && (
                                        <div className='h-32 flex justify-center'>
                                            <div className='mt-10'>
                                                <CircularProgress color='inherit' />
                                            </div>
                                        </div>
                                    )}
                                </Backdrop>
                                <div>
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
        <Container maxWidth='lg'>
            <Grid container spacing={3}>
                {user_info.user_type === 'etudiant' &&
                    publications.map((elem, index) => {
                        if (index % 2 === 0) {
<<<<<<< HEAD
                            return <StudSkeleton key={elem.id_poste} elem={elem} />
=======
                            return (
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <StudSkeleton elem={elem} />
                                </Grid>
                            )
>>>>>>> FETCH_HEAD
                        }
                    })}
                {user_info.user_type === 'enseignant' &&
                    publications.map((elem, index) => {
                        if (index % 2 === 0) {
<<<<<<< HEAD
                            return <ProfSkeleton key={elem.id_poste} elem={elem} />
=======
                            return (
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <ProfSkeleton elem={elem} />
                                </Grid>
                            )
>>>>>>> FETCH_HEAD
                        }
                    })}

                {user_info.user_type === 'etudiant' &&
                    publications.map((elem, index) => {
                        if (index % 2 === 1) {
<<<<<<< HEAD
                            return <StudSkeleton key={elem.id_poste} elem={elem} />
=======
                            return (
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <StudSkeleton elem={elem} />
                                </Grid>
                            )
>>>>>>> FETCH_HEAD
                        }
                    })}
                {user_info.user_type === 'enseignant' &&
                    publications.map((elem, index) => {
                        if (index % 2 === 1) {
<<<<<<< HEAD
                            return <ProfSkeleton key={elem.id_poste} elem={elem} />
=======
                            return (
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <ProfSkeleton elem={elem} />
                                </Grid>
                            )
>>>>>>> FETCH_HEAD
                        }
                    })}
            </Grid>
        </Container>
    )
}
