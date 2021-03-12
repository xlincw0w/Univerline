const constants = require('../constants')

const FormTest = (data) => {
    if (data.type_user === 'enseignant') {
        if (data.second_user.length === 0) return { passed: false, error: 'length', target: 'second' }
        if (data.first_user.length === 0) return { passed: false, error: 'length', target: 'second' }
        if (data.email_user.length === 0) return { passed: false, error: 'length', target: 'second' }

        if (!constants.alph_rg.test(data.second_user)) return { passed: false, error: 'invalid', target: 'second' }
        if (!constants.alph_rg.test(data.first_user)) return { passed: false, error: 'invalid', target: 'first' }
        if (!constants.email_rg.test(data.email_user)) return { passed: false, error: 'invalid', target: 'email' }
        if (!constants.alphanum_rg.test(data.university_user)) return { passed: false, error: 'invalid', target: 'university' }
        if (!constants.alph_rg.test(data.domain_user)) return { passed: false, error: 'invalid', target: 'domain' }
    }

    if (data.type_user === 'etudiant') {
        if (data.second_user.length === 0) return { passed: false, error: 'length', target: 'second' }
        if (data.first_user.length === 0) return { passed: false, error: 'length', target: 'second' }
        if (data.email_user.length === 0) return { passed: false, error: 'length', target: 'second' }

        if (!constants.alph_rg.test(data.second_user)) return { passed: false, error: 'invalid', target: 'second' }
        if (!constants.alph_rg.test(data.first_user)) return { passed: false, error: 'invalid', target: 'first' }
        if (!constants.email_rg.test(data.email_user)) return { passed: false, error: 'invalid', target: 'email' }
        if (!constants.alphanum_rg.test(data.university_user)) return { passed: false, error: 'invalid', target: 'university' }
        if (!constants.alph_rg.test(data.domain_user)) return { passed: false, error: 'invalid', target: 'domain' }
    }

    return { passed: true }
}

const SignupApi = (app, db) => {

    app.post('/signup/user', (req, res) => {
        const data = req.body
        const test = FormTest(data)

        if (test.passed) {
            db('users')
                .select('id_user')
                .where('username', data.username)
                .then(row => {
                    if (row.length === 0) {
                        db('users')
                            .insert({
                                second_user: data.second_user,
                                first_user: data.first_user,
                                username: data.username,
                                type_user: data.type_user,
                                hashed_passwd: data.hashed_passwd,
                                email_user: data.email_user,
                                domain_user: data.domain_user,
                                university_user: data.university_user,
                            })
                            .then(() => {
                                res.json({ added: true })
                            })
                            .catch(err => {
                                console.log(err)
                                res.json({ added: false })
                            })
                    } else {
                        console.log('Username exists already !')
                        res.json({ added: false })
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.json({ added: false })
                })
        } else {
            console.log(test.error, test.target)
            res.json({ added: false })
        }

    })

}

module.exports = SignupApi