const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/save_user').post((req, res) => {
    const data = req.body.data

    if (data.user_type === 'enseignant') {
        db('enseignant')
            .insert({
                id_ens: data.id_ens,
                nom: data.nom_complet,
                email: data.email,
                niveau_enseignement: data.niveau_ens,
                domaine_enseignement: data.domaine_enseignement,
            })
            .then((resp) => {
                console.log('Added')
                res.json({ updated: true })
            })
            .catch((err) => {
                console.log(err)
                res.json({ updated: false })
            })
    } else {
        db('etudiant')
            .insert({
                id_etu: data.id_etu,
                nom: data.nom_complet,
                email: data.email,
                niveau_educatif: data.niveau_ens,
                domaine_educatif: data.domaine_enseignement,
                etablissement: data.etablissement,
            })
            .then((resp) => {
                console.log('Added')
                res.json({ updated: true })
            })
            .catch((err) => {
                console.log(err)
                res.json({ updated: false })
            })
    }
})

module.exports = router
