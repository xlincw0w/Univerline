const express = require('express')
const cors = require('cors')
const knex = require('knex')
const port = process.env.PORT || 3001

const SignupApi = require('./signup/signup_api')
const SigninApi = require('./signin/signin_api')
const ProfileApi = require('./profile/profile_api')
const AnnonceApi = require('./annonce/annonce_api')

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'naises',
        password: 'Azerty123',
        database: 'naises'
    }
})

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.json('<> Api server reached')
})

SignupApi(app, db)
SigninApi(app, db)
ProfileApi(app, db)
AnnonceApi(app, db)

app.listen(port, () => {
    console.log("<> Erpone Back server up on port : ", port)
})