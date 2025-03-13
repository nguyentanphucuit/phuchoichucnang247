import { BlogTypes } from "@/app/types/common";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import db from "@/app/utils/firestore";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
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
  const [timeSpent, setTimeSpent] = useState(0);
  const [hasScrolled10, setHasScrolled10] = useState(false);
  const [viewTracked, setViewTracked] = useState(false);

  // Track time spent on page
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;
      const scrolledPercentage =
        ((scrollTop + clientHeight) / scrollHeight) * 100;
      if (scrolledPercentage >= 10) {
        setHasScrolled10(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async () => {
    try {
      const blogRef = doc(db, "blogs", props.id);
      await setDoc(blogRef, {
        ...props,
        views: props.views + 1,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Send API request when conditions are met
  useEffect(() => {
    if (timeSpent >= 1 && hasScrolled10 && !viewTracked) {
      handleSubmit();
      setViewTracked(true);
    }
  }, [timeSpent, hasScrolled10, viewTracked, props.title]);

  return (
    <div className="flex flex-col gap-4 pt-12">
      <div className=" text-slate-700 dark:text-slate-400">
        {props.date || ""}
        <span className="text-gray-500">
          <FontAwesomeIcon icon={faEye} className="px-4" />
          {props.views} lượt xem
        </span>
      </div>
      <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
        {props.title || ""}
      </div>
      <div className="tiptap">{parse(props.content.slice(1, -1))}</div>
    </div>
  );
};

export default Blog;
