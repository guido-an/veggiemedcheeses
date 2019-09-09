import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import PartnerBox from "../components/partnerBox"
import univpmLogo from "../images/univpm-logo.png"
import murciaLogo from "../images/universidad-murcia-logo.png"
import creaLogo from "../images/crea-logo.png"
import sousseLogo from "../images/sousse-logo.jpg"
import hellenicLogo from "../images/hellenic-logo.png"
import teamEurope from "../images/team-europe.jpg"
import { Helmet } from "react-helmet"

const Team = () => (
    <Layout>
    <Helmet>
      <title>Our Team | VeggieMedCheeses</title>
    </Helmet>
        <div>
    <Title title="OUR TEAM"/>
    <p id="subtitle-team">The VEGGIE-MED-CHEESES consortium consists of 5 Partner organizations based in 4 Mediterranean countries (Italy: Coordinator and P1; Spain: P2; Greece: P3; and Tunisia: P4) where traditional cheese making is an important element of goat and sheep farmers food value chains.</p>
    </div>
    <section id="team-section" className="container">
        <div id="section-1">
        <PartnerBox img={univpmLogo} name="Università Politecnica delle Marche" websiteName="www.univpm.it" websiteUrl="http://www.univpm.it/" url="/universita-politecnica-delle-marche"/>
        <PartnerBox img={murciaLogo} name="Universidad Católica San Antonio De Murcia" websiteName="www.ucam.edu" websiteUrl="http://www.ucam.edu" url="/universidad-catolica-de-murcia"/>
        <PartnerBox img={creaLogo} name="Consiglio per la ricerca in agricoltura" websiteName="www.crea.gov.it" websiteUrl="http://www.crea.gov.it/" url="/crea"/>
        </div>
        <div id="section-2">
        <PartnerBox img={hellenicLogo} name="Hellenic Agricultural Organization" websiteName="www.elgo.gr" websiteUrl="http://excellence.minedu.gov.gr/thales/en/institutions/hellenic-agricultural-organization-demeter" url="/hellenic-agricultural-organization"/>
        <PartnerBox img={sousseLogo} name="Sousse University" websiteName="www.uc.rnu.tn" websiteUrl="http://www.uc.rnu.tn" url="/sousse-university"/>
     </div>
     <div>
         <p>The geographi coverage of the VEGGIE-MED-CHEESES consortium is shown in the following figure: </p>
         <img className="team-img" src={teamEurope} alt="team-europe"/>
         </div>

     </section>
     <style jsx="true">{`
         #subtitle-team{
             color: #777;
             text-align: center;
         }
         #team-section{
             margin-top: 80px
         }
         p{
             color: #777;
             text-align:center;
         }
         #section-2{
            margin-top: 60px;
             margin-bottom: 120px
         }
         .team-img{
             display: block;
             margin: 0 auto;
             position: relative;
             left: 10px
         }
         @media(min-width:1200px){
             #subtitle-team{
                 width: 60%;
                 margin: 0 auto;
             }
            #section-1{
             display: flex;
             justify-content: center;

         }
         #section-2{
             display: flex;
             justify-content: center;
         }

         a{
             margin-bottom: -15px !important
         }
         }

         `}</style>
     </Layout>
)



export default Team
