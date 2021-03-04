import React, { Component } from 'react'

class Menu extends Component {

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
    return (
      <div>
        <label for="choix">Choisir le profile à afficher : </label>
        <select id="choix" value={this.state.choix} onChange={this.choisir} >
          {
            this.state.choixs.map((choix, index) =>{
              return <option key={index} value={choix} > {choix} </option>
            } ) 
          }
        </select>
      </div>
    )
  }
}

export default Menu
