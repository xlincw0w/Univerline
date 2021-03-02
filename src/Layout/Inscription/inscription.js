import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }))

export default function Inscription() {
    // const classes = useStyles()
    return (
        <div className='min-h-screen flex items-center justify-center bg-blue-200'>
            {/* <div className='bg-white p-8 rounded shadow-2xl grid grid-rows-2 grid-flow-col'>
                <div className='row-span-2 bg-green-300'>
                    <h1 className=''>logo </h1>
                </div>
                <div className='row-span-2 col-span-2 '>
                    <h1 className='flex justify-center'> Login </h1>

                    <form className={classes.root} noValidate autoComplete='off'>
                        <div className='flex flex-col'>
                            <div className='p-8'>
                                <TextField id='E-mail' label='E-mail' />
                            </div>
                            <div className='p-8'>
                                <TextField id='standard-password-input' label='Password' type='password' autoComplete='current-password' />

                                <div class='flex items-center justify-between'></div>
                                <button class='bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded' type='button'>
                                    Sign In
                                </button>

                                <a className='inline-block underline font-bold text-sm text-blue-400 hover:text-blue-gray-800' href='#'>
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    )
}