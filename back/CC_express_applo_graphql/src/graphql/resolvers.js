import user from "../db/models/user.js";
import StatusCode from "../constants/statusCode.js";

const resolvers = {
  Query: {
    users: async () => {
      const result = await user.selectAll();
      return result.data;
    },
  },

  Mutation: {
    addUser: async (_, { userId, userName }) => {
      const result = await user.insert(userId, userName);
      return result.code === StatusCode.OK ? true : false;
    },
  },
};

export default resolvers;