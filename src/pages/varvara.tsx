import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { VarvaraQueryQuery } from "graphql-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const VARVARA_QUERY = graphql`
  query VarvaraQuery {
    mdx(frontmatter: { title: { eq: "varvara" } }) {
      body
    }
  }
`

const VarvaraPage = (props: any) => {
  const query = useStaticQuery<VarvaraQueryQuery>(VARVARA_QUERY)

  if (!query) return <div>Not found!</div>

  return (
    <Layout location={props.location.pathname}>
      <SEO title="Варвара" />
      <div className="guide">
        <MDXRenderer>{query!.mdx!.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default VarvaraPage
