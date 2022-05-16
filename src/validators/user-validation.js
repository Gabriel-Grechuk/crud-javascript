const schema = require('./schemas.js')


function user(req, res, next) {
  try {
    const status = schema.user.validate(req.body)
    if (status.error) { throw status.error.message }
    next()
  } catch (err) {
    const error = new Error(err)
    error.status = 400
    next(error)
  }
}

function id(req, res, next) {
  try {
    const status = schema.id.validate(req.params.id)
    if (status.error) { throw status.error.message } 
    next()
  } catch (err) {
    const error = new Error(err)
    error.status = 400
    next(error)
  }
}

module.exports = {
  user,
  id
}
