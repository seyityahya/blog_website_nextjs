"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPenFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import classes from "./blog.module.css";

const BlogDetails = (ctx) => {
  const [blogDetails, setBlogDetails] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [blogLikes, setBlogLikes] = useState(0);
  const { data: session } = useSession();

  console.log(blogDetails);

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(
        `http://localhost:3000/api/blog/${ctx.params.id}`,
        { cache: "no-store" }
      );
      const blog = await res.json();

      setBlogDetails(blog);
      setIsLiked(blog.likes.includes(session?.user?._id));
      setBlogLikes(blog?.likes?.length);
    }
    session && fetchBlog();
  }, [session]);

  const handleDelete = async () => {};

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Image alt="" src={blogDetails?.imageUrl} width="750" height="650" />
        <div className={classes.row}>
          <h3 className={classes.title}>{blogDetails?.title}</h3>
          {blogDetails?.authorId?._id.toString() ===
          session?.user?._id.toString() ? (
            <div className={classes.controls}>
              <Link
                className={classes.editButton}
                href={`/blog/edit/${ctx.params.id}`}
              >
                Edit <BsFillPenFill />
              </Link>
              <button onClick={handleDelete} className={classes.deleteButton}>
                Delete <AiFillDelete />
              </button>
            </div>
          ) : (
            <div className={classes.author}>
              Author: <span>{blogDetails?.authorId?.username}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
