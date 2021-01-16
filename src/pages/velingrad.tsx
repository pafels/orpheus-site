import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { VelingradQueryQuery } from "graphql-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const VELINGRAD_QUERY = graphql`
  query VelingradQuery {
    mdx(frontmatter: { title: { eq: "velingrad" } }) {
      body
    }
  }
`

const VelingradPage = (props: any) => {
  const query = useStaticQuery<VelingradQueryQuery>(VELINGRAD_QUERY)

  if (!query) return <div>Not found!</div>

  return (
    <Layout location={props.location.pathname}>
      <SEO title="Велинград" />
      <div class="mt-5">
        <h1>Байк център "Велинград" - сегментиране и маршрути</h1>
      </div>
      <div className="embed-responsive embed-responsive-1by1 mt-5">
        <iframe
          title="map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1N4eyP8qLkS3S-FI2UtY2lT6gJ-zPU_7a"
        ></iframe>
      </div>
      <div className="guide">
        <MDXRenderer>{query!.mdx!.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default VelingradPage
