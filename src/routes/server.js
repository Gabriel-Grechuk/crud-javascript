const express = require('express')
const routes = require('./routes')

const server = express()
server.use(express.json())
server.use(routes)

// 404
server.use((req, res, next) => {
  const error = new Error('Caminho não encontrado.')
  error.status = 404
  next(error);
})

// Catch errors
server.use((error, req, res, next) => {
  res.status(error.status || 500)
     .json({error: error.message})
})

module.exports = server
