const express = require('express')
const routes = express.Router()

const cadastroController = require('./controllers/cadastroController')

routes.get('/users', cadastroController.listar)
routes.post('/users', cadastroController.cadastrar)
routes.put('/users/:id', cadastroController.atualizar)
routes.delete('/users/:id', cadastroController.deletar)

module.exports = routes
