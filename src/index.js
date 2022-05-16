const server = require('./routes/server.js')

const PORT = 8080
server.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
