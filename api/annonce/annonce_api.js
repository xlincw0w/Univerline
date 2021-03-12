const AnnonceApi = (app, db) => {

    app.post('/annonce/info/:id_user', (req, res) => {
        const id_user = req.params.id_user
        const { date_now, feedContent } = req.body

        console.log(feedContent, ' : posted')

        db('annonces')
            .insert({
                id_user,
                type_annonce: 'info',
                content_annonce: feedContent,
                date_annonce: date_now
            })
            .then(() => {
                res.json({ added: true })
                console.log('Post info added')
            })
            .catch(err => {
                res.json({ added: false })
                console.log(err)
            })
    })

    app.get('/annonce/enseignant/:id_user', (req, res) => {
        const id_user = req.params.id_user

        db('annonces')
            .select('*')
            .where('annonces.id_user', id_user)
            .leftJoin('users', 'annonces.id_user', 'users.id_user')
            .then((row) => {
                res.json({ row })
            })
            .catch(err => console.log(err))
    })
}

module.exports = AnnonceApi