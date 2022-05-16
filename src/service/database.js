const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()


async function getPaginatedUsers(nPageUsers, page) {
  const offset = (page - 1) * nPageUsers

  return await prisma.usuario.findMany({
    skip: offset,
    take: nPageUsers
  }) 
}


async function createUser(user){
  return await prisma.usuario.create({
    data: user
  })
}


async function findUserById(id) {

  const result = await prisma.usuario.findUnique({
    where: {
      id: id,
    },
  })

  if(!result)
  {
    throw 'Usuário não encontrado.'
  }

  return result;
}


async function updateUser(id, user) {
  return await prisma.usuario.update({
    where: {
     id: id
    },
    data: user,
  })
}


async function deleteUser(id) {
  return await prisma.usuario.delete({
    where: {
      id: id,
    },
  })
}


module.exports = {
  getPaginatedUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser
}
