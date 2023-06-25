const Devs = require('../models/DevsData.js')

function principal(req,res){
    res.send('Digite /dev na URL para acessar os dados')
}

async function show(req,res){
    try{
        const listaDevs = await Devs.find()
        res.json(listaDevs)

    }catch(error){
        console.log(error.message)
    }
}

async function showID(req,res){
    try{
        const id = req.params.id
        const listarDevID = await Devs.findById(id)

        return res.json(listarDevID)

    }catch(error){
        console.log(error.message)
    }
}

async function create(req,res){
    try{
        const novoDev = new Devs(req.body)
        const cadastrarDev = await novoDev.save()
        
        if(cadastrarDev){
            res.send('Desenvolvedor cadastrado com sucesso')
        }else{
            res.send('Erro ao cadastrar desenvolvedor')
        }
       
    }catch(error){
        console.log(error.message)
    }
}

async function update(req,res){
    try{
        const id = req.params.id
        const atualizarDev = await Devs.findByIdAndUpdate(id, {$set:req.body})

        if(atualizarDev){
            res.send('Desenvolvedor atualizado com sucesso')
        }else{
            res.send('Erro ao atualizar desenvolvedor')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function delet(req,res){
    try{
        const id = req.params.id
        const deletarDev = await Devs.findByIdAndDelete(id)

        return res.send('Desenvolvedor deletado com sucesso')
        
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    principal,
    show,
    showID,
    create,
    update,
    delet
}
