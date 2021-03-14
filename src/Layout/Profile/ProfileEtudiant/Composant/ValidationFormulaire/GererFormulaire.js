import React, { useState } from 'react'
import ValiderInfo from './ValiderInfo'

const GererFormulaire = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        specialite: '',
        etablissement: '',
    })

    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChanger = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(ValiderInfo(values))
        setIsSubmitting(true)
    }

    return { handleChanger, values, handleSubmit, errors }
}

export default GererFormulaire
