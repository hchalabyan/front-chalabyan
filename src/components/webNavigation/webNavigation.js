import React, { useState, useEffect, Fragment } from "react";

import classes from "./webNavigation.module.scss";
import IconArrow from "../images/IconArrow";

const menuItem = [
  {
    ids: 0,
    title: "Demos",
    subMenu: [
      { id: 100, description: "Post Header" },
      { id: 101, description: "Post Layout" },
      { id: 102, description: "Share Buttons" },
      { id: 103, description: "Gallery Post" },
      { id: 104, description: "Video Post" },
    ],
  },
  {
    ids: 1,
    title: "Post",
    subMenu: [
      { id: 100, description: "Post Header" },
      { id: 101, description: "Post Layout" },
      { id: 102, description: "Share Buttons" },
      { id: 103, description: "Gallery Post" },
      { id: 104, description: "Video Post" },
    ],
  },
  {
    ids: 2,
    title: "Features",
    subMenu: [
      { id: 100, description: "Post Header" },
      { id: 101, description: "Post Layout" },
      { id: 102, description: "Share Buttons" },
      { id: 103, description: "Gallery Post" },
      { id: 104, description: "Video Post" },
    ],
  },
  {
    ids: 3,
    title: "Categories",
    subMenu: [
      { id: 100, description: "Post Header" },
      { id: 101, description: "Post Layout" },
      { id: 102, description: "Share Buttons" },
      { id: 103, description: "Gallery Post" },
      { id: 104, description: "Video Post" },
    ],
  },
  {
    ids: 4,
    title: "Shop",
    subMenu: [
      { id: 100, description: "Post Header" },
      { id: 101, description: "Post Layout" },
      { id: 102, description: "Share Buttons" },
      { id: 103, description: "Gallery Post" },
      { id: 104, description: "Video Post" },
    ],
  },
  {
    ids: 5,
    title: "By Now",
    subMenu: [
      { id: 100, description: "Post Header" },
      { id: 101, description: "Post Layout" },
      { id: 102, description: "Share Buttons" },
      { id: 103, description: "Gallery Post" },
      { id: 104, description: "Video Post" },
    ],
  },
];

const WebNavigation = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;
  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      if (lastScrollY > 200 && scrollDirection === "down") {
        setVisible(false);
      } else if (lastScrollY < 200 && scrollDirection === "up") {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <div
      className={`${classes.WebNavigationWrapper}  ${
        visible ? classes.Show : classes.Hide
      }`}
    >
      <hr />
      <div className={classes.WebNavigation}>
        <ul className={classes.NavMenu}>
          {menuItem.map((item) => {
            return (
              <div key={item.ids} className={classes.NavigationItems}>
                <li>{item.title}</li>
                <IconArrow />
                <ul className={classes.SubMenu}>
                  {item.subMenu.map((desc) => {
                    return (
                      <Fragment key={desc.id}>
                        <div className={classes.SubMenuItem}>
                          <li>{desc.description}</li>
                          <IconArrow />
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default WebNavigation;
