import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Gallery from "../components/gallery"
import WhyThistle from "../components/whyThistle"
import AboutTeam from "../components/aboutTeam"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <AboutTeam/>
    <WhyThistle/>
    <Gallery/>
  </Layout>
)

export default IndexPage
