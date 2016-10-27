import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { rootSchema, rootResolvers } from './root';
import { userSchema, userResolvers } from './user';

const schema = [
  ...rootSchema,
  ...userSchema,
];
const resolvers = merge(
  rootResolvers,
  userResolvers,
);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});
export { executableSchema as Schema};
