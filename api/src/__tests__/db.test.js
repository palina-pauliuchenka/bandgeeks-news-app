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

  //Create A Test Suite Named 'updateUser'
  describe('updateUser', () => {
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
    });

    it('should update a user in the database', async () => {
      // Arrange
      const userToBeUpdated = await db.user.create({
        data: {
          name: 'Shawn Ramirez',
          email: 'johnd456',
          hashedPassword: 'yetAnotherHashedPassword',
          salt: 'yetAnotherSalt',
          resetToken: null,
          resetTokenExpiresAt: null,
          newsGeneral: true,
          newsBusiness: false,
          newsHealth: true,
          newsScience: false,
          newsSports: false,
          newsTechnology: false,
        },
      });

      // Act
      const updatedUser = await db.user.update({
        where: { id: userToBeUpdated.id },
        data: { name: 'Sean Ramirez' },
      });

      // Assert
      expect(updatedUser.id).toEqual(userToBeUpdated.id);
      expect(updatedUser.name).toEqual('Sean Ramirez');
    });

    it('delete a user', async () => {
      // Arrange
      const createdUser = await db.user.create({
        data: {
          name: 'John Doe',
          email: 'johnd456',
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
        },
      });

      // Act
      const deletedUser = await db.user.delete({
        where: { id: createdUser.id },
      });

      const retrievedUser = await db.user.findUnique({
        where: { id: createdUser.id },
      });

      // Assertions
      expect(deletedUser).toEqual(createdUser);
      expect(retrievedUser).toBeNull();
    });
  });
})
