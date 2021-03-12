const express = require('express')
const router = express.Router()

const moment = require('moment')

const fire = require('./firebase/firebase').firestore()
const db = require('./database')

router.route('/get').get(async (req, res) => {
    // fire.collection('online')
    //     .get()
    //     .then((resp) => {
    //         let result = []
    //         resp.docs.map((doc) => {
    //             result.push(doc.data())
    //         })
    //         res.json(result)
    //     })
    //     .catch((err) => {
    //         result = []
    //     })

    const online = await fire.collection('online').get()
    const users = await db('users').select('*')

    let result = []
    online.docs.map((doc) => {
        result.push(doc.data())
    })

    online.map()

    console.log(users)
})

router.route('/update').post((req, res) => {
    const data = req.body

    fire.collection('online')
        .doc(data.uid)
        .set({
            id: data.uid,
            last_seen: moment().format(),
        })
        .then((resp) => {
            res.json({ updated: true })
        })
        .catch((err) => {
            res.json({ updated: false })
        })
})

module.exports = router
