import React, { useState } from "react";
import classes from "./slider.module.scss";
import arrowIcon from "../../assets/up-arrow.png";

const Slider = () => {
  const [mouseIn, setMouseIn] = useState(null);
  document.body.style.overflow = "hidden";
  const addTranslationHandler = () => {
    setMouseIn(true);
  };
  const removeTranslationHandler = () => {
    setMouseIn(false);
  };

  return (
    <div
      className={classes.BannerWrapper}
      onMouseOver={addTranslationHandler}
      onMouseLeave={removeTranslationHandler}
    >
      <div className={`${classes.FirstBanner} `}>
        <p className={`${mouseIn ? classes.animate : ""}`}>sale up to 50%</p>
        <h1 className={`${mouseIn ? classes.animate : ""}`}>Molestie Cursus</h1>
      </div>
      <div
        className={`${classes.SecondBanner} ${
          mouseIn ? classes.showSecondBanner : ""
        }`}
      >
        <p>sale up to 50%</p>
        <h1>Pulvinar Amet Morbi Efficitur Justo</h1>
        <div className={classes.SecondBannerImage} />
        <div className={classes.Footer}>
          <p className={classes.Info}>
            Nunc venenatis adipiscing mauris lorem non risus molestie ut. Dolor
            ex. Cras sodales efficitur nec{" "}
          </p>
          <div className={classes.ShopAll}>
            <a>Shop All</a>
            <img src={arrowIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
