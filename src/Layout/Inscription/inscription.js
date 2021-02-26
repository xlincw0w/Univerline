import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'
import image from './imageCo.jpg';

import StudForm from './studForm'
import ProfForm from './profForm'
import AuthInfo from './authInfo'


//import Axios from 'axios'
//import bcrypt from 'bcryptjs'

import './inscription.css'


const Inscription = () => {

    useEffect(() => {

    }, [])

    const [userType, setUserType] = useState('')

    // User 
    const [username, setUsername] = useState('')
    const [second, setSecond] = useState('')
    const [first, setFirst] = useState('')
    const [university, setUniversity] = useState('')
    const [email, setEmail] = useState('')
    const [domain, setDomain] = useState('')

    // Auth
    const [passwd, setPasswd] = useState('')
    const [passwd_confirm, setPasswdConfirm] = useState('')

    // Utilities
    const [showUserType, setShowUserType] = useState(true)
    const [showFormProf, setShowFormProf] = useState(false)
    const [showFormStud, setShowFormStud] = useState(false)
    const [switchToAuthInfo, setSwitchAuthInfo] = useState(false)
    const [switchToCon, setSwitchToCon] = useState(false)

    const FormTest = (type) => {
        if (type === 'enseignant') {
            if (second.length === 0) return { passed: false, error: 'length', target: 'second' }
            if (first.length === 0) return { passed: false, error: 'length', target: 'second' }
            if (email.length === 0) return { passed: false, error: 'length', target: 'second' }
            if (university.length === 0) return { passed: false, error: 'length', target: 'second' }
            if (domain.length === 0) return { passed: false, error: 'length', target: 'second' }

            if (!constants.alph_rg.test(second)) return { passed: false, error: 'invalid', target: 'second' }
            if (!constants.alph_rg.test(first)) return { passed: false, error: 'invalid', target: 'first' }
            if (!constants.email_rg.test(email)) return { passed: false, error: 'invalid', target: 'email' }
            if (!constants.alphanum_rg.test(university)) return { passed: false, error: 'invalid', target: 'university' }
            if (!constants.alph_rg.test(domain)) return { passed: false, error: 'invalid', target: 'domain' }
        }

        if (type === 'etudiant') {
            if (second.length === 0) return { passed: false, error: 'length', target: 'second' }
            if (first.length === 0) return { passed: false, error: 'length', target: 'second' }
            if (email.length === 0) return { passed: false, error: 'length', target: 'second' }
            if (university.length === 0) return { passed: false, error: 'length', target: 'second' }
            if (domain.length === 0) return { passed: false, error: 'length', target: 'second' }

            if (!constants.alph_rg.test(second)) return { passed: false, error: 'invalid', target: 'second' }
            if (!constants.alph_rg.test(first)) return { passed: false, error: 'invalid', target: 'first' }
            if (!constants.email_rg.test(email)) return { passed: false, error: 'invalid', target: 'email' }
            if (!constants.alphanum_rg.test(university)) return { passed: false, error: 'invalid', target: 'university' }
            if (!constants.alph_rg.test(domain)) return { passed: false, error: 'invalid', target: 'domain' }
        }

        return { passed: true }
    }

    const AuthTest = () => {
        if (username.length === 0) return { passed: false, error: 'length', target: 'username' }
        if (passwd.length === 0) return { passed: false, error: 'length', target: 'passwd' }
        if (passwd_confirm.length === 0) return { passed: false, error: 'length', target: 'passwd_confirm' }

        if (!constants.username_rg.test(username)) return { passed: false, error: 'invalid', target: 'username' }

        if (passwd.length < 8) return { passed: false, error: 'weak', target: 'passwd' }
        if (passwd_confirm.length < 8) return { passed: false, error: 'weak', target: 'passwd_confirm' }

        if (passwd !== passwd_confirm) return { passed: false, error: 'unmatched', target: 'passwd' }

        return { passed: true }
    }

    const ProfHandler = () => {
        setUserType('enseignant')
        setShowUserType(false)
        setShowFormProf(true)
    }

    const StudHandler = () => {
        setUserType('etudiant')
        setShowUserType(false)
        setShowFormStud(true)
    }

    const FormProfHandler = () => {
        const test = FormTest(userType)
        if (test.passed) {
            setShowFormProf(false)
            setSwitchAuthInfo(true)
        } else {
            alert('Assurez-vous de remplir le formulaire et ce avec des données correcte !')
        }
    }

    const FormStudHandler = () => {
        const test = FormTest(userType)
        if (test.passed) {
            setShowFormStud(false)
            setSwitchAuthInfo(true)
        } else {
            alert('Assurez-vous de remplir le formulaire et ce avec des données correcte !')
        }
    }

    const AuthInfoHandler = () => {
        const test = AuthTest()

        if (test.passed) {

            let salt = bcrypt.genSaltSync(3);
            let hashed_passwd = bcrypt.hashSync(passwd, salt);
            
            Axios.post(constants.url + '/signup/user', {
                first_user: first,
                second_user: second,
                username: username,
                email_user: email,
                university_user: university,
                domain_user: domain,
                type_user: userType,
                hashed_passwd: hashed_passwd,
            }).then(res => {
                if (!res.data.added) {
                    alert('Erreur')
                } else {
                    setSwitchAuthInfo(false)
                    setSwitchToCon(true)
                }
            })

        } else {
            alert('Assurez-vous de remplir le formulaire et ce avec des données correcte !')
        }
    }

    const WhoYouAre = () => {

        return (
            <div className="fadein" style={{ 'display': showUserType ? 'default' : 'none' }}>
              <div className="mt-10  ml-12  mr-12 bg-white h-full p-6 shadow-2xl"> 
                      <div style={{'height': '50px'}}></div>
                       <div className="grid grid-cols-2">

                           <div style={{'marginLeft':'auto','marginRight': 'auto'}} >
                              <img src={image} />
                           </div>
                           <div>
                               <div></div>
                                <p style={{'marginRight': '50px'}} className="text-black disable-select" style={{ 'fontSize': '3rem' }}>Etes vous un enseignant ou un etudiant ?</p>
                                <div className="mt-4 flex content-center justify-center" style={{'margin-right':'5rem'}}>
                                    <Link to="#" className="border .border-gray-300 bg-blue-500 hover:bg-blue-700 rounded-full py-2 px-4 text-white mr-2 px-10 " onClick={() => ProfHandler()}>Enseignant</Link>
                                    <Link to="#" className="border .border-gray-300 bg-blue-500 hover:bg-blue-700 rounded-full py-2 px-4 text-white  px-10" onClick={() => StudHandler()}>Etudiant</Link>
                                </div>
                            </div>    
                       </div>    
               </div>  
            </div> 
        )
    }

    const AccountCreated = () => {
        return (
            <div className="fadein" style={{ 'display': switchToCon ? 'default' : 'none' }}>
                <div style={{ 'height': '200px' }}></div>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Votre compte Naises a été crée avec succés !</p>
                <span className="disable-select mr2 orange" style={{ 'fontSize': '10rem' }}>❖</span>
                <div className="mt6">
                    <Link to="/connexion" className="NaisesButton br3 shadow-4 disable-select mh3">Connectez-vous</Link>
                </div>
            </div>
        )
    }

    const tools = {
        showFormStud,
        showFormProf,
        first,
        second,
        email,
        university,
        domain,
        username,
        passwd,
        passwd_confirm,
        setFirst,
        setSecond,
        setEmail,
        setUniversity,
        setDomain,
        setUsername,
        setPasswd,
        setPasswdConfirm,
        switchToAuthInfo,
        FormStudHandler,
        FormProfHandler,
        AuthInfoHandler,
    }

    return (
        <div className="tc" >

            <WhoYouAre />
            <StudForm tools={tools} />
            <ProfForm tools={tools} />
            <AuthInfo tools={tools} />
            <AccountCreated />

        </div>
    )
}

export default Inscription;
