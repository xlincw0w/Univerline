import React, { useState } from 'react'

const GererFormulaire = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        specialite: '',
        etablissement: '',
    })

    const [errors, setErrors] = useState({})

    const handleChanger = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
    }

    return {handleChanger, values, handleSubmit}
}

export default GererFormulaire
