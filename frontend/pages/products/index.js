import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Pagination from "../../components/Pagination";
import Product from "../../components/Product";
import { perPage } from "../../config";
import { ALL_PRODUCTS_QUERY } from "../../Graphql/queries/ProductsQueries";

const ProductsPage = () => {
  const router = useRouter();
  const { query } = router;
  const ProductsListStyles = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 0.8fr;
    grid-gap: 10px;
  `;
  const pageQuery = +query.page || 1;
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: { skip: pageQuery * perPage - perPage, first: perPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Pagination page={pageQuery} />
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
      <Pagination page={pageQuery} />
    </div>
  );
};

export default ProductsPage;
