import React from "react";
import Page from "../components/Page";
import NProgress from "nprogress";
import "../components/styles/nprogress.css";
import { Router } from "next/router";
import withData from "../lib/withData";
import { ApolloProvider } from "@apollo/client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MainApp = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

export default withData(MainApp);
