import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'
import cx from 'classnames'
import image from './imageCo.jpg';


const AuthInfo = ({ tools }) => {
    return (
        <div className="fadein h-full bg-blue-400 rounded-lg  p-6 shadow-2xl" style={{ 'display': tools.switchToAuthInfo ? 'block' : 'none' }}>
            
               
        
          {/* card white*/} 
        <div className=" bg-white shadow-2xl  rounded-lg mb-1  lg:h-screen sm:h-full">

                <div className="flex content-center justify-center mb-4 ">
                            <p className="text-black">Introduisez vos informations </p>
                </div>

            {/* j'ai divisé la card blanche en deux grid*/} 
                <div className="lg:grid grid-cols-2  sm:grid grid-rows-2">
                      {/* premier grid*/} 
                    <div className="lg:py-48 md:mx-auto lg:mx-auto ">
                        <div class="flex flex-wrap justify-center">

                            <div class="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
                            <button
                                class="w-full rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                type="button"
                            >Facebook</button>
                            </div>

                            <div class="w-full mb-3 sm:w-1/2 sm:pl-2">
                            <button
                                class="w-full rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                type="button"
                            > Google</button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center ">
                        <img className="object-cover " src={image}  atl="iage" />
                        </div>
                        <hr className="mt-8 border-t" />
                        <div className="text-center py-4">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Avez-vous dèjà un compte ?
								</a>
							</div>
                       </div>   
                                        
                
                          {/* deuxième grid*/} 
                    <div style={{'paddingTop':'9rem'}} className="flex content-center justify-center  ">
                        <div>
                               
                            <div className="mb-2 ml-3 mr-4">
                                <label className="block text-gray-900 mb-2">Identifiant</label>
                                <input type="text" onChange={e => tools.setUsername(e.target.value)}   className="w-full px-2 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                                <label style={{ width: '50px' }} className={cx('ml-3 text-red-600', { 'invisible': tools.username.length === 0 || constants.username_rg.test(tools.username) })}>Veuillez introduire que des caractéres </label>
                            </div>

                            <div className="mb-2 ml-3 mr-4" >
                                <label className="block text-gray-900 mb-2">Mot de passe</label>
                                <input type="text" onChange={e => tools.setPasswd(e.target.value)}className="w-full px-2 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                                <label style={{ width: '50px' }} className={cx('ml-3 f4 text-red-600', { 'invisible': tools.passwd.length === 0 || tools.passwd.length >= 8 })}>Veuillez introduire que Cractères</label>
                            </div>
                            <div className="mb-2 ml-3 mr-4" >
                                <label className="block text-gray-900 mb-2">Confirmation</label>
                                <input type="email"  onChange={e => tools.setPasswdConfirm(e.target.value)}   className="w-full px-2 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                                <label style={{ width: '50px' }} className={cx('ml-3 f4 text-red-600', { 'invisible': tools.email.length === 0 || constants.email_rg.test(tools.email) })}>test@....com</label>
                            </div>
                           

                            <div className="mb-4 mt2 ml-3 mr-4">
                            <button   type="submit" onClick={() => tools.AuthInfoHandler()} className=" w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">Continuer</button>
                            </div>
                        </div>    
                    </div>
              </div>
        
          </div> 
            

        </div>
    )
}

export default AuthInfo


