import Blog from "../components/blog/Blog";
import BlogCategory from "../components/blog/BlogRelated";

const BlogPage = () => {
  return (
    <div className="max-h-max w-full pt-12 mx-auto max-w-7xl px-6 lg:px-8">
      <Blog title={""} />
      <BlogCategory />
    </div>
  );
};

export default BlogPage;
