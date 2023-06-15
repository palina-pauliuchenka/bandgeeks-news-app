import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const setupTestDatabase = async() => {
  // any necessary Test Database Setup Logic goes here

  // Sample User
  await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'janedoe123', // email right now is acting as the username
      hashedPassword: 'hashedPassword',
      salt: 'salt',
      resetToken: null,
      resetTokenExpiresAt: null,
      newsGeneral: true,
      newsBusiness: false,
      newsHealth: false,
      newsScience: false,
      newsSports: false,
      newsTechnology: false,
    },
  })
}
