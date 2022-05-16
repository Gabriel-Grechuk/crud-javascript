const Joi = require('joi')


const user = Joi.object({
  // Id de criação de usuário é controlado pelo postgres
  // e as operações que usam `id`, o recebem pela route. 
  id: Joi.any()
         .forbidden(),

  name: Joi.string()
           .min(3)
           .required(),

  email: Joi.string()
            .email()
            .required(),

  phone: Joi.string()
            .max(20)
            .pattern(/^\+?[1-9]{2}? ?\(?[1-9]{2}\)? ?(?:[2-8]|9 ?[1-9])[0-9]{3}\-?[0-9]{4}$/)
            .required()
})

const id = Joi.string().guid({
  version: 'uuidv4'
})


module.exports = {
  user,
  id
}
