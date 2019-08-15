import React from "react"
import Layout from "../components/layout"
import creaLogo from "../images/crea-logo.png" 


const Crea = () => (
  <Layout>
      <section className="partner-page-section container">
      <img src={creaLogo} alt="univpm-logo"/>
      <p className="website"><a href="http://www.crea.gov.it/">www.crea.gov.it</a></p>
      <p><em>Role in the project:</em></p>
      <p><strong>Consiglio per la ricerca in agricoltura e l’analisi dell’economia agraria - Centro di ricerca Alimenti e Nutrizione - short name: CREA-AN</strong></p>
    <p>CREA (Consiglio per la ricerca in agricoltura e l’analisi dell’economia agraria) is the leading Italian research organization focused on agri-food supply chains, supervised by the Ministry of Agricultural, Food and Forestry Policies (Ministero delle Politiche Agricole, Alimentari e Forestali, MiPAAF). CREA-AN (Centro di ricerca Alimenti e Nutrizione) is one of the 12 research centers of CREA. The expertise of CREA researchers is addressed towards agricultural, livestock, fish, forest, agro-industrial and nutritional fields and, morever, to the socio-economic field. With a multidisciplinary approach, CREA researchers deal with the great challenges of the XXI century related to food production sustainability following the principles of circular economy, bio-based economy and innovation transfer. CREA  has full scientific, statutory, organizational, administrative and financial autonomy.<br/><br/> The mission of CREA AN (Centro di ricerca Alimenti e Nutrizione) is addressed towards technological and nutritional enhancement of agri-food products. It is focused on the protection of human health, with particular reference to quality, functionality and food sustainability. It endorses food education campaigns by defining guidelines for the population and it provides scientific support on nutrition for the agri-food sector. 
    <br/><br/>Role in the project: it will be leader of WP5 (tasks 5.4, 5.5), and will be involved in WP1 (tasks 1.2, 1.4), WP4 (Task 4.1) and WP7 (all tasks) in a supportive role. 
Competencies and experience relevant to the VEGGIE-MED-CHEESE project: CREA-AN is a multidisciplinary research center, which performs studies for the technological and nutritional promotion of food products, with special emphasis on food quality, functionality and sustainability. <br/><br/>In thisproject CREA AN will take an active part with a research group (6 Researchers/Technologists and 3 Technical Collaborators for Research) with an extensive experience on nutritional quality of dairy products, organoleptic characteristics of food determined by sensory analysis (panel and consumer test) and instrumental methods (volatile compounds, texture profile, color characteristics). The scientists of CREA-AN research group have experience in coordination and participation in national and European research projecs.  </p>
<div className="coordinator">

<p><strong>COORDINATOR and Principal Investigator of CREA-AN</strong><br/>
Dr Pamela Manzi<br/>
Email: pamela.manzi@crea.gov.it<br/>
Skype contact: contact: pamskype3<br/>
Phone: +39 06 51494499
</p>


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
         
          
          `}</style>
  </Layout>
)

export default Crea
