
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
      <Title title='Newsletter Repository' />

       <div className="container">
        <div className="newsletter-container">
            <h3>Newsletter 1</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-1.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 2</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-2.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 3</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-3.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 4</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-4.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 5</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-5.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 6</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-6.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 7</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-7.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 8</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-8.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 9</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-9.pdf" target="_blank">open link</a></p>
        </div>
        <div className="newsletter-container">
            <h3>Newsletter 10</h3>
            <p>Find out more: <a href="https://blog.veggiemedcheeses.com/wp-content/uploads/2021/12/NEWSLETTER-10.pdf" target="_blank">open link</a></p>
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

