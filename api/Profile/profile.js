const express = require('express')
const router = express.Router()
const db = require('../database')

router.route('/update/').post((req, res) => {
    const data = req.body

    db('users')
        .update({
            id_user: data.id_user,
            nom: data.nom ? data.nom.toLowerCase() : '',
            prenom: data.prenom ? data.prenom.toLowerCase() : '',
            // email: data.email ? data.email.toLowerCase() : '',
            niveau_ens: data.niveau_ens ? data.niveau_ens.toLowerCase() : '',
            domaine_ens: data.domaine_ens ? data.domaine_ens.toLowerCase() : '',
            niveau_edu: data.niveau_edu ? data.niveau_edu.toLowerCase() : '',
            domaine_edu: data.domaine_edu ? data.domaine_edu.toLowerCase() : '',
            etablissement: data.etablissement ? data.etablissement.toLowerCase() : '',
            date_inscription: data.date_inscription,
            // user_type: data.user_type,
            // avatar: data.avatar,
        })
        .where({ id_user: data.id_user })
        .then((resp) => {
            res.json(resp)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.route('/:id').get((req, res) => {
    const id = req.params.id

    db('users')
        .select('*')
        .where('id_user', id)
        .then((row) => {
            row[0] ? res.json(row[0]) : res.json([])
        })
        .catch((err) => {
            res.json([])
        })
})

router.route('/byname/:value').get((req, res) => {
    let value = req.params.value

    value = value.split(' ')

    if (value.length === 1) {
        db('users')
            .select(['id_user', 'nom', 'prenom', 'user_type'])
            .where('nom', 'like', `%${value}%`)
            .orWhere('prenom', 'like', `%${value}%`)
            .limit(6)
            .then((rows) => {
                res.json(rows)
            })
            .catch((err) => {
                res.json([])
            })
    } else if (value.length === 2) {
        db('users')
            .select(['id_user', 'nom', 'prenom', 'user_type'])
            .where('nom', 'like', `%${value[0]}%`)
            .orWhere('nom', 'like', `%${value[1]}%`)
            .andWhere('prenom', 'like', `%${value[1]}%`)
            .orWhere('prenom', 'like', `%${value[0]}%`)
            .limit(6)
            .then((rows) => {
                res.json(rows)
            })
            .catch((err) => {
                res.json([])
            })
    } else res.json([])
})

module.exports = router
