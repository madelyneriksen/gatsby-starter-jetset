import React from "react"
import Layout from "../common/layout.js";
import Hero from "../hero/hero.js";
import Nav from "../nav/nav.js";
import About from "../about/about.js";
import Features from "../features/features.js";
import Contact from "../contact/contact.js";
import Footer from "../footer/footer.js";

export default () => (
  <Layout>
    <Hero />
    <Nav />
    <About />
    <Features />
    <Contact />
    <Footer />
  </Layout>
)
