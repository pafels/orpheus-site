import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ThankYouImagesQueryQuery } from "graphql-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const THANK_YOU_IMAGES_QUERY = graphql`
  query ThankYouImagesQuery {
    file(relativePath: { eq: "contacts-side.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const ThankYouPage = () => {
  const query = useStaticQuery<ThankYouImagesQueryQuery>(THANK_YOU_IMAGES_QUERY)

  return (
    <Layout>
      <SEO title="Контакти" />

      <div className="row-md mt-5">
        <div className="col-md-6 mt-2">
          <h3>Благодарим за съобщението!</h3>
          <h6>Ще се свържем с вас при първа възможност.</h6>
        </div>
        <div className="col-md-6 mt-2">
          <Img fluid={query.file!.childImageSharp!.fluid as any} />
        </div>
      </div>
    </Layout>
  )
}

export default ThankYouPage
