const express = require('express')
const db = require('./config/dbConnect.js')
const routes = require('./routes.js')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3333

db.on('error', console.log.bind(console, 'Erro ao conectar com MongoDB'))

db.once('open', () => {
    console.log('Mongo DB conectado!')
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Server ligado -> http://localhost:${port}`)
})
