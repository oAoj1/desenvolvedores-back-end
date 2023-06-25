const Devs = require('../models/DevsData.js')

async function show(req,res){
    try{
        const mostrarConteudo = await Devs.find()
        res.json(mostrarConteudo)

    }catch(error){
        console.log(error.message)
    }
}

async function update(req,res){
    try{
        const id = req.params.id
        const atualizarDev = await Devs.findByIdAndUpdate(id, {$set:req.body})
        const mostrarAtualizacao = await Devs.findById(id)

        if(atualizarDev){
            res.send(mostrarAtualizacao)
        }else{
            res.send('Erro ao atualizar conteudo')
        }

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    show,
    update
}