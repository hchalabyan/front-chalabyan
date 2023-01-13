import React from "react";
import classes from "../post.module.scss";
const Post = (props) => {
  return (
    <div className={classes.Post}>
      <img alt="image"  srcSet={`${props.url} 300w, ${props.url} 768w, ${props.url} 1280w`} />
      <p className={classes.Category}>{props.category}</p>
      <h1>{props.title}</h1>
      <p className={classes.SubTitle}>
        {" "}
        {props.subTitle} <span> {props.date}</span> <span>{props.view}</span>
      </p>
      <p className={classes.Content}>{props.content}</p>
    </div>
  );
};

export default Post;
