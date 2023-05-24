"use client";
import { useSession } from "next-auth/session";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import classes from "./edit.module.css";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Nature");
  const [photo, setPhoto] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  return <div>Edit</div>;
};

export default Edit;
