import React from 'react'

export default function ValiderInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = 'Username required'
        errors.ErrorUsername = true
    } else if (!/^[A-Za-z]+[A-Za-z0-9 ]*$/i.test(values.username)) {
        errors.username = 'Error syntaxe'
        errors.ErrorUsername = true
    }

    if (!values.email) {
        errors.email = 'Email required'
        errors.ErrorEmail = true
    } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\., ;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
            values.email
        )
    ) {
        errors.email = 'Email address is invalid'
        errors.ErrorEmail = true
    }

    return errors
}
