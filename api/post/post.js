const express = require('express')
const router = express.Router()
const db = require('../database')
const moment = require('moment')
const { concat, orderBy } = require('lodash')

//recuperer la table post
router.route('/get/post').get((req, res) => {
    db('poste')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

//les poste d un etudiant X

router.route('/get/post/:id?').get(async (req, res) => {
    const id = req.params.id

    const friends = await db('users')
        .whereIn('id_user', db('amis').where({ id_user: id, confirm: true }).select('id_ami'))
        .select('*')

    var postes = []

    await Promise.all(
        friends.map(async (elem) => {
            let data = await db('poste').select('*').leftJoin('users', 'users.id_user', 'poste.id_poste').where('id_poste', elem.id_user).orderBy('date_poste', 'desc').limit(10)
            postes = concat(postes, data)
        })
    )

    postes = orderBy(postes, 'date_poste', 'desc')

    res.json(postes)
})

//ajouter un post a une classe X
router.route('/add/post/').post((req, res) => {
    const data = req.body

    db('poste')
        .insert({
            id_poste: data.id_poste,
            id_classe: data.id_classe,
            payload: data.payload,
            date_poste: moment().format(),
        })
        .then((resp) => {
            res.json({ AJOUT: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ AJOUT: false })
        })
})

//modifier une classe
router.route('/update/post/:id?').post((req, res) => {
    const id_poste = req.params.id
    const payload = req.body.payload
    db('poste')
        .where('id_poste', id_poste)
        .update({
            payload,
        })
        .then((resp) => {
            console.log(resp)
            res.json({ updated: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ updated: false })
        })
})

//supprimer une classe
router.route('/delete/post/:id?').delete((req, res) => {
    const id_poste = req.params.id
    db('poste')
        .where('id_poste', id_poste)
        .delete('*')
        .then((resp) => {
            console.log(resp)
            res.json({ delete: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ delete: false })
        })
})

module.exports = router
