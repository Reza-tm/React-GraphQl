import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import { ALL_PRODUCTS_QUERY } from "../Graphql//queries/ProductsQueries";

const ProductsPage = () => {
  const ProductsListStyles = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 0.8fr;
    grid-gap: 10px;
  `;
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductsListStyles>
      {data.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListStyles>
  );
};

export default ProductsPage;
