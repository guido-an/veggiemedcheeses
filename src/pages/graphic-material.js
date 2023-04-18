
import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import { Helmet } from 'react-helmet'

export default () => {

  return (
    <Layout>
      <Helmet>
        <title>Our Mission | VeggieMedCheeses</title>
      </Helmet>
      <Title title='Graphic Materials'/>
       <div className="container">
        <div className="newsletter-container">
            <h3>Project Downloadable Flyer</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2023/04/Project-downloadable-flyer.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Project Printable Trifold Flyer</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2023/04/Project-printable-trifold-flyer.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Printable Final Workshop Agenta Trifold-Flyer</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2023/04/Printable-final-workshop-agenta-trifold-flyer.pdf" target="_blank">open link</a></p>
        </div>
       </div>
      
      <style jsx='true'>{`
           .container {
               padding: 0 8%;
           }
           .newsletter-container {
            padding-bottom: 20px;
            border-bottom: 3px solid #fafafa
        }
           .newsletter-container h3 {
               font-size: 18px
           }
           .newsletter-container p {
            color: #777
           }
           .newsletter-container a {
            color: #222
           }
           @media(min-width: 900px){
               .container {
                   margin: 0 10%;
                   
               }
               
           }
     `}
      </style>
    </Layout>
  )
}

