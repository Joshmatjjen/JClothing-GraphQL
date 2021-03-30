import React from "react";
import { Query } from "@apollo/react-components";
import gql from "graphql-tag";
import Header from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data: { cartHidden } }) => <Header hidden={cartHidden} />}
  </Query>
);

export default HeaderContainer;
