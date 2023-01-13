import React from "react";
import classes from "./post.module.scss";
const Post = (props) => {
    return(
        <div className={classes.Post}>
            <div></div>
            <p>{props.categori}</p>
            <h1>{props.title}</h1>
            <p> {props.subTitle}<span>{props.date}</span> <span>{props.view}</span></p>
            <p>{props.content}</p>
        </div>
    )
}

export default Post;