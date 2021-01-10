import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GuideQueryQuery } from "graphql-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GUIDE_QUERY = graphql`
  query GuideQuery {
    mdx(frontmatter: { title: { eq: "guide" } }) {
      body
      tableOfContents(maxDepth: 4)
    }
  }
`

const GuidePage = () => {
  const query = useStaticQuery<GuideQueryQuery>(GUIDE_QUERY)

  if (!query) return <div>Not found!</div>

  return (
    <Layout tableOfContents={query!.mdx!.tableOfContents}>
      <SEO title="Правилник" />
      <div className="guide">
        <MDXRenderer>{query!.mdx!.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default GuidePage
