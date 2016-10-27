export const userSchema = [`
  type User {
    emailAddress: String,
    userName: String
  }`];

export const userResolvers = {
  User: {
    emailAddress(root, args, context) {
      return 'the email address';
    },
    userName(root, args, context) {
      return 'the user name';
    }
  }
};
