const ProfileApi = (app, db) => {

    app.get('/profile/:username', (req, res) => {
        const username = req.params.username

        console.log(username)

        db('users').select('*')
            .where('username', username)
            .then(row => {
                if (row.length === 0) {
                    res.json({ found: false })
                } else {
                    const { hashed_passwd, ...data } = row[0]
                    res.json({ found: true, user: data })
                }
            })

    })
}

module.exports = ProfileApi