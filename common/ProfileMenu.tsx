import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

// users
import user1 from "../public/images/avatar-1.jpg";
import Image from "next/image";
import Link from "next/link";

export const ProfileMenu = (props: any) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setusername] = useState("Admin");

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser") as string);
        setusername(obj.displayName);
      } else if (process.env.REACT_APP_DEFAULTAUTH === "fake" || process.env.REACT_APP_DEFAULTAUTH === "jwt") {
        const obj = JSON.parse(localStorage.getItem("authUser") as string);
        setusername(obj.username);
      }
    }
  }, [props.success]);

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle className="btn header-item " id="page-header-user-dropdown" tag="button">
          <Image
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Avtar"
            height={40}
            width={40}
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <Link href="/">
            <div className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
              <span>Logout</span>
            </div>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
};
