import { useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GuidePage = () => {
  const query = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { title: { eq: "guide" } }) {
        body
        tableOfContents(maxDepth: 4)
      }
    }
  `)

  return (
    <Layout tableOfContents={query.mdx.tableOfContents}>
      <SEO title="Ръководство" />
      <h1>Ръководство за маркиране на маршрути за планинско колоездене</h1>
      <div className="guide">
        <MDXRenderer>{query.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default GuidePage
