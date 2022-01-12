import gql from "graphql-tag";

export const DELETE_SINGLE_PRODUCT = gql`
  mutation DELETE_SINGLE_PRODUCT($id: ID!) {
    deleteProduct(id: $id) {
      name
      id
    }
  }
`;
