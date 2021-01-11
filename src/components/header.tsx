import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

const Header = () => {
  console.log(window.location.href.includes("varvara"))
  return (
    <header>
      <Nav className="bg-light">
        <Navbar>
          <ul className="navbar-nav">
            <HeaderLink title="Начало" to="/" />
            <HeaderLink title="Правилник" to="/guide" />
            <HeaderLink title="Полезни съвети" to="/advices" />
            <NavDropdown
              id="examples"
              title="Примери"
              active={window.location.href.includes("varvara")}
            >
              <NavDropdown.Item>
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/varvara"
                >
                  Варвара
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <HeaderLink title="Карта" to="/map" />
            <HeaderLink title="Организации" to="/clubs" />
            <HeaderLink title="Екип" to="/team" />
          </ul>
        </Navbar>
      </Nav>
    </header>
  )
}

const HeaderLink = ({ title, to }: { title: string; to: string }) => (
  <Nav.Item as="li">
    <Link className="nav-link" activeClassName="active" to={to}>
      {title}
    </Link>
  </Nav.Item>
)

export default Header
