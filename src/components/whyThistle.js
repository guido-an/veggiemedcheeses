import React from "react"

const WhyThistle = () => (
  <section id="thistle" className="thistle-container">
    <div>
      <h2>
        VEGGIE MED CHEESES SPECIF <span>CHALLENGES</span>
      </h2>

      <p className="thistle-subtitle">
        The project wants to valorize local mediterranean high-value cheeses,
        namely Caciofiore, Torta del Caser, Questo de Murcia and Feta. Veggie
        Med Cheeses has 5 main specify challenges that are:
      </p>
    </div>
    <div className="container" id="why-thistle">
      <div className="why-box">
        <span>1</span>
        <strong>Heritage preservation</strong>
        <p>
          Preservation of Mediterranean cheese-making heritage, by acquiring and
          organizing the relevant information on biological/
          nutritional/technological value of the thistle aqueous extracts used
          as milk coagulants and the local thistle-curdled cheeses.
        </p>
      </div>
      <div className="why-box"></div>
      <div className="why-box">
        <span>2</span>
        <strong>Quality and Sustainability</strong>
        <p>
          Increase quality and sustainability of thistle-curdled cheeses by
          implementing a sustainable agronomic system for cultivation of
          thistles species/ecotypes producing milk coagulating proteases, in
          rainfed Mediterranean environments under zero-minimal input.{" "}
        </p>
      </div>
      <div className="why-box"></div>
      <div className="why-box">
        <span>3</span>
        <strong>Technological innovation</strong>
        <p>
          Exploitation of technological innovations in matter of milk clotting
          agents and cheese-making procedures for the production of new
          high-value Mediterranean cheeses.
        </p>
      </div>
      <div className="why-box"></div>
      <div className="why-box">
        <span>4</span>
        <strong>Potential biomarkers</strong>
        <p>
          Individuation of potential biomarkers for demonstration of quality
          and/or authenticity of Mediterranean thistle-curdled cheeses.{" "}
        </p>
      </div>
      <div className="why-box"></div>
      <div className="why-box">
        <span>5</span>
        <strong>New business opportunity</strong>
        <p>
          Exploration of new business opportunities able to meet the increasing
          demand of consumers, small holders and SMEs for diversified, high
          quality, safe, and healthy cheeses.{" "}
        </p>
      </div>
    </div>
    <style jsx="true">{`
      .thistle-container {
        margin-top: 120px;
        margin-bottom: 40px
      }
      .thistle-container h2 {
        text-align: center;
      }
      .thistle-subtitle{
        color: #212529;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        position: relative;
        bottom: 20px
      }

      .thistle-container span {
        color: #79a43d;
        text-align: center
      }
      #why-thistle {
        margin-top: 60px;
      }
      .why-box {
        padding-top: 20px;
      }
      .why-box span {
        font-size: 32px;
        font-weight: bold;
        display: block;
        color: #fbe233;
        font-size: 54px;
        opacity: 20%;
        
      }
      .why-box strong {
        font-size: 18px;
        text-align: center;
        display: block
        
      }
      .why-box p {
        color: #777;
        text-align: center;
        font-weight: 400;
        font-size: 16px
      }

      @media only screen and (min-width: 1200px) {
        #why-thistle {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }
        .thistle-subtitle {
          width: 50%;
          margin: 0 auto;
        }
        .why-box {
          padding-top: 0;
        }
      }
    `}</style>
  </section>
)

export default WhyThistle
