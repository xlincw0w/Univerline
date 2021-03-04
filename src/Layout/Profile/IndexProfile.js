import React, { Component } from 'react'
import Profile from './ProfileEnseignant/profile'
import Menu from './ProfileEtudiant/Component/Menu'
import ProfileEtudiant from './ProfileEtudiant/ProfileEtudiant'

class IndexProfile extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      choix: "",
      choixs: ["", "Profile Etudiant", "Profile Enseignant"]
    }
  }
  
  choisir = (e) =>{
    this.setState({
      choix: e.target.value,
    })
  }

  render() {

    {/*const choixFait = this.state.choix == "Profile Etudiant" ? (
      <ProfileEtudiant />
    ) : (
      this.state.choix == "Profile Enseignant" ? (
        <Profile />
      ) : ("")
      )*/}
    
    return (
      <div>

        {/*<p>
          <label for="choix">Choisir le profile à afficher : </label>
          <select id="choix" value={this.state.choix} onChange={this.choisir} >
            {
              this.state.choixs.map((choix, index) =>{
                return <option key={index} value={choix} > {choix} </option>
              } ) 
            }
          </select>
          </p>*/}

        {/*choixFait*/}
        <br />
        <ProfileEtudiant />
        {/*<Menu />
        

        <p>{this.state.choix}</p>
        <br />
        <ProfileEtudiant />
        <br />*/}
            
      </div>
    )
  }
}

export default IndexProfile
