const database = require('../service/database.js')


async function index (req, res, next) {
  try{
    const { page = 1 } = req.query
    console.log(`listando usuários da página ${page}.`)

    const results = await database.getPaginatedUsers(20, page)
    
    res.status(200)
       .json(results)
  } catch (err) {
    const error = new Error(err)
    error.status = 500
    next(error)
  }
}


async function registerUser(req, res, next) {
  console.log('Registrando um usuário...')
  try {
    const result = await database.createUser(req.body)

    res.status(201)
       .json(result)
  } catch (err) {
    const error = new Error(err)
    error.status = 400
    next(error)
  }
}


async function getUser(req, res, next){
  console.log('Buscando cadastro por id...')
  try {
    const { id } = req.params

    const result = await database.findUserById(id)

    res.status(200)
       .json(result)
  } catch (err) {
    const error = new Error(err)
    error.status = 400
    next(error)
  }

}


async function updateUser(req, res, next) {
  console.log('Atualizando cadastro...')

  try { 
    const { id } = req.params
    const newData = req.body

    const result = await database.updateUser(id, newData)

    res.status(201)
       .json(result)
  } catch (err) {
    const error = new Error(err)
    error.status = 400
    next(error)
  }

}


async function deleteUser(req, res, next) {
  console.log('Deletando usuário...')

  try {
    const { id } = req.params
    const user = await database.deleteUser(id)

    res.status(200)
       .json(user)
  } catch (err) {
    const error = new Error(err)
    error.status = 400
    next(error)
  }
}


module.exports = {
  index,
  getUser,
  registerUser,
  updateUser,
  deleteUser
}
