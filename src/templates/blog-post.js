import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node

  return (
    <Layout>
    <div>
          {post.featured_media ? (
               <img className="blog-image" src={post.featured_media.source_url} style={{width: "100%", height:"auto"}}/>
          ) : (
             <div></div>
          )}
        <div className="blog-post">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <style jsx="true">{`
          .blog-post p{
              color: #777;
              margin: 0 10px
          }
          .blog-post h1{
              text-align: center;
              margin-top: 40px
          }
          .blog-image{
                  max-width: 700px;
                  display: block;
                  margin: 0 auto;
                  border-radius: 4px;
                  box-shadow: rgba(12, 5, 5, 0.4) 0px 0px 20px 0px;
                  
              }
          @media(min-width:1200px){
              .blog-image{
                  max-width: 700px;
              }
              .blog-post{
                  width: 50%;
                  margin: 0 auto
              }
          }
          `}</style>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          featured_media {
            source_url
          }
        }
      }
    }
  }
`