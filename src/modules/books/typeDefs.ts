import { gql } from 'apollo-server';

export const bookTypeDefs = gql`
  type Book {
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
  }
`;
