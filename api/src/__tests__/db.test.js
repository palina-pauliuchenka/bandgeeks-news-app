import { db } from 'src/lib/db'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const updateUser = async ({ id, name }) => {
  try {
    const updatedUser = await db.user.update({
      where: { id },
      data: { name },
    });

    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
};

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
      // Clean up any created test data or restore the original state
      // For example, delete the test user from the database
      await db.$disconnect()
    });

    it('should update a user in the database', async () => {
      // Arrange
      const user = await db.user.findUnique({ where: { email: 'janedoe123' } });

      // Act
      const updatedUser = await updateUser({
        id: user.id,
        name: 'Updated User',
      });

      // Assert
      expect(updatedUser.id).toEqual(user.id);
      expect(updatedUser.name).toEqual('Updated User');
    });

    it('should return null if user is not found', async () => {
      // Act
      const updatedUser = await updateUser({
        id: 'nonexistent-user-id',
        name: 'Updated User',
      });

      // Assert
      expect(updatedUser).toBeNull();
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
