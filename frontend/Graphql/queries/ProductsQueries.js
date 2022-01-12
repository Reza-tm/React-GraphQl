import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query ($skip: Int = 0, $first: Int) {
    allProducts(skip: $skip, first: $first) {
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
