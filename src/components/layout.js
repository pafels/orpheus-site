/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
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
          <div className="container">
            <div className="row">
              <div className="col-lg-8">{children}</div>
              <div className="col-lg-4 d-none d-sm-none d-md-none d-lg-block">
                <div className="sticky-top orph-toc">
                  <TableOfContents tableOfContents={tableOfContents} />
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main>
          <div className="container">{children}</div>
        </main>
      )}
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
