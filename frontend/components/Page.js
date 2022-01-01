import React from 'react';
import propTypes from 'prop-types';

const Page = ({ children }) => (
  <div>
    <h1>hello</h1>
    {children}
  </div>
);

export default Page;

Page.propTypes = {
  children: propTypes.any,
};
