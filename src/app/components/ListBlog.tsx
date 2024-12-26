"use client";
import React, { Suspense, useEffect, useState } from "react";
import Search from "../ui/search";
// import {
//   fetchFilteredBlog,
//   fetchBlogsPage,
//   totalNumberBlogSearchQuery,
// } from "@/app/constants/common";
// import Pagination from "./Pagination";
// import { useSearchParams } from "next/navigation";
import BlogCard from "./blog/BlogCard";
import { collection, getDocs } from "@firebase/firestore";
import db from "../utils/firestore";
import { BlogTypes } from "../types/common";
import { emptyAuthor } from "../constants";
// import blogList from "../constants/blogListJSX";
// import parse from "html-react-parser";

const ListBlog = () => {
  // const searchParams = useSearchParams();
  const [items, setItems] = useState<BlogTypes[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      setItems(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            date: data.date,
            title: data.title,
            subtitle: data.subtitle,
            related: data.related,
            href: data.href,
            content: data.content,
            author: data.author && emptyAuthor,
          };
        })
      );
    };

    fetchItems();
  }, []);

  // const query = searchParams.get("query") || "";
  // const currentPage = searchParams.get("page") || 1;
  // const blogs = fetchFilteredBlog(query, +currentPage);

  // const totalPages = fetchBlogsPage(query);
  // const totalItems = totalNumberBlogSearchQuery(query);
  console.log(items);
  return (
    <>
      <div className="pt-12">
        <Suspense>
          <Search placeholder="Tìm kiếm ..." />
        </Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
          {items.map((blog) => (
            <BlogCard key={blog.href} {...blog} />
          ))}
        </div>
        {/* <Pagination totalPages={totalPages} totalItems={totalItems} /> */}
      </div>
    </>
  );
};

export default ListBlog;
