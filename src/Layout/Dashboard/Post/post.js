import React, { useState, useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { FiFolderPlus } from 'react-icons/fi'
import { BsFileEarmarkCheck } from 'react-icons/bs'
import { RiCloseCircleLine } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { constants } from '../../../constants'
import { FeedLoading, RefreshFeed } from '../../../store/feed/feed'
import firebase from 'firebase'
import { v4 } from 'uuid'

const Post = () => {
    const dispatch = useDispatch()
    const imageInput = useRef(null)
    const fileInput = useRef(null)

    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    const [payload, setPayload] = useState('')
    const user = useSelector((state) => state.AuthReducer.user)
    const classes = useSelector((state) => state.AuthReducer.classes)

    const [imgUploaded, setImgUploaded] = useState(false)
    const [fileUploaded, setFileUploaded] = useState(false)

    const [classvalue, setClass] = useState({ id_classe: 'collegue', libelle_classe: 'Collégues' })

    const storageRef = firebase.storage().ref()

    const handlePost = () => {
        dispatch(FeedLoading(true))

        if (payload.length !== 0) {
            const imagev4 = v4().split('-').join('')
            const filev4 = v4().split('-').join('')

            let imageExt = null
            let fileExt = null

            if (image) {
                const imageArray = image.name.split('.')
                imageExt = imageArray[imageArray.length - 1]

                storageRef
                    .child(imagev4 + '.' + imageExt)
                    .put(image)
                    .then((snap) => {})
                    .catch((err) => {
                        console.log('upload failed')
                    })
            }

            if (file) {
                const fileArray = file.name.split('.')
                fileExt = fileArray[fileArray.length - 1]

                storageRef
                    .child(filev4 + '.' + fileExt)
                    .put(file)
                    .then((snap) => {})
                    .catch((err) => {
                        console.log('upload failed')
                    })
            }

            if (user.user_type === 'etudiant') {
                Axios.post(constants.url + '/api/post/add/post/', {
                    id_classe: '#####',
                    id_user: user.id,
                    image: image ? imagev4 + '.' + imageExt : null,
                    file: file ? filev4 + '.' + fileExt : null,
                    payload,
                })
                    .then((res) => {
                        dispatch(FeedLoading(false))
                        if (res.data.AJOUT) {
                            dispatch(RefreshFeed())

                            setImgUploaded(false)
                            setFileUploaded(false)
                            setImage(null)
                            setFile(null)
                        } else {
                            console.log('not added')

                            setImgUploaded(false)
                            setFileUploaded(false)
                            setImage(null)
                            setFile(null)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        dispatch(FeedLoading(false))

                        setImgUploaded(false)
                        setFileUploaded(false)
                        setImage(null)
                        setFile(null)
                    })
            } else if (user.user_type === 'enseignant') {
                Axios.post(constants.url + '/api/post/add/post/', {
                    id_classe: classvalue.id_classe === 'collegue' ? '#####' : classvalue.id_classe,
                    id_user: classvalue.id_classe === 'collegue' ? user.id : '&&&&&',
                    image: image ? imagev4 + '.' + imageExt : null,
                    file: file ? filev4 + '.' + fileExt : null,
                    payload,
                })
                    .then((res) => {
                        dispatch(FeedLoading(false))
                        if (res.data.AJOUT) {
                            dispatch(RefreshFeed())

                            setImgUploaded(false)
                            setFileUploaded(false)
                            setImage(null)
                            setFile(null)
                        } else {
                            console.log('not added')

                            setImgUploaded(false)
                            setFileUploaded(false)
                            setImage(null)
                            setFile(null)
                        }
                    })
                    .catch((err) => {
                        dispatch(FeedLoading(false))

                        setImgUploaded(false)
                        setFileUploaded(false)
                        setImage(null)
                        setFile(null)
                        console.log(err)
                    })
            }
        } else {
            dispatch(FeedLoading(false))
        }
    }

    return (
        <div className='w-full mx-auto shadow-xl bg-gray-100 rounded border-indigo-900 border-opacity-60 mt-6'>
            <div className=''>
                <textarea
                    type='text'
                    className='block w-full h-28 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto'
                    placeholder='Exprimez vous !'
                    onChange={(e) => {
                        setPayload(e.target.value)
                    }}
                />
            </div>
            {imgUploaded && (
                <div className='w-full bg-gray-600'>
                    <div className='ml-3 py-2 text-center'>
                        <img src={URL.createObjectURL(image)} className='w-32 h-32 mx-auto' />
                        <div className='ml-2 my-1'>
                            <p className='text-gray-100 text-base inline'>{image.name}</p>
                            <RiCloseCircleLine
                                onClick={() => {
                                    setImgUploaded(false)
                                    setImage(null)
                                }}
                                size={30}
                                className='text-gray-200 inline ml-2 duration-300 hover:text-red-300 cursor-pointer'
                            />
                        </div>
                    </div>
                </div>
            )}
            {fileUploaded && (
                <div className='w-full bg-gray-600'>
                    <div className='ml-3 py-2'>
                        <div className='ml-2 my-1 text-center'>
                            <BsFileEarmarkCheck size={23} className='text-gray-100 inline' />
                            <p className='text-gray-100 text-base'>{file.name}</p>
                            <RiCloseCircleLine
                                onClick={() => {
                                    setFileUploaded(false)
                                    setFile(null)
                                }}
                                size={30}
                                className='text-gray-200 inline ml-2 duration-300 hover:text-red-300 cursor-pointer'
                            />
                        </div>
                    </div>
                </div>
            )}
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
                                    setImage(e.target.files[0])
                                    setImgUploaded(true)
                                }}
                            />
                            <FiFolderPlus onClick={() => fileInput.current.click()} size={22} className='m-auto mt-1 inline-block mx-1 cursor-pointer' />
                            <input
                                type='file'
                                className='hidden'
                                ref={fileInput}
                                onChange={(e) => {
                                    setFile(e.target.files[0])
                                    setFileUploaded(true)
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
