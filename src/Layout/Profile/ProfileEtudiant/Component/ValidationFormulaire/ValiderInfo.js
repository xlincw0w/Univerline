import React from 'react'

export default function ValiderInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = 'Username required'
    }

    if (!values.email) {
        errors.email = 'Email required'
    } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\., ;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
            values.email
        )
    ) {
        errors.email = 'Email address is invalid'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters'
    }

    if (!values.password2) {
        errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }

    return <div></div>
}
