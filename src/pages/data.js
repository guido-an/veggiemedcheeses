import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import { Helmet } from "react-helmet"


const Data = () => (
    <Layout>
    <Helmet>
      <title>Data | VeggieMedCheeses</title>
    </Helmet>
        <Title title="PILOT ON OPEN RESERCH DATA"/>
        <div className="data-wrapper container">
        <div>
          <p>
          <strong>VEGGIE-MED-CHEESES</strong> will participate in the Pilot on Open Research Data and will generate a mix of qualitative and quantitative data, including: 
          <span>1.</span> Morphological information about spontaneous thistle populations growing in different Mediterranean areas will be collected to identify different species and potentially ecotypes growing in different Mediterranean areas<br/>
          <span>2.</span> Genetic information about distribution of SSR markers  in different thistle ecotypes<br/> 
          <span>3.</span> Agronomic information to evaluate yields of sustainable thistle crops<br/>
          <span>4.</span> Environmental (soil parameters, air temperature, rainfall) information to complement the agronomic information<br/>
          <span>5.</span> Chemical, biochemical and technological information about milk clotting ability and bioactive compounds contained in the aqueous extracts obtained from both spontaneous and cultivated thistles 
          </p>
        </div>
        <div>
          <p>
          <span>6.</span> Chemical and biochemical information about milk clotting ability of new proteases purified from the aqueous extracts<br/>
          <span>7.</span> Physico-chemical, chemical, microbiological, textural and sensory information to verify quality and safety of thistle-curdled cheese prototypes and to identify new biomarkers to demonstrate their quality/authenticity<br/>
          <span>8.</span> Qualitative data about consumers’ awareness, attitudes and preferences attitudes towards cheeses curdled with plant-based rennet substitutes<br/>
          <span>9.</span> Interviews and surveys from Mediterranean crop producers and dairy industries<br/><br/>
          A link to view, search and download the data will be available soon.

          </p>
        </div>
        
      </div>
      <style jsx="true">{`
      .data-wrapper{
          padding: 0 10px;
          line-height: 25px;
      }
      p {
        color: #777;
      }

      .data-wrapper div {
        text-align: left;
      }
      .data-wrapper div span{
          color: #79a43d;
          font-weight: bold;
          margin-top: 10px;
          display: inline-block;
          font-size: 17px
      }
      .data-wrapper div:nth-child(2) {
          margin-top: 40px;
          
      }

      @media (min-width: 1200px) {
        .data-wrapper {
          display: flex;
          margin: 0 auto;
          padding: 10px
        }
        .data-wrapper div {
          width: 50%;
          margin: 0 20px
        }
        .data-wrapper div:nth-child(2) {
          margin-top: 0px;
      }
          `}</style>
    </Layout>
    
)

export default Data