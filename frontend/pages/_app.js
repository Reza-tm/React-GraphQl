import React from "react";
import Page from "../components/Page";

const MainApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MainApp;
