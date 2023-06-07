export const schema = gql`
  type User {
    id: Int!
    name: String
    username: String!
    # hashedPassword: String!
    # salt: String!
    # resetToken: String
    # resetTokenExpiresAt: DateTime
    roles: String!
  }

  type Query {
    users: [User!]! @requireAuth
  }

  input CreateUserInput {
    name: String
    username: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
  }

  input UpdateUserInput {
    name: String
    username: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
  }
`
