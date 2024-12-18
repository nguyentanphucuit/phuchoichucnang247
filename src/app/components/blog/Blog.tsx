import React from "react";
import blogList from "../../constants/blogListJSX";
import BlogPage from "@/app/blog/page";
import { BlogTypes } from "@/app/types/common";

const Blog = ({ title }: { title: string }) => {
  const id = blogList.findIndex(
    (blog) => blog.href.toLowerCase() === title.toLowerCase()
  );

  return id === -1 ? <BlogPage /> : <BlogTemplate {...blogList[id]} />;
};

const BlogTemplate = ({ ...props }: BlogTypes) => {
  return (
    <div className="flex flex-col gap-4">
      <div className=" text-slate-700 dark:text-slate-400">{props.date}</div>
      <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
        {props.title}
      </div>
      {props.content}
    </div>
  );
};

export default Blog;
