const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createUser(name, email) {
  return await prisma.user.create({
	data: {
	  name,
	  email,
	},
  });
}

module.exports = {
  createUser,
};
