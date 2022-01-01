import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: var(--red);
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid var(--black);
    align-items: center;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid var(--black);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
