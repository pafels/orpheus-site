import { useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GuidePage = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "mtb-markirovka" } }) {
        html
        tableOfContents(absolute: false, pathToSlugField: "id")
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Ръководство" />
      <h1>Ръководство за маркиране на маршрути за планинско колоездене</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: query.markdownRemark.tableOfContents,
        }}
      />
      <div
        className="guide"
        dangerouslySetInnerHTML={{
          __html: query.markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export default GuidePage
