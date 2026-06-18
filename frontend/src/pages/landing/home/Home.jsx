import React from "react";
import {
  Hero,
  Awards,
  Stats,
  Pricing,
  Education,
  OpenAccount,
  InvestEverything
} from "../../../components/component_index";

function Home() {
  return (
    <>
      <Hero />
      <InvestEverything />
      <Awards />
      <Stats />
      {/* <Pricing /> */}
      <Education />
      <OpenAccount />
    </>
  );
}

export default Home;
