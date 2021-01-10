import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { IndexSliderImagesQueryQuery } from "graphql-types"
import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const INDEX_SLIDER_IMAGES_QUERY = graphql`
  query IndexSliderImagesQuery {
    images: allFile(filter: { relativeDirectory: { eq: "index-slider" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 1140, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const query = useStaticQuery<IndexSliderImagesQueryQuery>(
    INDEX_SLIDER_IMAGES_QUERY
  )

  const [sliderIndex, setSliderIndex] = useState(1)

  const onSlideAdvanced = (index: number) => {
    setSliderIndex(index == 0 ? index + 1 : index)
  }

  return (
    <Layout>
      <SEO title="Home" />

      <Carousel
        activeIndex={sliderIndex}
        onSelect={onSlideAdvanced}
        controls={false}
        indicators={false}
        keyboard={false}
      >
        <Carousel.Caption>
          <h2>Ръководството</h2>
        </Carousel.Caption>
        {query.images.nodes.map(image => (
          <Carousel.Item key={image.id}>
            <Img fluid={image.childImageSharp!.fluid! as any} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        <h1>За Ръководството</h1>
        <div className="mt-3">
          Nulla faucibus facilisis egestas. Vestibulum in porttitor enim.
          Integer eu condimentum libero. Nunc commodo neque lectus, et vulputate
          ipsum euismod pretium. Etiam dignissim ante at diam tincidunt, sed
          commodo magna placerat. Nam volutpat lectus et diam vehicula pretium
          nec quis sem. Cras tempor porta dui in ultrices.
        </div>
      </div>
      <div className="mt-5">
        <h2>Цели</h2>
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
