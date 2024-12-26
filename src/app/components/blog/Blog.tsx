import { BlogTypes } from "@/app/types/common";
import { doc, getDoc } from "firebase/firestore";
import db from "@/app/utils/firestore";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
const Blog = ({ title }: { title: string }) => {
  const [blog, setBlog] = useState<BlogTypes>();
  useEffect(() => {
    const fetchItems = async () => {
      const docRef = doc(db, "blogs", "WyqJpikC6N7dNHtZhDLD");
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setBlog(data as BlogTypes);
      if (docSnap.exists()) {
        console.log("Document data:", data);
      } else {
        console.log("No such document!");
      }
    };

    fetchItems();
  }, [title]);
  return blog ? <BlogTemplate {...blog} /> : <div>Loading...</div>; // Data will be available as props in your component
};

const BlogTemplate = ({ ...props }: BlogTypes) => {
  return (
    <div className="flex flex-col gap-4">
      <div className=" text-slate-700 dark:text-slate-400">
        {props.date || ""}
      </div>
      <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
        {props.title || ""}
      </div>
      {parse(props.content || "")}
    </div>
  );
};

export default Blog;
