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
