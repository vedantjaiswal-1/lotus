import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";

import profile from "../../public/images/avatar-1.jpg";
export const Header = () => {
  return (
    <React.Fragment>
      <Navbar color="white" expand="md" light fixed="top">
        <NavbarBrand href="/">
          <h2>Lotus Inn</h2>
        </NavbarBrand>

        <Nav>
          <NavbarText>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Admin
              </DropdownToggle>
              <DropdownMenu end >
                <DropdownItem>
                  <Link href="/">Logout</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarText>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
