"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { collection, getDocs, query, where } from "@firebase/firestore";
import db from "@/app/utils/firestore";
import { BlogTypes } from "@/app/types/common";
import { emptyAuthor } from "@/app/constants";

const BlogRelated = () => {
  const [listBLogRelated, setListBLogRelated] = useState<BlogTypes[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const listQuerySnapshot = [] as BlogTypes[];

      const q = query(collection(db, "blogs"), where("related", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        listQuerySnapshot.push({
          ...(doc.data() as BlogTypes),
          author: doc.data().author && emptyAuthor,
        });
      });
      console.log(listQuerySnapshot);

      // console.log(querySnapshot);
      setListBLogRelated([...listQuerySnapshot].slice(0, 3));

      if (querySnapshot) {
        console.log("Document data:", querySnapshot);
      } else {
        console.log("No such document!");
      }
    };

    fetchItems();
  }, []);

  console.log(listBLogRelated);

  return listBLogRelated.length > 0 ? (
    <div className="bg-white py-6 sm:py-12">
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {listBLogRelated.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default BlogRelated;
