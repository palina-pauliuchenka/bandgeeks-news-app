import { db } from 'src/lib/db'
import { setupTestDatabase } from 'src/lib/test'

// Creating a Test Suite called "User"
describe('User', () => {
  beforeAll(async () => {
    await setupTestDatabase()
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
    expect(createdUser.name).toBeDefined(userData.name)
    expect(retrievedUser).toEqual(createdUser)
  })

  // Add more tests as needed (Update Query, Delete, Other Queries, etc)
})