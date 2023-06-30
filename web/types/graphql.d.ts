import { Prisma } from "@prisma/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
};

export type CreateUserInput = {
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  newsBusiness: Scalars['Boolean'];
  newsEntertainment: Scalars['Boolean'];
  newsGeneral: Scalars['Boolean'];
  newsHealth: Scalars['Boolean'];
  newsScience: Scalars['Boolean'];
  newsSports: Scalars['Boolean'];
  newsTechnology: Scalars['Boolean'];
  resetToken?: InputMaybe<Scalars['String']>;
  resetTokenExpiresAt?: InputMaybe<Scalars['DateTime']>;
  salt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
};


export type MutationcreateUserArgs = {
  input: CreateUserInput;
};


export type MutationupdateUserArgs = {
  id: Scalars['Int'];
  input: UpdateUserInput;
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  fetchUserbyId: User;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
};


/** About the Redwood queries. */
export type QueryfetchUserbyIdArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  newsBusiness?: InputMaybe<Scalars['Boolean']>;
  newsEntertainment?: InputMaybe<Scalars['Boolean']>;
  newsGeneral?: InputMaybe<Scalars['Boolean']>;
  newsHealth?: InputMaybe<Scalars['Boolean']>;
  newsScience?: InputMaybe<Scalars['Boolean']>;
  newsSports?: InputMaybe<Scalars['Boolean']>;
  newsTechnology?: InputMaybe<Scalars['Boolean']>;
  resetToken?: InputMaybe<Scalars['String']>;
  resetTokenExpiresAt?: InputMaybe<Scalars['DateTime']>;
  salt?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  newsBusiness: Scalars['Boolean'];
  newsEntertainment: Scalars['Boolean'];
  newsGeneral: Scalars['Boolean'];
  newsHealth: Scalars['Boolean'];
  newsScience: Scalars['Boolean'];
  newsSports: Scalars['Boolean'];
  newsTechnology: Scalars['Boolean'];
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiresAt?: Maybe<Scalars['DateTime']>;
  salt: Scalars['String'];
};

export type UserVariables = Exact<{
  id: Scalars['Int'];
}>;


export type User = { __typename?: 'Query', fetchUserbyId: { __typename?: 'User', newsGeneral: boolean, newsBusiness: boolean, newsEntertainment: boolean, newsHealth: boolean, newsScience: boolean, newsSports: boolean, newsTechnology: boolean } };

export type EditUserMutationVariables = Exact<{
  General: Scalars['Boolean'];
  Business: Scalars['Boolean'];
  Entertainment: Scalars['Boolean'];
  Health: Scalars['Boolean'];
  Science: Scalars['Boolean'];
  Sports: Scalars['Boolean'];
  Technology: Scalars['Boolean'];
  Username: Scalars['Int'];
}>;


export type EditUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', newsGeneral: boolean } };
