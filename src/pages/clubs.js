import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function TeamPage() {
  const query = useStaticQuery(graphql`
    query {
      alabak: file(relativePath: { eq: "orgs/alabak.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bikearea: file(relativePath: { eq: "orgs/bikearea.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mtbBg: file(relativePath: { eq: "orgs/mtb-bg.jpg" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kriva: file(relativePath: { eq: "orgs/kriva.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      trynskotd: file(relativePath: { eq: "orgs/trynskotd.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bikeventures: file(relativePath: { eq: "orgs/bikeventures.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      endurowarriors: file(relativePath: { eq: "orgs/endurowarriors.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      shturkur: file(relativePath: { eq: "orgs/shturkur.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vratsa: file(relativePath: { eq: "orgs/vratsa.jpg" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Организации" />
      <h1>Организации, подкрепящи инициативата</h1>
      <div className="card-columns">
        <ClubCard
          title="Сдружение Vratsa Trails"
          image={query.vratsa.childImageSharp.fixed}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ClubCard>
        <ClubCard
          title=""
          image={query.alabak.childImageSharp.fixed}
        >
        </ClubCard>
        <ClubCard
          title="Сдружение Байкария"
          image={query.bikearea.childImageSharp.fixed}
        >
        </ClubCard>
        <ClubCard
          title=""
          image={query.bikeventures.childImageSharp.fixed}
        >
        </ClubCard>
        <ClubCard
          title=""
          image={query.trynskotd.childImageSharp.fixed}
        >
        </ClubCard>
        <ClubCard
          title=""
          image={query.shturkur.childImageSharp.fixed}
        >
        </ClubCard>
        <ClubCard title="МТБ-БГ" image={query.mtbBg.childImageSharp.fixed}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ClubCard>

        <ClubCard
          title="Велоклуб Крива Спица"
          image={query.kriva.childImageSharp.fixed}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ClubCard>
      </div>
    </Layout>
  )
}

function ClubCard({ image, title, children }) {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <Img fixed={image} />
        </div>
        <div>
          <h5>{title}</h5>
          {children}
        </div>
      </div>
    </div>
  )
}
