"use client";
import React, { useState } from "react";
import parse from "html-react-parser";

const ConvertText = () => {
  const [blog, setBlog] = useState<string>("");

  // const transferBlog = (blog: string) => (
  //   <div className="w-full h-80 resize-y rounded-sm border-black border">
  //     {blog}
  //   </div>
  // );

  const onEdit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBlog(event.target.value);
  };

  return (
    <div className="w-screen flex flex-row justify-center items-center gap-4 p-24">
      <div className="w-1/2">
        <h1>Blog Before Formatting</h1>
        <textarea
          value={blog}
          className="w-full h-80 resize-y rounded-sm border-black border"
          onChange={onEdit}></textarea>
      </div>
      <div className="w-1/2">
        <h1>Blog After Formatting</h1>
        <div className="w-full resize-y rounded-sm border-black border">
          {parse(blog)}
        </div>
      </div>
    </div>
  );
};

export default ConvertText;
