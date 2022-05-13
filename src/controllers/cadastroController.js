const { response } = require("express")

// Validação de entradas de dados.
function validateId(id) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id)
}

function validateName(name) {
    return /[A-Za-z_.-]/.test(name)
}

function validateEmail(email) {
    return /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/.test(email)
}

function validatePhone(phone) {
    return /\+[1-9]{2}? ?\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}/.test(phone)
}


// Controllers.
function listar(req, res) {
    console.log('Listando cadastros...')

    // Lista registros paginados do postgres.

    res.send()
}

function cadastrar(req, res, next) {
    console.log('Cadastrando usuario...')
    try {
        const name = req.body.name
        const email = req.body.email
        const phone = req.body.phone

        if(!validateName(name)) { throw 'Error em [cadastrar]: Formato de nome inválido.' }
        if(!validateEmail(email)) { throw 'Error em [cadastar]: Formato de email inválido.' }
        if(!validatePhone(phone)) { throw 'Error em [cadastrar]: Formato de telefone inválido' }

        // Cadastra dados no postgres.

        res.send(201)
    } catch (e) {
    	const error = new Error(e)
        error.status = 400
        next(error)
    }
}

function atualizar(req, res, next) {
    console.log('Atualizando registro...')
    try {
        const id = req.params
        const registro = req.body

        if(!validateId(id)) { throw 'Error em [atualizar]: Id inválido.' }

        // Registra alterações no postgres.

    } catch (e) {
        const error = new Error(e)
        error.status = 400
        next(error)
    }
}

function deletar(req, res, next) {
    res.send('Deletnado registro...')
    try {
        const id = req.param
        if(!validateId(id)) { throw 'Error em [deletar]: Id inválido.' }

        // Deleta regristro no postgres.
    } catch (e)
    {
        const error = new Error(e)
        error.status = 400
        next(error)
    }
}

module.exports = {
    listar,
    cadastrar,
    atualizar,
    deletar
}
