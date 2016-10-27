export const rootSchema = [`
  type Query {
    hello: String,
    currentUser: User
  },
  type Mutation {
    setHello (
      newHello: String!
    ): [String]
  }`];

export const rootResolvers = {
  Query: {
    hello(root, args, context) {
      return context.hello;
    },
    currentUser(root, args, context) {
      return {};
    }
  },
  Mutation: {
    setHello(root, args, context) {
      context.hello = args.newHello;
      return ['error'];
    }
  }
};
