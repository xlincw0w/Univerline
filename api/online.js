const express = require('express')
const router = express.Router()
const moment = require('moment')
const fire = require('./Firebase/firebase').firestore()

router.route('/get/:id').get(async (req, res) => {
    const id = req.params.id
    const doc = await fire.collection('online').doc(id).get()

    res.send(doc.data())
})

router.route('/update').post((req, res) => {
    const data = req.body

    fire.collection('online').doc(data.uid).set({
        id: data.uid,
        last_seen: moment().utc().format(),
    })
})

module.exports = router
