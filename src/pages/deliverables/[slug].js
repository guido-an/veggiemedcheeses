import React from "react"
import Layout from "../../components/layout"
import Title from "../../components/title"
import { Helmet } from "react-helmet"

export default props => {
  const { location } = props
  const info = location?.state?.node

  const hasContent = info?.content

  return (
    <Layout>
      <Helmet>
        <title>Our Mission | VeggieMedCheeses</title>
      </Helmet>
      <Title title={info?.title || "Deliverables"} />
      {hasContent ? (
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: info?.content }}
        ></div>
      ) : (
        <div className="no-info">No info found</div>
      )}

      <style jsx="true">
        {`
          .no-info {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .container {
            padding: 0 8%;
          }

          .container a:hover {
            text-decoration: underline;
          }

          .newsletter-container {
            padding-bottom: 20px;
            border-bottom: 3px solid #fafafa;
          }
          .newsletter-container h3 {
            font-size: 18px;
          }
          .newsletter-container p {
            color: #777;
          }
          .newsletter-container a {
            color: #222;
          }
          @media (min-width: 900px) {
            .container {
              margin: 0 10%;
            }
          }
        `}
      </style>
    </Layout>
  )
}
