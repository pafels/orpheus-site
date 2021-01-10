import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav">
        <HeaderLink title="Начало" to="/" />
        <HeaderLink title="Правилник" to="/guide" />
        <HeaderLink title="Полезни съвети" to="/advices" />
        <HeaderLink title="Карта" to="/map" />
        <HeaderLink title="Организации" to="/clubs" />
        <HeaderLink title="Екип" to="/team" />
      </ul>
    </nav>
  </header>
)

const HeaderLink = ({ title, to }: { title: string; to: string }) => (
  <li className="nav-item">
    <Link className="nav-link" activeClassName="active" to={to}>
      {title}
    </Link>
  </li>
)

export default Header
