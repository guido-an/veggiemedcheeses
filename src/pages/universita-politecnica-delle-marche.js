import React from "react"
import Layout from "../components/layout"
import univpmLogo from "../images/univpm-logo.png"
import luciaPhoto from "../images/lucia-aquilanti.jpg"

const Univpm = () => (
  <Layout>
      <section className="partner-page-section container">
      <img src={univpmLogo} alt="univpm-logo"/>
      <p className="website"><a href="http://www.univpm.it/">www.univpm.it</a></p>
      <p><em>Role in the project:</em></p>
      <p><strong>Coordinator - Dipartimento di Scienze Agrarie, Alimentari ed Ambientali, Università Politecnica delle Marche (D3A-UNIVPM)</strong></p>
    <p>The Department of Agricultural, Food and Environmental Sciences (D3A), founded in July 2011, consists of 53 units of teaching staff and 21 units of technical and administrative staff. <br/><br/>It incudes: the Botanical Gardens "Selva di Gallignano", the Interdepartmental Centre for Landscape Research (CIRP), the Committee for University Sport (CUS) and the Didactic and Experimental Farm ‘Pasquale Rosati. D3A carries out scientific researches, university teaching and contract works in different research areas: agronomy, agricultural engineering and landscape, biochemistry, plant biology and forestry, chemical sciences, tree crops, agricultural genetics, food, industrial, and environmental microbiology, agricultural economic systems, physical sciences, food science and technology, soil sciences, animal production and plant protection.
<br/><br/>Role in the project: D3A-UNIVPM will coordinate the whole project (WP1, all tasks), will be leader of WP7 (all tasks) and will be involved in WP2 (all tasks), WP3 (all tasks), WP4 (all tasks), WP5 (tasks 5.1, 5.2, 5.3, 5.5, 5.6) and WP6 (all tasks) in a supportive role. 
<br/><br/> Competencies and experience relevant to the VEGGIE-MED-CHEESES project: D3A is a multidisciplinary department including (i) food microbiologists with at least 20-years expertise on basic and applied research in the field of dairy microbiology and molecular biology; (ii) agro-food economics and marketing reseachers with a vast experience in EU funded research projects; (iii) food technologists with a wide expertise in food science, food analysis and technology as well as in food chemical properties; (iv) biochemists with specific expertise  in enzymes purification and characterization; (v) agronomists with sustainable agronomical practices in rainfed Mediterranean cropping systems; (vi) botanists with vast experience in wild flora characterization. </p>
<div className="coordinator">

<p><strong>COORDINATOR and Principal Investigator of D3A-UNIVPM</strong><br/>
Prof. Lucia Aquilanti PhD<br/>
Dipartimento di Scienze Agrarie, Alimentari e Ambientali, Università Politecnica delle Marche <br/>
Via Brecce Bianche 60131, Ancona Italy<br/>
Email: l.aquilanti@univpm.it<br/>
Skype contact: lucia.aquilanti76<br/>
Phone: +39 071 2204959
</p>
<img src={luciaPhoto} width="200px"/>

</div>
    </section>
      <style jsx="true">{`
  
          .website{
            text-align: center;
            position: relative;
            bottom: 15px
          }
          img{
              margin: 0 auto;
              display: block
          }
           p {
              color: #777 !important;
              line-height: 25px
          }
          .coordinator{
              text-align: center;
              margin-top: 80px
          }
         
          }
          
          `}</style>
  </Layout>
)

export default Univpm
