// import ConvertText from "@/app/components/ConvertText";
"use client";
import Tiptap from "@/app/components/Tiptap";
import React from "react";
import { addDoc, collection } from "@firebase/firestore";
import db from "@/app/utils/firestore";
import { emptyBlog } from "@/app/constants";
import { removeVietnameseTones, spaceToSlash } from "@/app/constants/common";

const CreateBlog = () => {
  const [blog, setBlog] = React.useState({ ...emptyBlog });
  const date = new Date().toDateString();

  const handleContentChange = (newContent: string) => {
    setBlog({ ...blog, content: newContent });
  };

  const handleRelatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, related: e.target.checked });
  };

  const handleBlogChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        ...blog,
        content: JSON.stringify(blog.content).replaceAll("\\", ""),
        href: "/blog/" + spaceToSlash(removeVietnameseTones(blog.title)),
        date: date,
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
        <div className="px-4">
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
        </div>
        <div className="px-4">
          <label>
            Subtitle:
            <input
              type="text"
              name="subtitle"
              className="border p-2 m-2"
              value={blog.subtitle}
              onChange={handleBlogChange}
            />
          </label>
        </div>
        <div className="p-1">
          <label className="inline-flex items-center cursor-pointer">
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Related :
            </span>
            <input
              type="checkbox"
              name="related"
              checked={blog.related}
              onChange={handleRelatedChange}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <Tiptap
          content={blog.content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </div>
  );
};

export default CreateBlog;
