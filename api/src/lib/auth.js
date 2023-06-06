import { db } from './db'

export const getCurrentUser = async (session) => {
  return await db.user.findUnique({
    where: { id: session.id },
    select: { id: true, username: true },
  })
}

export const isAuthenticated = () => {
  return !!context.currentUser
}
