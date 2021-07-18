import React from "react";
import { Impress, Step } from 'react-impressjs';
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Impress progress={true} fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}>
      <Step
        className={'without_id_is_ok'}
        data={{
          x:-1000,
          y:-1500
        }}
      >
        <h1>Steps</h1>
      </Step>
      <Step
        data={{
          y:-1500
        }}
        duration={1500}
      >
        <h1>Any Element write in Step!</h1>
        <hr />
        <p>Made by your <b>Creativity</b> !!</p>
      </Step>
    </Impress>
  </Layout>
)

export default IndexPage
