import { useQuery } from "@apollo/client";
import React from "react";
import { PAGINATION_QUERY } from "../Graphql/queries/PaginationQueries";
import PaginationStyles from "../components/styles/PaginationStyles";
import DisplayError from "./ErrorMessage";
import { perPage } from "../config";
import Head from "next/head";
import Link from "next/link";

const Pagination = ({ page }) => {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);
  if (loading) return "Loading...";
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pagesNumber = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits -- page {page}</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>←</a>
      </Link>
      <p>
        Page {page} of {pagesNumber}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pagesNumber}>→</a>
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
