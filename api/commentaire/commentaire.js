const express = require('express')
const router = express.Router()
const db = require('../database')
const moment = require('moment')
const { v4 } = require('uuid')

//afficher les commentaires
router.route('/get/comments').get((req, res) => {
    db('commentaire')
        .select('*')
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

//afficher tous les commentaires d'un poste précis
router.route('/get/comments/:id?').get((req, res) => {
    const id_pos = req.params.id
    db('commentaire')
        .select('*')
        .leftJoin('users', 'commentaire.id_user', 'users.id_user')
        .orderBy('date_commentaire', 'desc')
        .limit(10)
        .where({ id_poste: id_pos })
        .then((rows) => {
            res.json(rows)
        })
        .catch((err) => {
            console.log(err)
            res.json({ err: true })
        })
})

//ajouter un commentaire
router.route('/add/comments/').post((req, res) => {
    const data = req.body

    db('commentaire')
        .insert({
            id_commentaire: v4().split('-').join(''),
            id_user: data.id_user,
            id_poste: data.id_poste,
            payload: data.payload,
            date_commentaire: moment().format(),
        })
        .then((resp) => {
            res.json({ comment: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ comment: false })
        })
})

//modifier un commentaire
router.route('/update/commentaire/:id?').post((req, res) => {
    const id_commentaire = req.params.id
    const payload = req.body.payload
    db('commentaire')
        .where('id_commentaire', id_commentaire)
        .update({
            payload,
        })
        .then((resp) => {
            res.json({ updated: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ updated: false })
        })
})

//supprimer un commentaire
router.route('/delete/commentaire/:id?').delete((req, res) => {
    const id_commentaire = req.params.id

    db('commentaire')
        .where('id_commentaire', id_commentaire)
        .delete('*')
        .then((resp) => {
            res.json({ delete: true })
        })
        .catch((err) => {
            console.log(err)
            res.json({ delete: false })
        })
})

module.exports = router
