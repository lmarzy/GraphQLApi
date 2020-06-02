import { gql } from 'apollo-server';

import { bookTypeDefs, movieTypeDefs } from '../modules';

const typeDef = gql`
  type Query
`;

export const typeDefs = [typeDef, bookTypeDefs, movieTypeDefs];
