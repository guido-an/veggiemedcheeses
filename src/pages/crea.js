import React from "react"
import Layout from "../components/layout"
import creaLogo from "../images/crea-logo.png"
import ProfileImg from "../components/profileImg"
import Divider from "../components/divider"
import pamelaManzi from "../images/pamela-manzi.jpg"
import mariaDiCostanzo from "../images/maria-di-costanzo.jpg"
import nicolettaNardo from "../images/nicoletta-nardo.jpg"
import paoletti from "../images/paoletti.jpg"
import ritota from "../images/ritota.jpg"
import marina from "../images/marina-peparaio.jpg"
import elisabetta from "../images/elisabetta-moneta.jpg"
import antonio from "../images/antonio-raffo.jpg"
import fiorella from "../images/fiorella-sinesio.jpg"

const Crea = () => (
  <Layout>
    <section className="partner-page-section container">
      <img src={creaLogo} alt="univpm-logo" />
      <p className="website">
        <a href="http://www.crea.gov.it/">www.crea.gov.it</a>
      </p>
      <div className="text-container">
        <p>
          <em>Role in the project:</em>
        </p>
        <p>
          <strong>
            Consiglio per la ricerca in agricoltura e l’analisi dell’economia
            agraria - Centro di ricerca Alimenti e Nutrizione - short name:
            CREA-AN
          </strong>
        </p>
        <p className="text">
          CREA (Consiglio per la ricerca in agricoltura e l’analisi
          dell’economia agraria) is the leading Italian research organization
          focused on agri-food supply chains, supervised by the Ministry of
          Agricultural, Food and Forestry Policies (Ministero delle Politiche
          Agricole, Alimentari e Forestali, MiPAAF). CREA-AN (Centro di ricerca
          Alimenti e Nutrizione) is one of the 12 research centers of CREA. The
          expertise of CREA researchers is addressed towards agricultural,
          livestock, fish, forest, agro-industrial and nutritional fields and,
          morever, to the socio-economic field. With a multidisciplinary
          approach, CREA researchers deal with the great challenges of the XXI
          century related to food production sustainability following the
          principles of circular economy, bio-based economy and innovation
          transfer. CREA has full scientific, statutory, organizational,
          administrative and financial autonomy.
          <br />
          <br /> The mission of CREA AN (Centro di ricerca Alimenti e
          Nutrizione) is addressed towards technological and nutritional
          enhancement of agri-food products. It is focused on the protection of
          human health, with particular reference to quality, functionality and
          food sustainability. It endorses food education campaigns by defining
          guidelines for the population and it provides scientific support on
          nutrition for the agri-food sector.
          <br />
          <br />
          Role in the project: it will be leader of WP5 (tasks 5.4, 5.5), and
          will be involved in WP1 (tasks 1.2, 1.4), WP4 (Task 4.1) and WP7 (all
          tasks) in a supportive role. Competencies and experience relevant to
          the VEGGIE-MED-CHEESE project: CREA-AN is a multidisciplinary research
          center, which performs studies for the technological and nutritional
          promotion of food products, with special emphasis on food quality,
          functionality and sustainability. <br />
          <br />
          In thisproject CREA AN will take an active part with a research group
          (6 Researchers/Technologists and 3 Technical Collaborators for
          Research) with an extensive experience on nutritional quality of dairy
          products, organoleptic characteristics of food determined by sensory
          analysis (panel and consumer test) and instrumental methods (volatile
          compounds, texture profile, color characteristics). The scientists of
          CREA-AN research group have experience in coordination and
          participation in national and European research projecs.{" "}
        </p>
      </div>
      <div className="coordinator">
        <p className="text">
          <strong>COORDINATOR and Principal Investigator of CREA-AN</strong>
          <br />
          Dr Pamela Manzi
          <br />
          Email: pamela.manzi@crea.gov.it
          <br />
          Skype contact: contact: pamskype3
          <br />
          Phone: +39 06 51494499
        </p>
        <img
          src={pamelaManzi}
          style={{
            borderRadius: "50%",
            boxShadow: "0px 0px 20px 0px rgba(12,5,5,0.4)",
          }}
        />
        <h2 style={{ marginTop: "80px" }}>TEAM MEMBERS</h2>
        <Divider />

        <div className="team-container" style={{ marginTop: "20px" }}>
          <ProfileImg
            img={mariaDiCostanzo}
            name="Dr. Maria Di Costanzo"
            organization="CREA"
          />
          <ProfileImg
            img={nicolettaNardo}
            name="Nicoletta Nardo"
            organization="CREA"
          />
          <ProfileImg
            img={paoletti}
            name="Dr. Flavio Paoletti"
            organization="CREA"
          />
          <ProfileImg img={ritota} name="Dr. Mena Ritota" organization="CREA" />
        </div>
        <div className="team-container" style={{ marginTop: "20px" }}>
          <ProfileImg img={marina} name="Marina Peparaio" organization="CREA" />
          <ProfileImg
            img={elisabetta}
            name="Elisabetta Moneta"
            organization="CREA"
          />
          <ProfileImg
            img={antonio}
            name="Dr. Antonio Raffo"
            organization="CREA"
          />
          <ProfileImg
            img={fiorella}
            name="Dr. Fiorella Sinesio"
            organization="CREA"
          />
        </div>
      </div>
    </section>
    <style jsx="true">{`
      .website {
        text-align: center;
        position: relative;
        bottom: 15px;
      }
      img {
        margin: 0 auto;
        display: block;
      }
      .text {
        color: #777;
        line-height: 26px;
      }

      .coordinator {
        text-align: center;
        margin-top: 80px;
      }

      @media (min-width: 1200px) {
        .team-container {
          display: flex;
          justify-content: space-around;
        }
      }
    `}</style>
  </Layout>
)

export default Crea
