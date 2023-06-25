const express = require('express')
const routes = express.Router()

const DevsController = require('./controllers/DevsController.js')
const PriorityController = require('./controllers/PriorityController.js')
const ContentController = require('./controllers/ContentController.js')

//Rota desenvolvedores
routes.get('/dev', DevsController.show)
routes.get('/dev/:id', DevsController.showID)
routes.post('/dev', DevsController.create)
routes.put('/dev/:id', DevsController.update)
routes.delete('/dev/:id', DevsController.delet)

//Rota prioridades
routes.get('/priority', PriorityController.show)
routes.post('/priority/:id', PriorityController.update)

//Rota conteudo
routes.get('/content', ContentController.show)
routes.put('/content/:id', ContentController.update)

module.exports = routes