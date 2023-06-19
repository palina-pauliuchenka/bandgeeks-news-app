import { db } from 'src/lib/db';

export const createUser = async ({ input }) => {
  const {
    name,
    email,
    hashedPassword,
    salt,
    resetToken,
    resetTokenExpiresAt,
    newsGeneral,
    newsBusiness,
    newsHealth,
    newsScience,
    newsSports,
    newsTechnology
  } = input;

  return await db.user.create({
    data: {
      name,
      email,
      hashedPassword,
      salt,
      resetToken,
      resetTokenExpiresAt,
      newsGeneral,
      newsBusiness,
      newsHealth,
      newsScience,
      newsSports,
      newsTechnology
    }
  });
};
