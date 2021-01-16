import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MapPage = () => (
  <Layout>
    <SEO title="Карта" />
    <h1>Карта на маркирани отсечки и маршрути в България</h1>
    <div className="embed-responsive embed-responsive-1by1">
      <iframe
        title="map"
        src="https://www.google.com/maps/d/embed?mid=1zp_1a2HLBEf4s_bPPf5-jq0IHMGw4LHg"
      ></iframe>
    </div>
  </Layout>
)

export default MapPage
