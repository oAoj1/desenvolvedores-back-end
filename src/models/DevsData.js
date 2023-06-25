const mongoose = require('mongoose')

const DevsSchema = new mongoose.Schema({
    id:{type:String},
    prioridade:{type:Boolean, required:true},
    nome:{type:String, required:true},
    cargo:{type:String, required:true},
    nivel:{type:String, required:true},
})

module.exports = mongoose.model('Devs', DevsSchema)