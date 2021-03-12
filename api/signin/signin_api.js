const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const TokenSecret = process.env.TokenSecret || 'tokensecret'

const SigninApi = (app, db) => {

    app.post('/signin/user', (req, res) => {
        const data = req.body
        const { authorization } = req.headers
        if (authorization) {
            jwt.verify(authorization, TokenSecret, (err, authorizedData) => {
                if (err) {
                    res.json({ connected: false })
                } else {
                    const username = authorizedData.username
                    db('users').select('*')
                        .where('username', username)
                        .then(row => {
                            const { hashed_passwd, ...user } = row[0]
                            res.json({ connected: true, user })
                        }).catch(err => {
                            console.log(err)
                            res.json({ connected: false })
                        })
                }
            })
        } else {
            db('users').select('*')
                .where('username', data.username)
                .then(row => {
                    if (row.length === 0) {
                        res.json({ connected: false })
                    } else {
                        bcrypt.compare(data.passwd, row[0].hashed_passwd)
                            .then(resp => {
                                const { hashed_passwd, ...user } = row[0]

                                const jwtPayload = { username: user.username }
                                const token = jwt.sign(jwtPayload, TokenSecret)

                                if (resp) { res.json({ connected: true, user, token }) }
                                else { res.json({ connected: false }) }
                            }).catch(err => {
                                console.log(err)
                                res.json({ connected: false })
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.json({ connected: false })
                })
        }


    })
}

module.exports = SigninApi