import Image from "next/image";
import Link from "next/link";
import blogList from "../../constants/blogListJSX";

const BlogRelated = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="">
        <div className="text-2xl font-extrabold">Bài viết gần đây</div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogList.map((blog) => (
            <article
              key={blog.id}
              className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.date} className="text-gray-500">
                  {blog.date}
                </time>
              </div>
              <div className="group relative py-2">
                <Link
                  className="mt-3 font-semibold text-gray-900 group-hover:text-gray-600"
                  href={blog.href}>
                  {blog.title}
                </Link>
                <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {blog.content}
                </div>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  alt=""
                  src={blog.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={blog.author.href}>
                      <span className="absolute inset-0" />
                      {blog.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{blog.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogRelated;
