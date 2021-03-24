import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FiFolderPlus } from 'react-icons/fi'

// import Emoticons from 'react-native-emoticons'

export default function champ() {
    // const fileInput = useRef(null)

    // const [file, setFile] = useState(null)

    return (
        <div className=' flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-1'>
            <div className='flex flex-row items-center h-16 rounded-xl bg-white w-full h-full px-4'>
                <div>
                    {/* select files */}

                    <FiFolderPlus
                        onClick={() => fileInput.current.click()}
                        size={22}
                        className='flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer'
                    />
                    {/* <input
                        type='file'
                        className='hidden'
                        ref={fileInput}
                        onChange={(e) => {
                            setFile(e.target.file[0])
                        }}
                    /> */}
                </div>
                <div className='flex-grow ml-4'>
                    <div className='relative w-full'>
                        {/* champs de saisi */}

                        <textarea type='text' className='block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md mx-auto' placeholder='Votre message' />
                        {/* émoticones */}
                        {/* <button className='absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600'> */}
                        {/* <Emoticons
                             onEmoticonPress={this._onEmoticonPress.bind(this)}
                             onBackspacePress={this._onBackspacePress.bind(this)}
                             show={this.state.showEmoticons}
                            concise={true}
                            showHistoryBar={true}
                            showPlusBar={true}
                        /> */}
                    </div>
                </div>

                <div className='ml-4'>
                    {/*<button className='flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0'>
                        <span>Send</span>
                        <span className='ml-2'>
                            <svg className='w-4 h-4 transform rotate-45 -mt-px' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'></path>
                            </svg>
                        </span>
                     </button> */}
                    <Button
                        className='flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0'
                        variant='contained'
                        color='primary'>
                        Envoyer
                    </Button>
                </div>
            </div>
        </div>
    )
}
