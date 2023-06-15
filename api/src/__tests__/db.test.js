import { db } from 'src/lib/db'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Creating a Test Suite called "User"
describe('User', () => {
  beforeAll(async () => {
    // Creates a Sample User
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
  })

  afterAll(async () => {
    await db.$disconnect()
    // Clean up data here as needed
  })

  it('create a new user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'johnd456', // email right now is acting as the username
      hashedPassword: 'anotherHashedPassword',
      salt: 'anotherSalt',
      resetToken: null,
      resetTokenExpiresAt: null,
      newsGeneral: true,
      newsBusiness: false,
      newsHealth: true,
      newsScience: false,
      newsSports: false,
      newsTechnology: false,
    }

    const createdUser = await db.user.create({
      data: userData,
    })

    const retrievedUser = await db.user.findUnique({
      where: { id: createdUser.id },
    })

    // Assertions
    expect(createdUser).toBeDefined()
    expect(createdUser.name).toBeDefined()
    expect(createdUser.name).toBe(userData.name)
    expect(retrievedUser).toEqual(createdUser)
  })

  // Add more tests as needed (Update Query, Delete, Other Queries, etc)
})