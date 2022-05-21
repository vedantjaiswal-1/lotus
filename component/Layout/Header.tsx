import Link from "next/link";
import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  UncontrolledDropdown
} from "reactstrap";

import AuthService from "../Services/AuthService/AuthService";
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
              <DropdownToggle caret nav suppressHydrationWarning>
                {AuthService.getUserName()}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <Link href="/">
                    <a
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.href = "/";
                      }}
                    >
                      Logout
                    </a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarText>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
