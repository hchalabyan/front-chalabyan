import React, { Fragment, useState } from "react";

import classes from "./mobileMenu.module.scss";
import IconHamburger from "../images/iconHamburger";
import IconClose from "../images/IconClose";
import Logo from "../images/logo";
import IconArrow from "../images/IconArrow";
const menuItem = [
  {
    ids: 0,
    title: "Demos",
  },
  {
    ids: 1,
    title: "Post",
  },
  {
    ids: 2,
    title: "Features",
  },
  {
    ids: 3,
    title: "Categories",
  },
  {
    ids: 4,
    title: "Shop",
  },
  {
    ids: 5,
    title: "By Now",
  },
];
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandelClick = () => {
    setIsOpen(true);
  };
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const closeModalHandleClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={classes.HamburgerIconWrapper}
        onClick={openModalHandelClick}
      >
        <IconHamburger />
      </div>
      <div
        onClick={closeModalHandleClick}
        className={`${classes.Backdrop} ${
          isOpen ? classes.Open : classes.Close
        }`}
      />

      <div
        className={`${classes.MobileMenu} ${
          isOpen ? classes.Open : classes.Close
        }`}
      >
        <div className={classes.MobileHeaderWrapper}>
          <div className={classes.LogoWrapper}>
            <Logo />
          </div>
          <div
            onClick={closeModalHandleClick}
            className={classes.CloseIconWrapper}
          >
            <IconClose />
          </div>
        </div>
        <hr />
        <div className={classes.MobileMenuElement}>
          <ul>
            {menuItem.map((item) => {
              return (
                <Fragment key={item.ids}>
                  <div>
                    <li>{item.title}</li>
                    <IconArrow />
                  </div>
                  <hr />
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
