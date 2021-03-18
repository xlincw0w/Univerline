import React, { useState, useRef, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { FiFolderPlus } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { constants } from '../../../constants'
import { FeedLoading, RefreshFeed } from '../../../store/feed/feed'

const Post = () => {
    const dispatch = useDispatch()
    const imageInput = useRef(null)
    const fileInput = useRef(null)

    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    const [payload, setPayload] = useState('')
    const user = useSelector((state) => state.AuthReducer.user)
    const classes = useSelector((state) => state.AuthReducer.classes)

    const [classvalue, setClass] = useState({ id_classe: 'collegue', libelle_classe: 'Collégues' })

    const handlePost = () => {
        if (user.user_type === 'etudiant') {
            dispatch(FeedLoading(true))
            Axios.post(constants.url + '/api/post/add/post/', {
                id_classe: '#####',
                id_user: user.id,
                payload,
            })
                .then((res) => {
                    dispatch(FeedLoading(false))
                    if (res.data.AJOUT) {
                        dispatch(RefreshFeed())
                    } else {
                        console.log('not added')
                    }
                })
                .catch((err) => {
                    console.log(err)
                    dispatch(FeedLoading(false))
                })
        } else if (user.user_type === 'enseignant') {
            dispatch(FeedLoading(true))
            Axios.post(constants.url + '/api/post/add/post/', {
                id_classe: classvalue.id_classe === 'collegue' ? '#####' : classvalue.id_classe,
                id_user: classvalue.id_classe === 'collegue' ? user.id : '&&&&&',
                payload,
            })
                .then((res) => {
                    dispatch(FeedLoading(false))
                    if (res.data.AJOUT) {
                        dispatch(RefreshFeed())
                    } else {
                        console.log('not added')
                    }
                })
                .catch((err) => {
                    dispatch(FeedLoading(false))
                    console.log(err)
                })
        }
    }

    return (
        <div className='w-full mx-auto shadow-xl bg-gray-100 rounded border-indigo-900 border-opacity-60 mt-6'>
            <div className=''>
                <textarea
                    type='text'
                    className='focus:ring-indigo-500 focus:border-indigo-500 block w-full h-28 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                    placeholder='Exprimez vous !'
                    onChange={(e) => {
                        setPayload(e.target.value)
                    }}
                />
            </div>
            <div className=''>
                <div className='grid grid-cols-4 rounded-xl shadow-xl mx-auto'>
                    <div className='col-span-1 w-full flex'>
                        <div className='mt-3 ml-2'>
                            <HiOutlinePhotograph onClick={() => imageInput.current.click()} size={25} className='m-auto mt-1 inline-block mr-1 ml-2 cursor-pointer' />
                            <input
                                type='file'
                                accept='image/png, image/jpeg'
                                className='hidden'
                                ref={imageInput}
                                onChange={(e) => {
                                    setImage(e.target.file[0])
                                }}
                            />
                            <FiFolderPlus onClick={() => fileInput.current.click()} size={22} className='m-auto mt-1 inline-block mx-1 cursor-pointer' />
                            <input
                                type='file'
                                className='hidden'
                                ref={fileInput}
                                onChange={(e) => {
                                    setFile(e.target.file[0])
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex col-span-3'>
                        <div className='my-auto w-full flex justify-end'>
                            <div className='h-14'>
                                {user.user_type === 'enseignant' && (
                                    <TextField select className='inline-block w-32' label='Classe' value={classvalue.libelle_classe} style={{ marginTop: '0.3rem' }}>
                                        <MenuItem key={'collegue'} value={'Collégues'} onClick={() => setClass({ id_classe: 'collegue', libelle_classe: 'Collégues' })}>
                                            <p className='text-base text-purple-800'>Collégues</p>
                                        </MenuItem>
                                        {classes.map((option) => (
                                            <MenuItem
                                                key={option.id_classe}
                                                value={option.libelle_classe}
                                                onClick={() => {
                                                    setClass({ id_classe: option.id_classe, libelle_classe: option.libelle_classe })
                                                }}>
                                                {option.libelle_classe}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            </div>
                            <Button onClick={handlePost} className='shadow-xl inline-block w-40' variant='contained' color='primary'>
                                Publier
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
