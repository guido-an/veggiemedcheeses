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
      <section className="container">
        <Title title="NEWS" />

        {data.allWordpressPost.edges.map(({ node }) => (
          <div style={{ marginBottom: "60px" }}>
            <h3>{node.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Link to={node.slug}>
            <p>> Read more</p>
          </Link>
          </div>
        ))}

        
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost{
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
// export const pageQuery = graphql`
//   query {
//     allWordpressPost(sort: { fields: [date] }) {
//       edges {
//         node {
//           title
//           excerpt
//           slug
//         }
//       }
//     }
//     allWordpressWpMedia {
//         edges {
//           node {
//             source_url
//           }
//         }
//       }
//   }
// `