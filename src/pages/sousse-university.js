import React from "react"
import Layout from "../components/layout"
import sousseLogo from "../images/sousse-logo.jpg"
import bouthaina from "../images/bouthaina.jpg"



const Sousse = () => (
  <Layout>
      <section className="partner-page-section container">
      <img src={sousseLogo} alt="univpm-logo"/>
      <p className="website"><a href="http://www.uc.rnu.tn">www.uc.rnu.tn</a></p>
      <div className="text-container">
      
    <p>The Higher Agronomic Institute of Chott-Mariem is an institution of teaching and agronomic research. It has 25 ha of experimental plots, including 10 ha certified organic, laboratories and research units and especially human resources, particularly PhD students who carry out their research work in line with the projects. Role in the project: will be leader of WP2 (all tasks) and WP3 (all tasks), and will be involved in WP1 (tasks 1.2 and 1.4) and WP7 (all tasks) in a supportive role. 
<br/><br/>Competencies and experience relevant to the project: ISA-CM is composed of researchers specializing in horticulture, botany, ecology and eco-physiology, with a documented expertise in the assessment of cardoon genetic variability in the Mediterranean basin. This group will be able to characterize ecotypes of wild cardoons and thistles, both in Tunisia and other Mediterranean countries involved in the Project (Spain, Greece). 
</p>
</div>
<div className="coordinator">
     <p><strong>COORDINATOR and Principal Investigator of ISA-CM</strong><br/>
     Prof. Bouthaina Dridi Al Mondes<br/>
     Email: bouthaina2@yahoo.com<br/>
     Skype contact: Al Mohandes Dridi Bouthaina<br/>
     Phone:  00 216 73 327 546
     </p>
     <img src={bouthaina} style={{borderRadius: "50%",  boxShadow:"0px 0px 20px 0px rgba(12,5,5,0.4)"}}/>


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
          .hellenic-section li{
              list-style: circle
          }
        
          
          `}</style>
  </Layout>
)

export default Sousse
