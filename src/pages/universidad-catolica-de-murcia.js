import React from "react"
import Layout from "../components/layout"
import murciaLogo from "../images/universidad-murcia-logo.png"
import luisPhoto from "../images/luis-tejada.jpg"

const Ucam = () => (
  <Layout>
      <section className="container">
      <img src={murciaLogo} alt="murcia-logo"/>
      <p className="website"><a href="http://www.ucam.edu/">www.ucam.edu</a></p>
      <div className="text-container">
      <p><em>Role in the project:</em></p>
      <p><strong>Departamento de Tecnologia de Alimentos y Nutrición, Universidad Católica San Antonio de Murcia (short name: UCAM)</strong></p>
    <p>UCAM is a private university with 20 years of history and more than 16.000 students that offers 30 prominent European official graduations, 52 Master programs, 4 PhD programs and other prestigious titles. UCAM also offers a modern system of distance teaching.<br/><br/> UCAM is strongly linked with the work world through study plans adapted to market exigencies, obligatory internships in institutions and enterprises in every program and research programs in collaboration with regional, national and multinational companies. <br/><br/>The major aims of UCAM are: (i) teaching higher education as a spreading vehicle of science, technology, culture and as a training method for researchers and preparation of professionals who can help in the development of the individual and society; (ii) contributing to the cultural, social and economic development of society and to the creation of conditions to improve the quality of life and the environment by developing the skills of the students; (iii) updating its qualifications and teaching and non-teaching services in order to meet external customers and students’ expectations and needs, ensuring a future. (iv) promoting the relationships with other universities and companies to provide students with professional opportunities, specializations and research in a borderless world.<br/><br/> Since 2012, UCAM counts also with a specific Office for International project (OPRI) linked to the Vice-rectorate of Research, responsible for the management of international research projects. It aims at supporting the researchers in all the activities related to with project life cycle. A Unit for Scientific and Cultural Dissemination is dedicated to communication and dissemination activities for scientific research. OPRI has a wide experience in projects management activities: writing of proposals, administrative and financial follow-up, coordination, reporting, dissemination, communication and exploitation of results strategies and evaluation plans.<br/><br/> In this proposal, the technical implementation will be carried out by the research group “Industrial processing technology and cooking food”. Their specialty is the cooperation in industrial R&D projects in the areas of: (i) 	Development of new dairy and meat products; (ii) Processes for the production of dairy products through the use of plant enzymes; (iii) Process of obtaining bioactive peptides through the use of plant enzymes; (iv) 	Optimization and improvement of technology for the elaboration of cured dairy and meat products. (v) Development of packaging technologies for perishable foods and ready meals. (vi) Sensory evaluation of food: panels of tasters and consumers. (vii) Changes in the composition of foods to improve their nutritional profile and sensory quality.(viii) Utilization of essential fatty acids in obtaining healthy foods.
Role in the project: will be leader of WP4 (tasks 4.2, 4.3, 4.5), and will be involved in WP1 (tasks 1.2 and 1.4), WP5 (task 5.1, 5.2, 5.3, 5.4, 5.5), WP6 (all tasks) and WP7 (all tasks) in a supportive role. Competencies and experience relevant to the VEGGIE-MED-CHEESE project: UCAM is a multidisciplinary department. Two groups within this Department will take part to the Research project.<br/><br/> The first group includes Food Technologists, with a great expertise in food science and technology as well as in food chemical analysis. The second group includes staff with experience in physico-chemical, chemical, biochemical, microbiological and sensory characterization of cheeses obtained from enzymes obtained from both spontaneous (Cynara cardunculus, Cynara humilis) and cultivated (Cynara scolymus) thistles.</p>
</div>
<div className="coordinator">

<p><strong>COORDINATOR and Principal Investigator of UCAM</strong><br/>
Prof. Luis Tejada Portero<br/>
Email: ltejada@ucam.edu<br/>
Skype contact: luistejadaportero<br/>
Phone: 968278612
</p>
<img src={luisPhoto} style={{borderRadius: "50%",  boxShadow:"0px 0px 20px 0px rgba(12,5,5,0.4)"}}/>

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

export default Ucam
