"use client";
import React, { Suspense } from "react";
import Search from "../ui/search";
import {
  fetchFilteredBlog,
  fetchBlogsPage,
  totalNumberBlogSearchQuery,
} from "@/app/constants/common";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";
import BlogCard from "./blog/BlogCard";

const ListBlog = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const currentPage = searchParams.get("page") || 1;
  const blogs = fetchFilteredBlog(query, +currentPage);

  const totalPages = fetchBlogsPage(query);
  const totalItems = totalNumberBlogSearchQuery(query);

  return (
    <>
      <div className="pt-12">
        <Suspense>
          <Search placeholder="Tìm kiếm ..." />
        </Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
        <Pagination totalPages={totalPages} totalItems={totalItems} />
      </div>
    </>
  );
};

export default ListBlog;
