import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"


const Mission = () => (
  <Layout>
    <SEO title="Mission" />
    <section className="mission">
  <Title title="MISSION"/>
      <div className="mission-wrapper container">
        <div>
          <p>
            The Mediterranean is home of many world-famed traditional cheeses,
            which are increasingly demanded in their veg-friendly versions, that
            is without animal rennet (Vegetarian Times, 2016,
            <a href="http://www.vegetariantimes.com/"> http://www.vegetariantimes.com/</a>).<br/> At the same time, with almost
            12,000 of its species found nowhere else, the Mediterranean Basin is
            considered to be one of the planet’s biodiversity ‘hotspots’, due to
            the region’s high level of endemism (Blondel et al, 2010). <br/>
            
            The aim of VEGGIE-MED-CHEESES is to study and build upon existing cheese
            making technologies in order to:<br/><span>1.</span> Valorize traditional and typical
            local cheeses by meeting the world-wide increase in the demand of
            cheeses made by non-animal rennet; <br/><span>2.</span> Assess the technological and
            socio-economic viability of the utilization and valorization of
            spontaneous herbaceous plants in the Mediterranean as traditional
            alternatives to animal rennet; <br/> <span>3.</span> Build upon traditional knowledge and
            culinary heritage while establishing the conditions for better
            control of safety and quality of these traditional cheeses;<br/><span>4. </span> Improve
            the traditional cheese-making value chain.
          </p>
        </div>
        <div>
          <p>
            Specific objectives are:<br/><span>1. </span> Acquiring in-depth knowledge on different
            thistle species and ecotypes candidates for possible use as
            milk-clotting agents;<br/><span>2. </span> Developing sustainable agronomic practices for
            thistle cultivation in the Mediterranean basin; <br/><span>3. </span> Characterizing
            thistle aqueous crude extracts (CEs) for selection of milk clotting
            agents with the most promising characteristics for exploitation in
            cheese-making;<br/><span>4. </span> Exploiting CEs for manufacturing of both local
            cheeses traditionally manufactured with thistle rennet and local
            cheeses traditionally manufactured with other coagulating agents;<br/><span>5. </span> Assessing the consumer needs, preferences and acceptance towards
            these cheeses and the potential value chain improvements.
          </p>
        </div>
      </div>
    </section>

    <style jsx="true">{`
     
      .mission-wrapper{
          
          line-height: 25px;
          margin: 0 20px
      }
      p {
        color: #777;
      }

      .mission-wrapper div {
        text-align: left;
      }
      .mission-wrapper div span{
          color: #79a43d;
          font-weight: bold;
          margin-top: 10px;
          display: inline-block;
          font-size: 17px
      }
      .mission-wrapper div:nth-child(2) {
          margin-top: 40px;
          
      }
      @media (min-width: 1200px) {
        .mission-wrapper {
          display: flex;
          margin: 0 auto;
          padding: 10px
        }
        .mission-wrapper div {
          width: 50%;
          margin: 0 20px
        }
        .mission-wrapper div:nth-child(2) {
          margin-top: 0px;
      }
      .specific-objectives{
          margin-top: -10px !important;
          color: #292929 !important
      }
      }
    `}</style>
  </Layout>
)

export default Mission