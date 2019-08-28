import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import { Helmet } from "react-helmet"



export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Our Mission | VeggieMedCheeses</title>
      </Helmet>
      <Title title="NEWS" />
      <section className="container blog-section" style={{marginTop: "40px", marginBottom: "180px"}}>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div style={{marginBottom: "60px"}}>
            <h3>{node.title}</h3>
            <div className="blog-excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Link to={node.slug}>
              <p>> Read more</p>
            </Link>
            <div style={{borderBottom: "2px solid #f7f7f7", paddingTop: "20px"}}></div>
          </div>
        ))}
      </section>
      <style jsx="true">{`
          .blog-section{
              width: 95%;
              
          }
          .blog-excerpt{
              color: #777;
              position: relative;
              bottom: 10px
          }
          @media(min-width:1200px){
            .blog-section{
              width: 50%
          }
          }
          `}</style>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
