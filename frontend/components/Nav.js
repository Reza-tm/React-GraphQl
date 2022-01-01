import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <Link href="/account">account</Link>
      <Link href="/order">order</Link>
      <Link href="/product">product</Link>
      <Link href="/sell">sell</Link>
    </div>
  );
};

export default Nav;
