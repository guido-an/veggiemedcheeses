import React from "react"
import cardoFlower from "../images/cardo-flower.jpg"
import { Link } from "gatsby"

let backgroundImage = {
  width: "100%",
  height: "640px",
  backgroundImage: `url(${cardoFlower})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}

let aboutRight = {
  backgroundColor: "#79a43d",
  color: "white",
  width: "100%",
}

let myDivider = {
  width: "80px",
  border: "2px solid #fff",
  position: "relative",
  bottom: "20px",
}

let pStyle = {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px" 
}
const AboutTeam = () => (
  <section id="about-section">
    <div style={backgroundImage} className="half-section"></div>
    <div style={aboutRight} className="half-section">
      <div id="about-right-container">
        <h2>ABOUT US</h2>
        <div style={myDivider}></div>
        <p style={pStyle}>
          The Mediterranean is home of many world-famed traditional cheeses,
          which are increasingly demanded in their veg-friendly versions, that
          is without animal rennet. At the same time, with almost 12,000 of its
          species found nowhere else, the Mediterranean Basin is considered to
          be one of the planet’s biodiversity ‘hotspots’, due to the region’s
          high level of endemism. The aim of Veggie Med Cheeses is to study and
          build upon existing cheese making technologies in order to: valorize
          traditional and typical local cheeses by meeting the world-wide
          increase demand of cheeses made by non-animal rennet; assess the
          technological and socio-economic viability of the utilization and
          valorization of spontaneous herbaceous plans in the Mediterranean as
          traditional alternatives to animal rennet; build up traditional
          knowledge and culinary heritage while establishing the conditions for
          better control of safety and quality of these traditional cheese and
          then to improve the traditional cheese-making value chain.
        </p>
        <Link to="/team" id="about-right-link">> OUR TEAM </Link>
        
      </div>
    </div>
    <style jsx="true">{`
        #about-right-container{
            padding: 80px 20px;
        }
        #about-right-link{
          font-weight: 700;
          color: white;
          position: relative;
          top: 20px;
          padding-bottom: 80px;
          display: block
        }
      @media (min-width: 1200px) {
        #about-section {
          display: flex;
        }
        #about-right-container {
          margin: 60px 60px;
          padding: 0
        
        }
        .half-section {
          max-width: 50%;
        }
        .half-section img {
          width: 100%;
          height: auto;
        }
        #about-right-link{
            padding-bottom: 0
        }
      }
    `}</style>
  </section>
)

export default AboutTeam
