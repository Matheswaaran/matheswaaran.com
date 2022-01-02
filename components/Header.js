import React from "react";
import Head from "next/head";

const Header = (props) => {
  return (
    <Head>
      <title>Home - matheswaaran.com</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@matheswaaran_s" />
      <meta name="twitter:creator" content="@matheswaaran_s" />
      <meta property="og:url" content="https://matheswaaran.com/" />
      <meta property="og:title" content="All about Mat" />
      <meta
        property="og:description"
        content="Things Mat(Me) has done so far 😁"
      />
      <meta
        property="og:image"
        content="https://matheswaaran.com/images/me.JPG"
      />
    </Head>
  );
};

export default Header;
