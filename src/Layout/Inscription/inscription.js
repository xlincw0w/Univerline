import React, {useState, useEffect} from 'react'
import '../Inscription/nav.css'

export default function Inscription() {
    const [nav, setnav]=useState(true);
    const btnnav =() => {
        setnav(!nav);
    }
    return (
        <nav>
        
            {nav && (
                

            <ul className="liste">
            <li className="items">Accueil</li>
            <li className="items">Service</li>
            <li className="items">Contact</li>
            </ul>
            
        )}
            
            <button className="btn" onClick={btnnav} >BTN</button>
        </nav>
    )
}
