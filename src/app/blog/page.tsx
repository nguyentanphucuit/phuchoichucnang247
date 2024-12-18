import BlogRelated from "../components/blog/BlogRelated";
import ListBlog from "../components/ListBlog";

const BlogPage = () => {
  return (
    <div className="max-h-max w-full pt-12 mx-auto max-w-7xl px-6 lg:px-8">
      <ListBlog />
      <BlogRelated />
    </div>
  );
};

export default BlogPage;
