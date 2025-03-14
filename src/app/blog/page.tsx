import BlogRelated from "../components/blog/BlogRelated";
import ListBlog from "../components/ListBlog";

const BlogPage = () => {
  return (
    <div>
      <div className="pt-72 sm:pt-20 w-screen hero-pattern"></div>
      <div className="max-h-max px-5 w-full mx-auto max-w-7xl">
        <ListBlog />
        <BlogRelated />
      </div>
    </div>
  );
};

export default BlogPage;
