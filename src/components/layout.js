/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
import { Toc } from "./toc"

const Layout = ({ toc, children }) => {
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
      {toc ? (
        <main>
          <div className="container">
            <div className="row">
              <div className="col-9">{children}</div>
              <div className="col-3 d-none d-sm-none d-md-none d-lg-block">
                <Toc items={toc} />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
