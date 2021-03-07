const express = require('express')
const router = express.Router()
const db = require('../database')

//recuperer la liste des enseignants
router.route('/get/enseignant').get((req, res) => {
    db('enseignant')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
//recuperer la liste des etudiants
router.route('/get/etudiant').get((req, res) => {
    db('etudiant')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
//recuperer les infos d'un enseignant par son id
router.route('/get/enseignant/:id').get((req, res) => {
    db('enseignant')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
//recuperer les infos d'un etudiant par son id
router.route('/get/etudiant/:id').get((req, res) => {
    db('etudiant')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})
//modifications enseignants
router.route('/update/enseignant/:id?').post((req, res) => {
    const id = req.params.id
    const { nom, prenom, email, avatar, niveau_enseignement, domaine_enseignement } = req.body
    if (id.substr(0, 3) === 'ens') {
        db('enseignant')
            .where('id_ens', id)
            .update({
                nom,
                prenom,
                email,
                avatar,
                niveau_enseignement,
                domaine_enseignement,
            })
            .then((resp) => {
                console.log(resp)
                res.json({ updated: true })
            })
            .catch((err) => {
                console.log(err)
                res.json({ updated: false })
            })
    }
})
//modifications etudiants
router.route('/update/etudiants/:id?').post((req, res) => {
    const id = req.params.id
    const { nom, prenom, email, avatar, niveau_enseignement, domaine_enseignement } = req.body
    if (id.substr(0, 3) === 'etud') {
        db('etudiant')
            .where('id_etud', id)
            .update({
                nom,
                prenom,
                age,
                email,
                avatar,
                date_inscription,
                niveau_educatif,
                domaine_educatif,
            })
            .then((resp) => {
                console.log(resp)
                res.json({ updated: true })
            })
            .catch((err) => {
                console.log(err)
                res.json({ updated: false })
            })
    }
})

module.exports = router
