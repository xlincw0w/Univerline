const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 3001
const db = require('./api/database')

require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET)); 
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/profile', require('./api/profile/profile'));
app.use('/api/adherent', require('./api/adherent/adherent'));
app.use('/api/collegue', require('./api/collegue/collegue'));
app.use('/api/commentaire', require('./api/commentaire/commentaire'));
app.use('/api/classe', require('./api/classe/classe'));
app.use('/api/amis', require('./api/amis/amis'));
app.use('/api/post', require('./api/post/post'));

app.use(express.static(path.join(__dirname, './dist')))

app.use('/api/profile', require('./api/Profile/profile'))
app.use('/api/inscription', require('./api/Inscription/inscription'))
app.use('/api/online', require('./api/online'))


app.listen(PORT, function () {
    console.log(`Server listenning on port ${PORT}!\n`)
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './dist', 'index.html'))
})
