
import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import GalleryPage from '../components/galleryPage'
import { Helmet } from 'react-helmet'

export default () => {

  return (
    <Layout>
      <Helmet>
        <title>Our Mission | VeggieMedCheeses</title>
      </Helmet>
      <Title title='Gallery' />
       <div className="containerGallery">
          <GalleryPage/>
        </div>
        
      <style jsx='true'>{`
          .containerGallery {
              position: relative;
              bottom: 80px
          }
     `}
      </style>
    </Layout>
  )
}

