import React from "react"
import Layout from "../components/layout"
import ProfileImg from "../components/profileImg"
import Divider from "../components/divider"
import univpmLogo from "../images/univpm-logo.png"
import luciaPhoto from "../images/lucia-aquilanti.jpg"

import clementiFrancesca from "../images/clementi-francesca.jpg"
import mariaDiCostanzo from "../images/maria-di-costanzo.jpg"
import massimoMozzon from "../images/massimo-mozzon.jpg"
import nadiaRaffaelli from "../images/nadia-raffaelli.jpg"
import andreaOsimani from "../images/andrea-osimani.jpg"
import luciaAquilanti2 from "../images/lucia-aquilanti-2.jpg"
import fabioTaffetani from "../images/fabio-taffetani.jpg"
import robertoOrsini from "../images/roberto-orsini.jpg"
import silviaZitti from "../images/silvia-zitti.jpg"
import simonaCasavecchia from "../images/simona-casavecchia.jpg"
import zanoli from "../images/zanoli.jpg"

const Univpm = () => (
  <Layout>
    <section className="partner-page-section container">
      <img src={univpmLogo} alt="univpm-logo" />
      <p className="website">
        <a href="http://www.univpm.it/">www.univpm.it</a>
      </p>
      <div className="text-container">
        <p>
          <em>Role in the project:</em>
        </p>
        <p>
          <strong>
            Coordinator - Dipartimento di Scienze Agrarie, Alimentari ed
            Ambientali, Università Politecnica delle Marche (D3A-UNIVPM)
          </strong>
        </p>
        <p style={{ color: "#777" }}>
          The Department of Agricultural, Food and Environmental Sciences (D3A),
          founded in July 2011, consists of 53 units of teaching staff and 21
          units of technical and administrative staff. <br />
          <br />
          It incudes: the Botanical Gardens "Selva di Gallignano", the
          Interdepartmental Centre for Landscape Research (CIRP), the Committee
          for University Sport (CUS) and the Didactic and Experimental Farm
          ‘Pasquale Rosati. D3A carries out scientific researches, university
          teaching and contract works in different research areas: agronomy,
          agricultural engineering and landscape, biochemistry, plant biology
          and forestry, chemical sciences, tree crops, agricultural genetics,
          food, industrial, and environmental microbiology, agricultural
          economic systems, physical sciences, food science and technology, soil
          sciences, animal production and plant protection.
          <br />
          <br />
          Role in the project: D3A-UNIVPM will coordinate the whole project
          (WP1, all tasks), will be leader of WP7 (all tasks) and will be
          involved in WP2 (all tasks), WP3 (all tasks), WP4 (all tasks), WP5
          (tasks 5.1, 5.2, 5.3, 5.5, 5.6) and WP6 (all tasks) in a supportive
          role.
          <br />
          <br /> Competencies and experience relevant to the VEGGIE-MED-CHEESES
          project: D3A is a multidisciplinary department including (i) food
          microbiologists with at least 20-years expertise on basic and applied
          research in the field of dairy microbiology and molecular biology;
          (ii) agro-food economics and marketing reseachers with a vast
          experience in EU funded research projects; (iii) food technologists
          with a wide expertise in food science, food analysis and technology as
          well as in food chemical properties; (iv) biochemists with specific
          expertise in enzymes purification and characterization; (v)
          agronomists with sustainable agronomical practices in rainfed
          Mediterranean cropping systems; (vi) botanists with vast experience in
          wild flora characterization.{" "}
        </p>
      </div>

      <div className="coordinator">
        <p style={{ color: "#777" }}>
          <strong>COORDINATOR and Principal Investigator of D3A-UNIVPM</strong>
          <br />
          Prof. Lucia Aquilanti PhD
          <br />
          Dipartimento di Scienze Agrarie, Alimentari e Ambientali, Università
          Politecnica delle Marche <br />
          Via Brecce Bianche 60131, Ancona Italy
          <br />
          Email: l.aquilanti@univpm.it
          <br />
          Skype contact: lucia.aquilanti76
          <br />
          Phone: +39 071 2204959
        </p>
        <img
          src={luciaAquilanti2}
          style={{
            borderRadius: "50%",
            boxShadow: "0px 0px 20px 0px rgba(12,5,5,0.4)",
          }}
        />

        <h2 style={{ marginTop: "80px" }}>TEAM MEMBERS</h2>
        <Divider />

        <div className="team-container" style={{ marginTop: "20px" }}>
          <ProfileImg
            img={clementiFrancesca}
            name="Prof. Francesca Clementi"
            organization="Università Politecnica delle Marche"
          />
          <ProfileImg
            img={massimoMozzon}
            name="Prof. Massimo Mozzon"
            organization="Università Politecnica delle Marche"
          />
          <ProfileImg
            img={nadiaRaffaelli}
            name="Prof. Nadia Raffaelli"
            organization="Università Politecnica delle Marche"
          />
        </div>
        <div className="team-container" style={{ marginTop: "20px" }}>
          <ProfileImg
            img={andreaOsimani}
            name="Prof. Andrea Osimani"
            organization="Università Politecnica delle Marche"
          />
          <ProfileImg
            img={fabioTaffetani}
            name="Prof. Fabio Taffetani"
            organization="Università Politecnica delle Marche"
          />
          <ProfileImg
            img={robertoOrsini}
            name="Prof. Roberto Orsini"
            organization="Università Politecnica delle Marche"
          />
        </div>
        <div className="team-container" style={{ marginTop: "20px" }}>
          <ProfileImg
            img={silviaZitti}
            name="Prof. Silvia Zitti"
            organization="Università Politecnica delle Marche"
          />
          <ProfileImg
            img={simonaCasavecchia}
            name="Prof. Simona Casavecchia"
            organization="Università Politecnica delle Marche"
          />
          <ProfileImg
            img={zanoli}
            name="Prof. Raffaele Zanoli"
            organization="Università Politecnica delle Marche"
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

export default Univpm
