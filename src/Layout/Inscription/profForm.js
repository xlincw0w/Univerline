import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'
import cx from 'classnames';
import image2 from './imageCo.jpg';


const ProfForm = ({ tools }) => {

    return (

        <div className=" fadein " style={{ 'display': tools.showFormProf ? 'block' : 'none' }} >
            <div className="mt-10  ml-12  mr-12 bg-white h-full p-6 shadow-2xl">
                <div className="flex content-center justify-center mb-4">
                    <p> Cher Professeur</p>
                </div>
                <div className="grid grid-cols-2">
                    <div style={{'marginRight':'auto', 'marginLeft':'auto'}}>
                    <img className="object-cover" src={image2}  atl="iage" />
                    </div>   
                                        
                
    
                    <div className="px-10 flex content-center justify-center ">
                        <div>
                                <div>
                                    <p className="flex content-center justify-center">Merci de bien vouloir remplir ce formulaire</p>
                                </div>
                            <div className="mb-2">
                                <label className="block text-gray-900 mb-2">Nom</label>
                                <input type="text"  onChange={e => tools.setSecond(e.target.value)}   className="border border-gray-600 placeholder-gray-500 placeholder-opacity-50  bg-white focus:placeholder-gray-400 rounded-lg pl-2 text-grey-700 w-96" />
                                <label style={{ width: '50px' }} className={cx('ml-3 text-red-600', { 'invisible': tools.second.length === 0 || constants.alph_rg.test(tools.second) })}>✘</label>
                            </div>

                            <div className="mb-2" >
                                <label className="block text-gray-900 mb-2">Prenom</label>
                                <input type="text" onChange={e => tools.setFirst(e.target.value)}  className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-96 rounded-lg " />
                                <label style={{ width: '50px' }} className={cx('ml-3 f4 text-red-600', { 'invisible': tools.first.length === 0 || constants.alph_rg.test(tools.first) })}>✘</label>
                            </div>
                            <div className="mb-2" >
                                <label className="block text-gray-900 mb-2">Email</label>
                                <input type="email" onChange={e => tools.setEmail(e.target.value)}    className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-96 rounded-lg " />
                                <label style={{ width: '50px' }} className={cx('ml-3 f4 text-red-600', { 'invisible': tools.email.length === 0 || constants.email_rg.test(tools.email) })}>✘</label>
                            </div>
                            <div className="mb-2" >
                                <label className="block text-gray-900 mb-2">Université</label>
                                <input type="text" onChange={e => tools.setUniversity(e.target.value)}  className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-96 rounded-lg " />
                                <label style={{ width: '50px' }} className={cx('ml-3 text-red-600', { 'invisible': tools.university.length === 0 || constants.alph_rg.test(tools.university) })}>✘</label>
                            </div>
                            <div className="mb-2" >
                                <label className="block text-gray-900 mb-2">Domine</label>
                                <input type="text"  onChange={e => tools.setDomain(e.target.value)}   className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-96 rounded-lg " />
                                <label style={{ width: '50px' }} className={cx('ml-3 text-red-600', { 'invisible':  tools.domain.length === 0 || constants.alph_rg.test(tools.domain) })}>✘</label>
                            </div>

                            <div className="mt-2">
                            <button   type="submit" onClick={() => tools.FormProfHandler()} className=" bg-blue-500 text-white px-4 py-2 roundedtext-white hover:text-red-500 w-96 ">Continuer</button>
                            </div>
                        </div>    
                    </div>
             </div>
             </div>


       </div>  
    
    )
}

export default ProfForm


/*

    <div className="fadein" style={{ 'display': tools.showFormProf ? 'block' : 'none' }}>
            <div style={{ 'height': '200px' }}></div>
            <p className="text-black disable-select" style={{ 'fontSize': '2rem' }}>Cher <span className="orange ml2">Professeur</span></p>
            <p className="text-black disable-select" style={{ 'fontSize': '2rem' }}>Merci de bien vouloir remplir ce formulaire</p>
            <div className="mt-10">
                <div>
                    <div className="mb-8">
                        <label className="text-gray-900 mr-8"><span className="disable-select mr-4  orange">❖</span>Nom</label>
                        <input style={{marginRight:'0px'}}  onChange={e => tools.setSecond(e.target.value)}  className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-80 rounded-lg " type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml-3 f4 red dib trans', { 'hide': constants.alph_rg.test(tools.second) })}>✘</label>
                    </div>
                    <div className="mb-8">
                        <label className="text-gray-900 mr-8"><span className="disable-select mr-4 orange">❖</span>Prenom</label>
                        <input onChange={e => tools.setFirst(e.target.value)} className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-80 rounded-lg " type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml-3 f4 red dib trans', { 'hide': constants.alph_rg.test(tools.first) })}>✘</label>
                    </div>
                    <div className="mb-8">
                        <label className="text-gray-900 mr-8"><span className="disable-select mr-4 orange">❖</span>Email</label>
                        <input onChange={e => tools.setEmail(e.target.value)} className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-80 rounded-lg "  type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml-3 f4 red dib trans', { 'hide': tools.email.length === 0 || constants.email_rg.test(tools.email) })}>✘</label>
                    </div>
                    <div className="mb-8">
                        <label className="text-gray-900 mr-8"><span className="disable-select mr-4 orange">❖</span>Université</label>
                        <input onChange={e => tools.setUniversity(e.target.value)} className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-80 rounded-lg " type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml-3 f4 red dib trans', { 'hide': constants.alphanum_rg.test(tools.university) })}>✘</label>
                    </div>
                    <div className="mb-8">
                        <label className="text-gray-900 mr-8"><span className="disable-select mr-4 orange">❖</span>Domaine</label>
                        <input style={{ height: '42px' }}  onChange={e => tools.setDomain(e.target.value)} className="border border-gray-600 shadow-inner bg-white focus:shadow-outline pl-3 text-grey-700 w-80 rounded-lg "type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml-3 f4 red dib trans', { 'hide': constants.alph_rg.test(tools.domain) })}>✘</label>
                    </div>
                </div>
                <div className="mt5">
                    <Link to="#" className="NaisesButton br3 shadow-4 disable-select" onClick={() => tools.FormProfHandler()}>Continuer</Link>
                </div>
            </div>
        </div>

*/ 