const Devs = require('../models/DevsData.js')

async function show(req,res){
    try{
        const priority = req.query
        const priorityDevs = await Devs.find(priority)
    
        return res.json(priorityDevs)

    }catch(error){
        console.log(error.message)
    }

}

async function update(req,res){
    try{
        const id = req.params.id
        const atualizarDev = await Devs.findOne({ _id: id })

        if(atualizarDev.prioridade){
            atualizarDev.prioridade = false
        }else{
            atualizarDev.prioridade = true
        }

        await atualizarDev.save()

        return res.json(atualizarDev)

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    show,
    update
}