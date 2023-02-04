import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function post(req, res) {
  const user = await prisma.user.create({
	data: req.body,
  });

  return {
	body: user,
  };
}