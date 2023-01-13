import React from "react";

import classes from "./header.module.scss";
import Logo from "../images/logo";
import IconSearch from "../images/iconSearch";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.LogoIconWrapper}>
        <Logo />
      </div>
      <div className={classes.SearchIconWrapper}>
        <IconSearch />
      </div>
    </div>
  );
};
export default Header;
