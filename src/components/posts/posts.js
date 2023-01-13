import React, { Fragment } from "react";
import classes from "./post.module.scss";
import Post from "./post/post";
import img1 from "../../assets/imagesContent/content-img-1.png";
import img2 from "../../assets/imagesContent/content-img-2.png";
import img3 from "../../assets/imagesContent/content-img-3.png";
import img4 from "../../assets/imagesContent/content-img-4.png";
import img5 from "../../assets/imagesContent/content-img-5.png";
import img6 from "../../assets/imagesContent/content-img-6.png";
import img7 from "../../assets/imagesContent/content-img-7.png";
import img8 from "../../assets/imagesContent/content-img-8.png";
import img9 from "../../assets/imagesContent/content-img-9.png";
import { Link } from "react-router-dom";

const Posts = () => {
  const postData = [
    {
      id: 1,
      url: img1,
      category: "Lifestyle",
      title: "Eat Right For Your Exercise Regime",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      id: 2,
      url: img2,
      category: "Lifestyle",
      title: "The Look: Perfect Balance",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      id: 3,
      url: img3,
      category: "Style",
      title: "Fun Things to Do in Rome",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },

    {
      id: 4,
      url: img4,
      category: "Style",
      title: "24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      id: 5,
      url: img5,
      category: "Lifestyle",
      title: "9 New Songs to Heat Up Your Fall Playlist",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      id: 6,
      url: img6,
      category: "Events",
      title: "What You Need on Your Bedside Table",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      id: 7,
      url: img7,
      category: "Travel",
      title: "When Two Wheels Are Better Than Four",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      id: 8,
      url: img8,
      category: "Travel",
      title: "26 Living Room Ideas from the Homes of Top Designers",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      id: 9,
      url: img9,
      category: "Music",
      title: "What Makes Your City’s Style Unique",
      subTitle: "Niek Bove",
      date: "April 8, 2018",
      view: "3K Views",
      content:
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
  ];
  return (
    <>
      <div className={classes.PostsWrapper}>
        {postData.map((post) => {
          return (
            <Fragment key={post.id}>
              <Post
                url={post.url}
                category={post.category}
                title={post.title}
                subTitle={post.subTitle}
                date={post.date}
                view={post.view}
                content={post.content}
              />
            </Fragment>
          );
        })}
      </div>
      <button className="SliderBtn">
        <Link to="slider" target="_blank">
          Go To slider
        </Link>
      </button>
    </>
  );
};

export default Posts;
