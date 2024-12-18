import blogList from "../../constants/blogListJSX";
import BlogCard from "./BlogCard";

const BlogRelated = () => {
  const listRandomBlogs = blogList.sort(() => Math.random() - 0.5);
  const listBLogRelated = listRandomBlogs.slice(0, 3);
  return (
    <div className="bg-white py-6 sm:py-12">
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {listBLogRelated.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogRelated;
