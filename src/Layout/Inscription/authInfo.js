import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'
import cx from 'classnames'
import image2 from './imageCo.jpg';


const AuthInfo = ({ tools }) => {
    return (
        <div className="fadein" style={{ 'display': tools.switchToAuthInfo ? 'block' : 'none' }}>
              <div className="mt-10  ml-12  mr-12 bg-white h-full p-6 shadow-2xl">
                  <div className="flex content-center justify-center">
                  <p className="text-black disable-select" style={{ 'fontSize': '2rem' }}>Introduisez vos informations d'<span className="orange">authentification</span></p> 
                  </div>
                  <div className= "grid grid-cols-2">
                       <div>
                       <img className="h-full object-cover" src={image2}  atl="iage" />
                       </div>
                         <div className="mx-10 flex content-center justify-center">
                             <div>
                             <div className="mb-2">
                                <label className="block text-gray-900 mb-2">Identifiant</label>
                                <input type="text"  onChange={e => tools.setUsername(e.target.value)}   className="border border-gray-600 placeholder-gray-500 placeholder-opacity-50  bg-white focus:placeholder-gray-400 rounded-lg pl-2 text-grey-700 w-96" />
                                <label style={{ width: '50px' }} className={cx('ml-3 text-red-600',{ 'invisible': tools.username.length === 0 || constants.username_rg.test(tools.username) })}>✘</label>
                            </div>

                            <div className="mb-2" >
                                <label className="block text-gray-900 mb-2">Mot de passe</label>
                                <input type="password" onChange={e => tools.setFirst(e.target.value)}  className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-96 rounded-lg " />
                                <label style={{ width: '50px' }} className={cx('ml-3 f4 text-red-600',  { 'invisible': tools.passwd.length === 0 || tools.passwd.length >= 8 })}>✘</label>
                            </div>
                            <div className="mb-2" >
                                <label className="block text-gray-900 mb-2">Confirmer mot de passe</label>
                                <input type="password" onChange={e => tools.setPasswdConfirm(e.target.value)}   className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-96 rounded-lg " />
                                <label style={{ width: '50px' }} className={cx('ml-3 f4 text-red-600', { 'invisible': tools.passwd_confirm.length === 0 || tools.passwd === tools.passwd_confirm })}>✘</label>
                            </div>
                            <div className="mt-2">
                                <button   type="submit" onClick={() => tools.AuthInfoHandler()} className=" bg-blue-500 text-white px-4 py-2 roundedtext-white hover:text-red-500 w-96 ">Adhérer</button>
                            </div>
                             </div>
                           
                        </div>
                    </div>    
                </div>        
        </div>
    )
}

export default AuthInfo


/*

 <div>
                                <div>
                                    <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Identifiant</label>
                                    <input style={{ height: '42px' }} onChange={e => tools.setUsername(e.target.value)} className="ba b--black-20 pa2 mb2" type="text"></input>
                                    <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': tools.username.length === 0 || constants.username_rg.test(tools.username) })}>✘</label>
                                </div>
                                <div>
                                    <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Mot de passe</label>
                                    <input style={{ height: '42px' }} onChange={e => tools.setPasswd(e.target.value)} className="ba b--black-20 pa2 mb2" type="password"></input>
                                    <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': tools.passwd.length === 0 || tools.passwd.length >= 8 })}>faible</label>
                                </div>
                                <div>
                                    <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Confirmer mot de passe</label>
                                    <input style={{ height: '42px' }} onChange={e => tools.setPasswdConfirm(e.target.value)} className="ba b--black-20 pa2 mb2" type="password"></input>
                                    <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': tools.passwd_confirm.length === 0 || tools.passwd === tools.passwd_confirm })}>✘</label>
                                </div>
                            </div>
                            <div className="mt5">
                                <Link to="#" className="NaisesButton br3 shadow-4 disable-select" onClick={() => tools.AuthInfoHandler()}>Adhérer</Link>
                            </div>

*/