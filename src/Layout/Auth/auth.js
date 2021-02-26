import React from 'react'
import image from './imageCo.jpg';
import Button from '@material-ui/core/Button';

export default function Auth() {



    return (
       
        <div className="mt-40 ml-12  mr-12 bg-white h-screen p-6 shadow-2xl grid grid-cols-2">
                
                <div  >
                <img className="w-full h-96 object-cover" src={image}  atl="iage" />
                </div> 
                <div className="my-8" >

                    
                            
                                    <div className="flex content-center justify-center mb-10" >
                                        <p className="no-underline hover:underline">Connexion</p>
                                    </div>

                                <div className="my-8 ml-10">
                                        <div className="mb-8">
                                            <label className="block text-gray-900 mb-2">Email</label>
                                            <input type="text" placeholder="test@gmail.com" className="border border-gray-600 placeholder-gray-500 placeholder-opacity-50  bg-white focus:placeholder-gray-400 rounded-lg pl-3 text-grey-700 w-full" />
                                        </div>

                                        <div className="mb-8" >
                                            <label className="block text-gray-900 mb-2">Password</label>
                                            <input type="password"  className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-full rounded-lg " />
                                        </div>
                                
                                        <div className="my-2">
                                            <p className="hover:text-blue-700 text-sm">mot de passe oublié ?</p>
                                        </div>

                                        <div className="mt-5">
                                        <button   type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded hover: bg-blue-900 w-full ">Se connecter</button>
                                        </div>
                                    </div>


                    
                </div>  
        
   
   

       </div>
    )

}
