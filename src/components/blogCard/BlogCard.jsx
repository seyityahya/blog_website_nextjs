import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import classes from "./blogCard.module.css";

const BlogCard = ({ blog: { title, desc, img } }) => {
  const isLiked = true;

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link className={classes.imgContainer} href="/">
          <Image src={img} alt="blog resmi" width="auto" height="auto" />
        </Link>
        <div className={classes.blogData}>
          <div className={classes.left}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>
              Created By: <span>1th of January</span>
            </span>
          </div>
          <div className={classes.right}>
            {12}{" "}
            {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
