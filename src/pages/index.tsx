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
      <SEO title="Начало" />

      <div className="mt-5">
        <Carousel
          activeIndex={sliderIndex}
          onSelect={onSlideAdvanced}
          controls={false}
          indicators={false}
          keyboard={false}
        >
          <Carousel.Caption>
            <h2>
              Ръководство и единен стандарт за маркиране на маршрути за
              планинско колоездене
            </h2>
          </Carousel.Caption>
          {query.images.nodes.map(image => (
            <Carousel.Item key={image.id}>
              <Img fluid={image.childImageSharp!.fluid! as any} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div>
        <h1>За проекта</h1>
        <div className="mt-3">
          <p>
            Създаването и популяризирането на единен стандарт за маркиране на
            маршрути за планинско колоездене в България, е инициатива на четири
            български организации с дългогодишен опит в планинското колездене.
          </p>
          <p>
            Проектът има за цел да предложи и утвърди консистентен и гъвкав
            стандарт за маркиране, с оглед на следните принципи:
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
