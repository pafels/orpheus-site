import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GuidePage = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "7b9f8455-2f7f-5cef-8795-122f60a71e92" } } # filter: { id: { eq: "1fd538a8-1889-5776-9c21-b4d0f777259b" } }
      ) {
        nodes {
          html
          tableOfContents
        }
      }
    }
  `)

  console.log(query.allMarkdownRemark.nodes[0].tableOfContents)

  return (
    <Layout>
      <SEO title="Ръководство" />
      <div
        dangerouslySetInnerHTML={{
          __html: query.allMarkdownRemark.nodes[0].html,
        }}
      />
    </Layout>
  )
}

export default GuidePage
