import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav">
        <HeaderLink title="Вкъщи" to="/" />
        <HeaderLink title="Ръководство" to="/guide" />
        <HeaderLink title="Екип" to="/team" />
        <HeaderLink title="Карта" to="/map" />
      </ul>
    </nav>
  </header>
)

const HeaderLink = ({ title, to }) => (
  <li className="nav-item">
    <Link className="nav-link" activeClassName="active" to={to}>
      {title}
    </Link>
  </li>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
