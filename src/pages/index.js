import React from "react"
import Layout from "../common/layout.js";
import Hero from "../hero/hero.js";
import Nav from "../nav/nav.js";
import About from "../about/about.js";
import Features from "../features/features.js";

export default () => (
  <Layout>
    <Hero />
    <Nav />
    <About />
    <Features />
  </Layout>
)
