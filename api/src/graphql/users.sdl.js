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
    icon: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
  }
  type Query {
    fetchUserbyId(id: Int!): User! @skipAuth
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
    icon: String
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
    icon: String
  }
`
