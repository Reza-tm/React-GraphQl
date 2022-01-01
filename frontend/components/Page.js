import React from "react";
import propTypes from "prop-types";
import Header from "../components/Header";

const Page = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Page;

Page.propTypes = {
  children: propTypes.any,
};
