import React from "react";
import propTypes from "prop-types";
import Header from "../components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
`;

const Page = ({ children }) => (
  <div>
    <Header />
    <Wrapper>{children}</Wrapper>
  </div>
);

export default Page;

Page.propTypes = {
  children: propTypes.any,
};
