import React, { Component } from 'react'
import Profile from './ProfileEnseignant/profile'
import ProfileEtudiant from './ProfileEtudiant/ProfileEtudiant'
import ProfileNv from './ProfileEnseignant/nouveau/ProfileNv'

class IndexProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            choix: '',
<<<<<<< HEAD
            choixs: ['', 'Profile Etudiant', 'Profile Enseignant'],
        }
    }

    choisir = (e) => {
=======
            choixs: ['', 'Profile Etudiant', 'Profile Enseignant', 'Profile Nouveau'],
        }
    }

    choisir = e => {
>>>>>>> 6b59ec73b9f608b7953bbcd8224cf502bcb77773
        this.setState({
            choix: e.target.value,
        })
    }
<<<<<<< HEAD

    render() {
        const choixFait = this.state.choix == 'Profile Etudiant' ? <ProfileEtudiant /> : this.state.choix == 'Profile Enseignant' ? <Profile /> : ''

        return (
            <div>
                <p>
                    <label for='choix'>Choisir le profile à afficher : </label>
                    <select id='choix' value={this.state.choix} onChange={this.choisir}>
                        {this.state.choixs.map((choix, index) => {
                            return (
                                <option key={index} value={choix}>
                                    {choix}
                                </option>
                            )
                        })}
                    </select>
                </p>

                {choixFait}
                <br />
                {/* <ProfileEtudiant /> */}
=======

    render() {
        const choixFait =
            this.state.choix == 'Profile Etudiant' ? (
                <ProfileEtudiant />
            ) : this.state.choix == 'Profile Enseignant' ? (
                <Profile />
            ) : this.state.choix == 'Profile Nouveau' ? (
                <ProfileNv />
            ) : (
                ''
            )

        return (
            <div>
                <p>
                    <label for='choix'>Choisir le profile à afficher : </label>
                    <select id='choix' value={this.state.choix} onChange={this.choisir}>
                        {this.state.choixs.map((choix, index) => {
                            return (
                                <option key={index} value={choix}>
                                    {' '}
                                    {choix}{' '}
                                </option>
                            )
                        })}
                    </select>
                </p>

                {choixFait}
                <br />
                {/* <ProfileEtudiant /> */}
                {/*<Menu />
        

        <p>{this.state.choix}</p>
        <br />
        <ProfileEtudiant />
        <br />*/}
>>>>>>> 6b59ec73b9f608b7953bbcd8224cf502bcb77773
            </div>
        )
    }
}

export default IndexProfile
