import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Page from "../components/Page";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: radnika ;
  src: url(/static/radnikanext-medium-webfont.woff2) format('woff2'); font-weight: normal; font-style: normal;
}
html{
  --red :#ff0000;
  --black:#393939;
  --gray:#3a3a3a;
  --lightGray:#e1e1e1;
  --offWhite:#ededed;
  --bs : 0 12px 24px 0 rgba(0 , 0 ,0 ,0.09) ;
  box-sizing: border-box;
}
* , *::after , *::before {
  box-sizing: inherit;
}
body{font-family:'radnika' ; padding: 0;margin: 0;font-size: 1.5rem;line-height: 2;}
`;

const MainApp = ({ Component, pageProps }) => (
  <Page>
    <GlobalStyles />
    <Component {...pageProps} />
  </Page>
);

export default MainApp;
