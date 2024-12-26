"use client";
import Blog from "@/app/components/blog/Blog";
import BlogCategory from "../../components/blog/BlogRelated";

import { usePathname } from "next/navigation";

const BlogPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  return (
    <div className="max-h-max w-full pt-12 mx-auto max-w-7xl px-6 lg:px-8">
      <Blog title={slug || ""} />
      <BlogCategory />
    </div>
  );
};

export default BlogPage;
