const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://UseR:123@devs.5kopnmp.mongodb.net/lista-dev')

const db = mongoose.connection

module.exports = db