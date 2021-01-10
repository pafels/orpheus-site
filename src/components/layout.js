import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Header from "./header"
import { TableOfContents } from "./tableOfContents"

const Layout = ({ tableOfContents, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {tableOfContents ? (
        <main>
          <Container>
            <Row>
              <Col lg={8}>{children}</Col>
              <Col lg={4} className="d-none d-sm-none d-md-none d-lg-block">
                <div className="sticky-top orph-toc">
                  <TableOfContents tableOfContents={tableOfContents} />
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      ) : (
        <main>
          <Container>{children}</Container>
        </main>
      )}
      <footer className="footer mt-auto py-3">
        <Container>
          <span className="text-muted">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </span>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
