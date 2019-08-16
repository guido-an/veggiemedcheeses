import React from "react"


import Layout from "../components/layout"

import Hero from "../components/hero"
import Gallery from "../components/gallery"
import WhyThistle from "../components/whyThistle"
import AboutTeam from "../components/aboutTeam"
import { Helmet } from 'react-helmet';

const IndexPage = () => (
  <Layout>
  
    <Helmet>
          <title>VeggieMedCheeses | The New Era of Cheese</title>
      </Helmet>
    <Hero/>
    <AboutTeam/>
    <WhyThistle/>
    <Gallery/>
  </Layout>
)

export default IndexPage
