import React from "react"
import Button from "./button"


const Hero = () => (

  <section className="hero">
    <div className="hero-wrapper">
      <h1>
        The new era of <span>cheese</span>
      </h1>
      <p>New vegetarian-friendly versions of mediterranean cheeses</p>
      <Button link="/mission" linkName="OUR MISSION"></Button>
    
    </div>
    <style jsx="true">
      {`
        .hero {
          text-align: center;
          height: 80vh;
          display: flex;
          justify-content: center;
        }
        .hero-wrapper{
          margin-top: 140px
        }
        h1 {
          text-transform: uppercase;
          padding: 0;
          margin: 0;
          font-size: 40px
        }
        span {
          color: #79a43d;
        }
        p {
          font-weight: 600;
          font-size: 18px;
          position: relative;
          bottom: 10px
        }
       
        @media (min-width: 1200px) {
          h1 {
            font-size: 58px;
          }
        }
      `}
    </style>
  </section>
  
)

export default Hero
