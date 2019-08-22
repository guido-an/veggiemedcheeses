import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import conceptImg from "../images/concept.png"
import { Helmet } from "react-helmet"




const Concept = () => (
  <Layout>

  <Helmet>
      <title>Our Concept | VeggieMedCheeses</title>
    </Helmet>
    <section className="concept">
      <Title title="CONCEPT"/>
      <div className="concept-wrapper container">
        <div>
          <p>
          VEGGIE-MED-CHEESES involves a multi-actor approach to review, assess and disseminate innovations in thistle-curdled cheese-making in Mediterranean marginal areas. This multi-actor approach means that scientific partners and key stakeholders will combine to design, conduct and disseminate the research. The research will produce new knowledge with the intention to develop and design innovative solutions that can be incorporated into the cheese-making industry. The work plan is articulated in 7 strictly interrelated work packages (WPs), each resulting in a number of key deliverables.
          </p>
        </div>
        <div>
          <p>
          Smooth functioning of the research activities foreseen in these WPs will be guaranteed thanks to the activities planned in WP1 (Project Management). The 7 WPs will have the common aim to inform the sheep/goat dairy farms and dairy processors of the Mediterranean basin about how to improve current cheese-making operations involving thistle-derived rennet and, when appropriate, to use vegetable rennet to efficiently substitute animal rennet.

          </p>
        </div>
        
      </div>
      <img src={conceptImg} alt="concept-veggie-cheese"/>
    
    </section>

    <style jsx="true">{`
      .concept-wrapper{
          padding: 0 10px;
          line-height: 25px;
      }
      p {
        color: #777;
      }

      .concept-wrapper div {
        text-align: left;
      }
      .concept-wrapper div span{
          color: #79a43d;
          font-weight: bold;
          margin-top: 10px;
          display: inline-block;
          font-size: 17px
      }
      .concept-wrapper div:nth-child(2) {
          margin-top: 40px;
          
      }
      .concept img{
          max-width: 90%;
          margin: 0 auto;
          display: block
      }
      @media (min-width: 1200px) {
        .concept-wrapper {
          display: flex;
          margin: 0 auto;
          padding: 10px
        }
        .concept-wrapper div {
          width: 50%;
          margin: 0 20px
        }
        .concept-wrapper div:nth-child(2) {
          margin-top: 0px;
      }
      .specific-objectives{
          margin-top: -10px !important;
          color: #292929 !important
      }
      .concept img{
          max-width: 60%;
          
      }
      }
    `}</style>
  </Layout>
)

