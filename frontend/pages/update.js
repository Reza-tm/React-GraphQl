import React from "react";
import UpdateProduct from "../components/UpdateProduct";

const update = ({ query }) => {
  return <UpdateProduct id={query} />;
};

export default update;
