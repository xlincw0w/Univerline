import React, { Component } from 'react'
import Profile from './ProfileEnseignant/profile'
import ProfileEtudiant from './ProfileEtudiant/ProfileEtudiant'
import ProfileNv from './ProfileEnseignant/nouveau/ProfileNv'

class IndexProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            choix: '',
            choixs: ['', 'Profile Etudiant', 'Profile Enseignant', 'Profile Nouveau'],
        }
    }

    choisir = (e) => {
        this.setState({
            choix: e.target.value,
        })
    }

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
                                    {choix}
                                </option>
                            )
                        })}
                    </select>
                </p>

                {choixFait}
                <br />
                {/* <ProfileEtudiant /> */}
            </div>
        )
    }
}

export default IndexProfile
