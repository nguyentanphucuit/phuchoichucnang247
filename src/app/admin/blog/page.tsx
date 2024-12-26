"use client";
import { addDoc, collection } from "@firebase/firestore";
import React from "react";
import db from "@/app/utils/firestore";
import imageAuthor from "/public/assets/img/author.jpg";
// import blogList from "@/app/constants/blogListJSX";
// import { removeVietnameseTones, spaceToSlash } from "@/app/constants/common";
// import { renderToString } from "react-dom/server";

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

const BlogAdmin = () => {
  const [blog, setBlog] = React.useState({ ...emptyBlog });

  const handleBlogChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "blogs"), { ...blog });
      console.log("Document written with ID: ", docRef.id);
      setBlog({ ...emptyBlog });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // POST DATA BACKUP
    // let i = 0;
    // while (i < blogList.length) {
    //   try {
    //     const docRef = await addDoc(collection(db, "blogs"), {
    //       ...blog,
    //       href:
    //         "/blog/" + spaceToSlash(removeVietnameseTones(blogList[i].title)),
    //       content: renderToString(blogList[i].content),
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //     setBlog({ ...emptyBlog });
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    //   i++;
    // }
  };

  return (
    <div>
      <h1>Upload Blog</h1>
      <form className="flex flex-col gap-4 border p-10" onSubmit={onSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            className="border p-2 m-2"
            value={blog.title}
            onChange={handleBlogChange}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            name="date"
            className="border p-2 m-2"
            value={blog.date}
            onChange={handleBlogChange}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            name="content"
            className="border p-2 m-2"
            value={blog.content}
            onChange={handleBlogChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogAdmin;
