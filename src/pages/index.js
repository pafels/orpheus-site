import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>За Ръководството</h1>
      <div className="mt-3">
        Nulla faucibus facilisis egestas. Vestibulum in porttitor enim. Integer
        eu condimentum libero. Nunc commodo neque lectus, et vulputate ipsum
        euismod pretium. Etiam dignissim ante at diam tincidunt, sed commodo
        magna placerat. Nam volutpat lectus et diam vehicula pretium nec quis
        sem. Cras tempor porta dui in ultrices.
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

export default IndexPage
