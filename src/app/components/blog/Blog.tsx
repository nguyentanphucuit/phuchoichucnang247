import { BlogTypes } from "@/app/types/common";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "@/app/utils/firestore";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
const Blog = ({ title }: { title: string }) => {
  const [blog, setBlog] = useState<BlogTypes>();
  useEffect(() => {
    const fetchItems = async () => {
      // const docRef = doc(db, "blogs", "WyqJpikC6N7dNHtZhDLD");
      const q = query(
        collection(db, "blogs"),
        where("href", "==", "/blog/" + title)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setBlog(doc.data() as BlogTypes);
      });
      if (querySnapshot) {
        console.log("Document data:" + querySnapshot);
      } else {
        console.log("No such document!");
      }
    };

    fetchItems();
  }, [title]);
  return blog ? <BlogTemplate {...blog} /> : <div>Loading...</div>; // Data will be available as props in your component
};
const BlogTemplate = ({ ...props }: BlogTypes) => {
  console.log(props);

  return (
    <div className="flex flex-col gap-4">
      <div className=" text-slate-700 dark:text-slate-400">
        {props.date || ""}
      </div>
      <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
        {props.title || ""}
      </div>
      <div className="">{parse(props.content.slice(1, -1))}</div>
    </div>
  );
};

export default Blog;
