import { gql } from "apollo-boost";

// Type Definition
export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

// @client - tells Apollo that its coming from a client side (Local Cache not Backend)
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _context, _info) => {
      const data = _context.cache.readQuery({
        query: GET_CART_HIDDEN,
      });

      _context.cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !data.cartHidden },
      });

      return !data.cartHidden;
    },
  },
};
