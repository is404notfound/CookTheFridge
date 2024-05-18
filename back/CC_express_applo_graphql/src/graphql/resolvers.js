import user from "../db/models/user.js";
import cuisines from "../db/models/cuisines.js";
import ingredients from "../db/models/ingredients.js";
import StatusCode from "../constants/statusCode.js";

const resolvers = {
  Query: {
    users: async () => {
      const result = await user.selectAll();
      return result.data;
    },
    user: async (_, { userId }) => {
      const result = await user.select(userId);
      return result.data[0];
    },
    cuisines: async () => {
      const result = await cuisines.selectAll();
      return result.data;
    },
    ingredients: async () => {
      const result = await ingredients.selectAll();
      return result.data;
    }
  },

  Mutation: {
    postUser: async (_, { userId, userName }) => {
      const result = await user.insert(userId, userName);
      return result.code === StatusCode.OK ? true : false;
    },
    postIngredient: async (_, { id, name, image }) => {
      const result = await ingredients.insert(id, name, image);
      return result.code === StatusCode.OK ? true : false;
    },
    postCuisine: async (_, { id, name, ingredients, image, tags, description }) => {
      const result = await cuisines.insert(id, name, ingredients, image, tags, description);
      return result.code === StatusCode.OK ? true : false;
    },
    deleteIngredient: async (_, { id }) => {
      const result = await ingredients.delete(id);
      return result.code === StatusCode.OK ? true : false;
    }
  },
};

export default resolvers;