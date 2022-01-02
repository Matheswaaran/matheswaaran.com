import React from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <TopNavigationBar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
