import React from 'react'
import img from '../images/pensiero-per-sivlia.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <SEO title='For Silvia' />
    <div className='container'>

      <h1>For Silvia</h1>

      <p>I don't remember exactly the day and the place where Silvia told me for the first time about thistles, extracts and cheeses from our mountains, but I know for sure that it is thanks to her that this project took shape, it allowed us to meet, get to know each other and grow personally and professionally.
      </p>
      <p>It is to her that my thoughts go at every step forward in our research activities and it is to her that I would like to dedicate every goal that we can achieve</p>
      <p>We miss you so much Silvia ...</p>
      <p style={{
        marginTop: '40px'
      }}
      >Non ricordo esattamente il giorno e il luogo in cui Silvia mi ha raccontato per la prima volta di cardi, estratti e formaggi delle nostre Montagne, ma so per certo che è grazie a lei che questo progetto ha preso forma, ci ha permesso di incontrarci, conoscerci e crescere personalmente e professionalmente.
      </p>
      <p>E’ a lei che vanno i miei pensieri ad ogni passo in avanti nelle nostre attività di Ricerca ed è a lei che vorrei dedicare ogni piccolo o grande traguardo che insieme riusciremo a raggiungere</p>
      <p>Ci manchi tanto Silvia…</p>
      <img src={img} width='100%' height='auto' />
    </div>
  </Layout>
)
