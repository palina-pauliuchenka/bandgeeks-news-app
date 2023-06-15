import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const setupTestDatabase = async() => {
  // any necessary Test Database Setup Logic goes here

  // Sample User
  await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'janedoe123',
      hashedPassword: 'hashedPassword',
      salt: 'salt',
      resetToken: null,
      resetTokenExpiresAt: null,
      newsGeneral: false,
      newsBusiness: false,
      newsHealth: false,
      newsScience: false,
      newsSports: false,
      newsTechnology: false,
    },
  })
}
