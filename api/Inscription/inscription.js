const express = require('express')
const router = express.Router()
const db = require('../database')

const moment = require('moment')

router.route('/save_user').post((req, res) => {
    const data = req.body.data

    db('users')
        .insert({
            id_user: data.id_user,
            nom: data.nom,
            prenom: data.prenom,
            email: data.email,
            niveau_ens: data.niveau_ens,
            domaine_ens: data.domaine_ens,
            niveau_edu: data.domaine_edu,
            domaine_edu: data.domaine_edu,
            etablissement: data.etablissement,
            user_type: data.user_type,
            avatar: data.avatar,
            date_inscription: moment().format(),
        })
        .then((resp) => {
            console.log('Added')
            res.json({ updated: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ updated: false })
        })
})

module.exports = router
