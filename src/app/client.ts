import { createNetworkInterface } from 'apollo-client';

import ApolloClient from 'apollo-client';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:3000/graphql'),
});
