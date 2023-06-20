export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    newsGeneral: Boolean!
    newsBusiness: Boolean!
    newsEntertainment: Boolean!
    newsHealth: Boolean!
    newsScience: Boolean!
    newsSports: Boolean!
    newsTechnology: Boolean!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
  }

  type Query{
    fetchUserbyId(input: userID!): User!
  }

  input CreateUserInput {
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    newsGeneral: Boolean!
    newsBusiness: Boolean!
    newsEntertainment: Boolean!
    newsHealth: Boolean!
    newsScience: Boolean!
    newsSports: Boolean!
    newsTechnology: Boolean!
  }

  input UpdateUserInput {
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    newsGeneral: Boolean
    newsBusiness: Boolean
    newsEntertainment: Boolean
    newsHealth: Boolean
    newsScience: Boolean
    newsSports: Boolean
    newsTechnology: Boolean
  }

  input userID{
    id: Int!
  }
`
