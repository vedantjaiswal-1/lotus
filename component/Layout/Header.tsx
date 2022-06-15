import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  UncontrolledDropdown,
} from "reactstrap";

import AuthService from "../Services/AuthService/AuthService";
import i18n from "../../i18n";

export const Header = () => {
  const [lng, setLng] = useState("English");

  const changeLanguageAction = (lng: any) => {
    i18n.changeLanguage(lng);

    if (lng === "en") {
      setLng("English");
    } else if (lng === "मराठी") {
      setLng("मराठी");
    }
  };
  return (
    <React.Fragment>
      <Navbar
        color="white"
        expand="md"
        light
        fixed="top"
        className="no-printme"
      >
        <NavbarBrand href="/dashboard/">
          <h2>Lotus Inn</h2>
        </NavbarBrand>

        <Nav>
          <NavbarText>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle
                caret
                nav
                suppressHydrationWarning
                className="text-primary"
              >
                {lng}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={() => changeLanguageAction("en")}>
                  English
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguageAction("मराठी")}>
                  मराठी
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarText>
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
