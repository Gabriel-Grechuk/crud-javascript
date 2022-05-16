const express = require('express')
const routes = express.Router()

const validate = require('../validators/user-validation.js')
const cadastro = require('../controllers/cadastroController.js')

routes
  .get('/users', cadastro.index)
  .get('/users/:id', validate.id, cadastro.getUser)
  .post('/users', validate.user, cadastro.registerUser)
  .put('/users/:id', validate.id, validate.user, cadastro.updateUser)
  .delete('/users/:id', validate.id, cadastro.deleteUser)

module.exports = routes
