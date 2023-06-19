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
    newsHealth: Boolean!
    newsScience: Boolean!
    newsSports: Boolean!
    newsTechnology: Boolean!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
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
    newsHealth: Boolean!
    newsScience: Boolean!
    newsSports: Boolean!
    newsTechnology: Boolean!
  }
`;
