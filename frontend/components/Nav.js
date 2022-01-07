import React from "react";
import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => {
  return (
    <NavStyles>
      <Link href="/products">products</Link>
      <Link href="/account">account</Link>
      <Link href="/order">order</Link>
      <Link href="/sell">sell</Link>
    </NavStyles>
  );
};

export default Nav;
