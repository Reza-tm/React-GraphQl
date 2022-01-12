import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import DisplayError from "../../components/ErrorMessage";
import { FIND_SINGLE_PRODUCT } from "../../Graphql/queries/ProductsQueries";
import Head from "next/head";
import router, { useRouter } from "next/router";

const product = ({ query }) => {
  console.log(query);
  const router = useRouter();
  const ProductStyles = styled.div`
    display: grid;

    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    max-width: 1000px;
    justify-content: center;
    align-items: top;
    gap: 2rem;
    img {
      width: 100%;
      object-fit: contain;
    }
  `;
  const { data, loading, error } = useQuery(FIND_SINGLE_PRODUCT, { variables: { id: query.id } });
  if (loading) return <p>loading ...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {Product.name}</title>
      </Head>
      <img src={Product.photo.image.publicUrlTransformed} alt={Product.photo.altText} />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
        <p onClick={() => router.push({ pathname: `/update/`, query: { id: query.id } })}>Edit ✏️</p>
      </div>
    </ProductStyles>
  );
};

export default product;
