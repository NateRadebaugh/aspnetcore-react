import { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import Link from "next/link";

export function NavMenu() {
  const [collapsed, setCollapsed] = useState(true);

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  return (
    <header className="menu">
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} href="/">
            AspNetCoreReact
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" href="/counter">
                  Counter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" href="/fetch-data">
                  Fetch data
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
