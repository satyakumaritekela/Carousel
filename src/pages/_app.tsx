import React from "react";
import GlobalStyle from '../styles/globalStyles';

// Wrap the app with the provider in _app.tsx
import { AppProps } from "next/app";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
