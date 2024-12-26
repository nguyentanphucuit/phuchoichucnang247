// import ConvertText from "@/app/components/ConvertText";
"use client";
import Tiptap from "@/app/components/Tiptap";
import React from "react";
import { addDoc, collection } from "@firebase/firestore";
import db from "@/app/utils/firestore";
import imageAuthor from "/public/assets/img/author.jpg";

const emptyBlog = {
  id: "",
  title: "",
  href: "",
  date: "",
  content: "",
  author: {
    author: {
      name: "Minh Vương Nguyễn",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
};

const Convert = () => {
  const [blog, setBlog] = React.useState({ ...emptyBlog });
  // const date = new Date().toDateString();

  const handleContentChange = (newContent: string) => {
    setBlog({ ...blog, content: newContent });
  };

  const handleBlogChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        ...blog,
        content: JSON.stringify(blog.content),
        // date: date,
      });
      console.log("Document written with ID: ", docRef.id);
      setBlog({ ...emptyBlog });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="w-2/3 h-full">
      <form onSubmit={handleSubmit}>
        <p className="p-4">Create, Update, Delete Your Blog</p>
        <label className="p-4">
          Title:
          <input
            type="text"
            name="title"
            className="border p-2 m-2"
            value={blog.title}
            onChange={handleBlogChange}
          />
        </label>
        <Tiptap
          content={blog.content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </div>
  );
};

export default Convert;
