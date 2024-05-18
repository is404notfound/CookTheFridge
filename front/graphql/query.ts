import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql',
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export const GET_INGREDIENTS = gql`
  query {
    ingredients {
      id
      name
      image
    }
  }
`;

export const POST_INGREDIENT = gql`
  mutation postIngredient($id: Int, $name: String, $image: String) {
    postIngredient(id: $id, name: $name, image: $image)
  }
`;

export const DELETE_INGREDIENT = gql`
  mutation deleteIngredient($id: Int) {
    deleteIngredient(id: $id)
  }
`;