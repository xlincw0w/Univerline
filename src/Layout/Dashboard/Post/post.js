import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { FiFolderPlus } from 'react-icons/fi'

const Post = () => {
    const classes = [
        {
            value: 0,
            label: "Ingénieurie system d'information",
        },
        {
            value: 1,
            label: 'Conduite de projet informatique',
        },
        {
            value: 2,
            label: 'Droit informatique',
        },
    ]

    return (
        <div className='w-full mx-auto shadow-xl rounded border-indigo-900 border-opacity-60'>
            <div className='border-b-2 border-gray-200'>
                <TextField className='w-full h-full' label='Exprimez-vous !' multiline rows={4} variant='outlined' />
            </div>
            <div className='pt-2'>
                <div className='grid grid-cols-4 rounded-xl shadow-xl mt-2 mx-auto'>
                    <div className='col-span-1 w-full flex'>
                        <div className='mt-3 ml-2'>
                            <HiOutlinePhotograph size={25} className='m-auto mt-1 inline-block mr-1 ml-2 cursor-pointer' />
                            <FiFolderPlus size={22} className='m-auto mt-1 inline-block mx-1 cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex col-span-3'>
                        <div className='my-auto w-full flex justify-end'>
                            <TextField
                                select
                                className='inline-block w-32'
                                label='Classe'
                                value={classes}
                                onChange={() => {
                                    console.log('')
                                }}
                                style={{ marginTop: '0.3rem' }}>
                                {classes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button className='shadow-xl inline-block w-40' variant='contained' color='primary' style={{ marginTop: '0rem', marginLeft: '0.6rem' }}>
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
