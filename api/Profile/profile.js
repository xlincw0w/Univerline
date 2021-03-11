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

router.route('/:id').get((req, res) => {
    const id = req.params.id

    db('users')
        .select('*')
        .where('id_user', id)
        .then((row) => {
            res.json(row[0])
        })
        .catch((err) => {
            res.json([])
        })
})

module.exports = router
