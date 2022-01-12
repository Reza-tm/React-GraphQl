import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query {
    allProducts {
      id
      name
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export const FIND_SINGLE_PRODUCT = gql`
  query findSingleProduct($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
